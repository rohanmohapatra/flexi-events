import {
  BadRequestException,
  Body,
  Controller,
  ForbiddenException,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { ChangePasswordDTO } from 'dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { Auth } from 'models/Auth';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private jwtService: JwtService,
  ) {}

  private async generateAccessToken(email: string) {
    return await this.jwtService.signAsync({ email: email });
  }

  @Post('login')
  async login(@Body() authBody: Auth) {
    const isLoginSuccessful = await this.authService.login(
      authBody.email,
      authBody.password,
    );

    if (isLoginSuccessful) {
      return { accessToken: await this.generateAccessToken(authBody.email) };
    }
    throw new ForbiddenException('Password is incorrect');
  }

  @Post('signup')
  async signUp(@Body() authBody: Auth) {
    const isSignUpSuccessful = await this.authService.signUp(
      authBody.email,
      authBody.password,
    );

    if (isSignUpSuccessful) {
      return { message: 'SignUp successful' };
    }
    throw new BadRequestException('Email is already present');
  }

  @Post('changePassword')
  async changePassword(@Body() authBody: ChangePasswordDTO) {
    const isPasswordChangeSuccessful = await this.authService.changePassword(
      authBody.email,
      authBody.password,
      authBody.oldPassword,
    );

    if (isPasswordChangeSuccessful) {
      return { message: 'Pasword change successful' };
    }
    throw new BadRequestException('Could not change password');
  }
}
