import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "src/config/config.module";
import { OAuthModule } from "src/oauth2/oauth.module";
import { RealmModule } from "src/realms/realms.module";
import { RealmRepository } from "src/realms/repository/realms.repository";
import { CharacterController } from "./controllers/characters.controller";
import { CharacterRepository } from "./repository/characters.repository";
import { CharacterService } from "./services/characters.service";

@Module({
    imports: [
        HttpModule,
        ConfigModule,
        RealmModule,
        TypeOrmModule.forFeature([CharacterRepository, RealmRepository])
        // HttpModule.registerAsync({
        //     imports: [OAuthModule],
        //     useFactory: (oAuthService: OAuthService) => ({
        //         baseURL: process.env.API_BASE_URI,
        //         headers: oAuthService.getAuthorizationHeaders()
        //     }),
        //     inject: [OAuthService]
        // }) TODO DOESNT WORK
    ],
    controllers: [CharacterController],
    providers: [CharacterService]
})
export class CharacterModule {}
