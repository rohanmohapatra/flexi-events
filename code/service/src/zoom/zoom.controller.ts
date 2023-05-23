import {
  Controller,
  Get,
  Post,
  Query,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'auth/auth.guard';
import { ZoomService } from './zoom.service';
@ApiTags('zoom')
@Controller('zoom')
export class ZoomContoller {
  private redirectUri;
  constructor(private readonly zoomService: ZoomService) {
    this.redirectUri = 'http://localhost:4000/zoom/oauthredirect';
  }

  @UseGuards(AuthGuard)
  @Get('signIn')
  async signInToZoom(@Request() request) {
    const [_, token] = request.headers.authorization?.split(' ') ?? [];
    const uri = `https://zoom.us/oauth/authorize?response_type=code&client_id=${
      process.env.ZOOM_CLIENT_ID
    }&redirect_uri=${encodeURIComponent(this.redirectUri)}&state=${token}`;
    return { redirectUri: uri };
  }

  @Get('oauthredirect')
  async oauthRedirect(@Query() query, @Res() response) {
    const { code, state } = query;
    const data = await this.zoomService.getZoomAccessToken(code);
    return response.redirect(
      `http://localhost:3000/zoomAuth?accessToken=${data['access_token']}`,
    );
  }
}
