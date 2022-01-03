import { Injectable, Logger, Post } from "@nestjs/common";
import { OAuthModule } from "./oauth2/oauth.module";
import { OAuthService } from "./oauth2/services/oauth.service";

@Injectable()
export class AppService {
    constructor(private oauthService: OAuthService) {}
}
