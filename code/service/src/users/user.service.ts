import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserInterface } from './user.interface';

@Injectable()
export class UserService implements UserInterface {
  constructor(private readonly userRepository: UserRepository) {}

  changePassword(username: string, password: string, oldPassword: string) {
    return this.userRepository.changePassword(username, password, oldPassword);
  }

  async login(username: string, password: string) {
    return this.userRepository.login(username, password);
  }

  async signUp(username: string, password: string) {
    return this.userRepository.signUp(username, password);
  }
}
