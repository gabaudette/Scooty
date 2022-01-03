import { HttpService } from "@nestjs/axios";
import { Injectable, Logger } from "@nestjs/common";
import { lastValueFrom } from "rxjs";

@Injectable()
export class OAuthService {
    constructor(private httpService: HttpService) {}

    public async getToken(): Promise<string> {
        try {
            const response = this.httpService.request({
                baseURL: process.env.OAUTH_TOKEN_HOST,
                method: "POST",
                data: "grant_type=client_credentials",
                auth: {
                    username: process.env.CLIENT_ID,
                    password: process.env.CLIENT_SECRET
                }
            });
            return (await lastValueFrom(response)).data.access_token;
        } catch (error) {
            Logger.error("Access Token error", error.message);
        }
    }
}
