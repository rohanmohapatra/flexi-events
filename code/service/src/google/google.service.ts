import { Injectable } from '@nestjs/common';
import { google } from 'googleapis';
import * as path from 'path';

@Injectable()
export class GoogleService {
  private scopes: string[];
  private redirectUri: string;
  constructor() {
    this.scopes = ['https://www.googleapis.com/auth/calendar.events'];
    this.redirectUri = 'http://localhost:4000/google/oauthredirect';
  }
  async authorize(token: string) {
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      this.redirectUri,
    );
    const authorizationUrl = oauth2Client.generateAuthUrl({
      access_type: 'online',
      scope: this.scopes,
      include_granted_scopes: true,
      state: token,
    });
    return authorizationUrl;
  }

  async getAccessToken(code: string) {
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      this.redirectUri,
    );
    let { tokens } = await oauth2Client.getToken(code);
    console.log(tokens);
  }
}
