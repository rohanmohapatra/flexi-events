import {
  Controller,
  Get,
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
  constructor(private readonly zoomService: ZoomService) {}
  @Get('signIn')
  async signInToZoom(@Request() request, @Res() response) {
    const uri = `https://zoom.us/oauth/authorize?response_type=code&client_id=${process.env.ZOOM_CLIENT_ID}&redirect_uri=http%3A%2F%2Flocalhost%3A4000%2Fzoom%2Foauthredirect`;
    return response.redirect(uri);
  }

  @Get('oauthredirect')
  async oauthRedirect(@Query() query, @Res() response) {
    const { code } = query;
    const data = await this.zoomService.getZoomAccessToken(code);
    return response.redirect(
      `http://localhost:3000/zoomAuth?accessToken=${data['access_token']}`,
    );
  }
}
