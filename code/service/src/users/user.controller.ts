import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
  Param,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'models/User';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'auth/auth.guard';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  async getUsers() {
    return { message: 'Hello from Users' };
  }

  @UseGuards(AuthGuard)
  @Post('createProfile')
  async createProfile(@Body() userBody: User, @Request() request) {
    this.userService.addUserProfile({ ...userBody, email: request.user.email });
    return {
      message: 'Profile created',
    };
  }

  @Get('profile/:email')
  async getProfile(@Param('email') email: string) {
    return await this.userService.getUserProfile(email);
  }

  @Get('/me')
  @UseGuards(AuthGuard)
  async getMe(@Request() request) {
    return await this.userService.getUserProfile(request.user.email);
  }
}
