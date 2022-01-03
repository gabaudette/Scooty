import { HttpService } from "@nestjs/axios";
import { Injectable, Logger } from "@nestjs/common";
import { lastValueFrom } from "rxjs";
import { OAuthService } from "src/oauth2/services/oauth.service";
import { InjectRepository } from "@nestjs/typeorm";
import { RealmRepository } from "../repository/realms.repository";
import { Realm } from "../entities/realms.entity";

@Injectable()
export class RealmService {
    constructor(private httpService: HttpService, @InjectRepository(RealmRepository) private realmRepository: RealmRepository) {}

    public async getAll(): Promise<Realm[]> {
        return await this.realmRepository.find();
    }
}
