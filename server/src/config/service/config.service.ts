import { Injectable } from "@nestjs/common";
import { OAuthService } from "src/oauth2/services/oauth.service";

@Injectable()
export class ConfigService {
    constructor(private oAuthService: OAuthService) {}

    public async getHttpConfig() {
        const bearer = `Bearer ${await this.oAuthService.getToken()}`;
        const headers = { Authorization: bearer, "Battlenet-Namespace": "profile-us" };

        return {
            headers: headers,
            params: { locale: "en_US" }
        };
    }
}
