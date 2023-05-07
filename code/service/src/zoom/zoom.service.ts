import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as qs from 'qs';

@Injectable()
export class ZoomService {
  async getZoomAccessToken(code: String) {
    const authorization = `${process.env.ZOOM_CLIENT_ID}:${process.env.ZOOM_CLIENT_SECRET}`;
    const authorizationBase64 = Buffer.from(authorization).toString('base64');
    const body = {
      grant_type: 'authorization_code',
      code,
      redirect_uri: 'http://localhost:4000/zoom/oauthredirect',
    };
    const response = await axios.post(
      process.env.ZOOM_TOKEN_URI,
      qs.stringify(body),
      {
        headers: {
          Authorization: `Basic ${authorizationBase64}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );
    return response.data;
  }
}
