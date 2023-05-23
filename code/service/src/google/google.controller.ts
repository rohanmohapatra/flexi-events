import { Controller, Get, Query, Request, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'auth/auth.guard';
import { GoogleService } from './google.service';

@ApiTags('google')
@Controller('google')
export class GoogleContoller {
  constructor(private readonly googleService: GoogleService) {}
  @Get('signIn')
  async signInToGoogle(@Request() request) {
    const uri = await this.googleService.authorize('aubergine');
    return { redirectUri: uri };
  }

  @Get('oauthredirect')
  async oauthRedirect(@Query() query) {
    const { code, state } = query;
    console.log(code, state);
    const data = await this.googleService.getAccessToken(code);
    // return response.redirect(
    //   `http://localhost:3000/zoomAuth?accessToken=${data['access_token']}`,
    // );
  }
}
