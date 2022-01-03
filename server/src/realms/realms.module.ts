import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "src/config/config.module";
import { RealmController } from "./controllers/realms.controller";
import { RealmRepository } from "./repository/realms.repository";
import { RealmService } from "./services/realms.service";

@Module({
    imports: [TypeOrmModule.forFeature([RealmRepository]), HttpModule, ConfigModule],
    controllers: [RealmController],
    providers: [RealmService]
})
export class RealmModule {}
