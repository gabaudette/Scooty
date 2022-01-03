import { Injectable } from "@nestjs/common";
import { OAuthService } from "src/oauth2/services/oauth.service";

@Injectable()
export class ConfigService {
    constructor(private oAuthService: OAuthService) {}

    // TODO Refactor add the data/profile etc in url
    // TODO Refactor namespace enum
    public async getHttpConfig(namespace: string) {
        const bearer = `Bearer ${await this.oAuthService.getToken()}`;
        const headers = { Authorization: bearer, "Battlenet-Namespace": namespace };

        return {
            headers: headers,
            params: { locale: "en_US" }
        };
    }
}
