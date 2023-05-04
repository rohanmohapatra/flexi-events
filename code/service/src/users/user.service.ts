import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserInterface } from './user.interface';

@Injectable()
export class UserService implements UserInterface {
  constructor(private readonly userRepository: UserRepository) {}

  changePassword(email: string, password: string, oldPassword: string) {
    return this.userRepository.changePassword(email, password, oldPassword);
  }

  async login(email: string, password: string) {
    return this.userRepository.login(email, password);
  }

  async signUp(email: string, password: string) {
    return this.userRepository.signUp(email, password);
  }
}
