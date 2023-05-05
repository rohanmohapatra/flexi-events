import { Injectable, OnModuleInit } from '@nestjs/common';
import { mapping } from 'cassandra-driver';
import { CassandraService } from 'cassandra/cassandra.service';
import { User } from 'models/User';

@Injectable()
export class UserRepository implements OnModuleInit {
  constructor(private readonly cassandraService: CassandraService) {}

  private userMapper: mapping.ModelMapper<User>;

  onModuleInit() {
    const mappingOptions: mapping.MappingOptions = {
      models: {
        User: {
          tables: ['users'],
          mappings: new mapping.UnderscoreCqlToCamelCaseMappings(),
        },
      },
    };
    this.userMapper = this.cassandraService
      .createMapper(mappingOptions)
      .forModel('User');
  }

  async addUserProfile(user: User) {
    return await this.userMapper.insert(user);
  }

  async getUserProfile(email: string) {
    return (await this.userMapper.find({ email })).first();
  }
}
