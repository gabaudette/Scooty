import { Module } from "@nestjs/common";
import { OAuthModule } from "src/oauth2/oauth.module";
import { ConfigService } from "./service/config.service";

@Module({
    imports: [OAuthModule],
    providers: [ConfigService],
    exports: [ConfigService]
})
export class ConfigModule {}
