import { Injectable, OnModuleInit } from '@nestjs/common';
import { mapping } from 'cassandra-driver';
import { CassandraService } from 'cassandra/cassandra.service';
import { User } from 'models/User';
import * as bcrypt from 'bcrypt';
import { UserInterface } from './user.interface';

@Injectable()
export class UserRepository implements OnModuleInit, UserInterface {
  constructor(private readonly cassandraService: CassandraService) {}

  private userMapper: mapping.ModelMapper<User>;
  private saltRounds: number;

  onModuleInit() {
    const mappingOptions: mapping.MappingOptions = {
      models: {
        User: {
          tables: ['users'],
          mappings: new mapping.UnderscoreCqlToCamelCaseMappings(),
        },
      },
    };
    this.saltRounds = 10;
    this.userMapper = this.cassandraService
      .createMapper(mappingOptions)
      .forModel('User');
  }

  private async createOldPasswordColumn() {
    const query = 'ALTER TABLE users ADD old_password text;';
    try {
      const response = await this.cassandraService.client.execute(query);
      return response.wasApplied();
    } catch (error) {
      // no op
    }
  }

  async login(username: string, password: string) {
    const user = (await this.userMapper.find({ username })).first();
    if (!user) {
      return false;
    }
    const isLoginSuccessful = await bcrypt.compare(password, user.password);
    return isLoginSuccessful;
  }

  async signUp(username: string, password: string) {
    const user = (await this.userMapper.find({ username })).first();
    if (user) {
      return false;
    }
    const passwordHash = await bcrypt.hash(password, this.saltRounds);
    const response = await this.userMapper.insert({
      username,
      password: passwordHash,
    });
    return response.wasApplied;
  }

  async changePassword(
    username: string,
    password: string,
    oldPassword: string,
  ) {
    const user = (await this.userMapper.find({ username })).first();
    if (!user) {
      return false;
    }
    const isOldPasswordCorrect = await bcrypt.compare(
      oldPassword,
      user.password,
    );

    if (!isOldPasswordCorrect) {
      return false;
    }

    // TODO: verify if new password not equal to old password

    await this.createOldPasswordColumn();

    const passwordHash = await bcrypt.hash(password, this.saltRounds);
    const response = await this.userMapper.update({
      username,
      password: passwordHash,
      oldPassword: user.password,
    });
    return response.wasApplied;
  }
}
