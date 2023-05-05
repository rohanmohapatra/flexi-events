import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { AuthInterface } from './auth.interface';

@Injectable()
export class AuthService implements AuthInterface {
  constructor(private readonly authRepository: AuthRepository) {}

  changePassword(email: string, password: string, oldPassword: string) {
    return this.authRepository.changePassword(email, password, oldPassword);
  }

  async login(email: string, password: string) {
    return this.authRepository.login(email, password);
  }

  async signUp(email: string, password: string) {
    return this.authRepository.signUp(email, password);
  }
}
