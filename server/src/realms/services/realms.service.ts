import { Injectable, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { RealmRepository } from "../repository/realms.repository";
import { Realm } from "../entities/realms.entity";

@Injectable()
export class RealmService {
    constructor(@InjectRepository(RealmRepository) private realmRepository: RealmRepository) {}

    public async getAll(): Promise<Realm[]> {
        return await this.realmRepository.find();
    }
}
