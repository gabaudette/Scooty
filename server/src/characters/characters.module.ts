import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OAuthModule } from "src/oauth2/oauth.module";
import { CharactersController } from "./controllers/characters.controller";
import { Character } from "./entities/characters.entity";
import { CharacterRepository } from "./repository/characters.repository";
import { CharactersService } from "./services/characters.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([CharacterRepository]),
        // HttpModule.registerAsync({
        //     imports: [OAuthModule],
        //     useFactory: (oAuthService: OAuthService) => ({
        //         baseURL: process.env.API_BASE_URI,
        //         headers: oAuthService.getAuthorizationHeaders()
        //     }),
        //     inject: [OAuthService]
        // }) TODO DOESNT WORK
        HttpModule,
        OAuthModule
    ],
    controllers: [CharactersController],
    providers: [CharactersService]
})
export class CharactersModule {}
