import {
  BadRequestException,
  Body,
  Controller,
  ForbiddenException,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'models/User';
import * as jwt from 'jsonwebtoken';
import { ApiTags } from '@nestjs/swagger';
import { ChangePasswordDTO } from 'dto/user.dto';

@ApiTags('auth')
@Controller('auth')
export class UserController {
  constructor(private readonly userService: UserService) {}

  private generateAccessToken(username: string) {
    return jwt.sign({ username: username }, process.env.JWT_TOKEN_SECRET, {
      expiresIn: '24000s',
    });
  }

  @Post('login')
  async login(@Body() userBody: User) {
    const isLoginSuccessful = await this.userService.login(
      userBody.username,
      userBody.password,
    );

    if (isLoginSuccessful) {
      return { accessToken: this.generateAccessToken(userBody.username) };
    }
    throw new ForbiddenException('Password is incorrect');
  }

  @Post('signup')
  async signUp(@Body() userBody: User) {
    const isSignUpSuccessful = await this.userService.signUp(
      userBody.username,
      userBody.password,
    );

    if (isSignUpSuccessful) {
      return { message: 'SignUp successful' };
    }
    throw new BadRequestException('Username is already present');
  }

  @Post('changePassword')
  async changePassword(@Body() userBody: ChangePasswordDTO) {
    const isPasswordChangeSuccessful = await this.userService.changePassword(
      userBody.username,
      userBody.password,
      userBody.oldPassword,
    );

    if (isPasswordChangeSuccessful) {
      return { message: 'Pasword change successful' };
    }
    throw new BadRequestException('Could not change password');
  }
}
