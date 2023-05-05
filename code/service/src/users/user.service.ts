import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from 'models/User';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async addUserProfile(user: User) {
    return await this.userRepository.addUserProfile(user);
  }

  async getUserProfile(email: string) {
    return await this.userRepository.getUserProfile(email);
  }
}
