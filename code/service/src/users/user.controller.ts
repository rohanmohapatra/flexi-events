import {
  BadRequestException,
  Body,
  Controller,
  ForbiddenException,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'models/User';
import { ApiTags } from '@nestjs/swagger';
import { ChangePasswordDTO } from 'dto/user.dto';
import { JwtService } from '@nestjs/jwt';

@ApiTags('auth')
@Controller('auth')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  private async generateAccessToken(email: string) {
    return await this.jwtService.signAsync({ email: email });
  }

  @Post('login')
  async login(@Body() userBody: User) {
    const isLoginSuccessful = await this.userService.login(
      userBody.email,
      userBody.password,
    );

    if (isLoginSuccessful) {
      return { accessToken: await this.generateAccessToken(userBody.email) };
    }
    throw new ForbiddenException('Password is incorrect');
  }

  @Post('signup')
  async signUp(@Body() userBody: User) {
    const isSignUpSuccessful = await this.userService.signUp(
      userBody.email,
      userBody.password,
    );

    if (isSignUpSuccessful) {
      return { message: 'SignUp successful' };
    }
    throw new BadRequestException('Email is already present');
  }

  @Post('changePassword')
  async changePassword(@Body() userBody: ChangePasswordDTO) {
    const isPasswordChangeSuccessful = await this.userService.changePassword(
      userBody.email,
      userBody.password,
      userBody.oldPassword,
    );

    if (isPasswordChangeSuccessful) {
      return { message: 'Pasword change successful' };
    }
    throw new BadRequestException('Could not change password');
  }
}
