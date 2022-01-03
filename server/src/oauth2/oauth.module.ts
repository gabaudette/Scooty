import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { OAuthService } from "./services/oauth.service";

@Module({
    imports: [HttpModule],
    providers: [OAuthService],
    exports: [OAuthService]
})
export class OAuthModule {}
