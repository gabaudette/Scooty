import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CharactersModule } from "./characters/characters.module";
import { Character } from "./characters/entities/characters.entity";
import { typeOrmConfig } from "./config/typeorm.config";
import { OAuthModule } from "./oauth2/oauth.module";

@Module({
    imports: [TypeOrmModule.forRoot({ ...typeOrmConfig, entities: [Character] }), OAuthModule, CharactersModule],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
