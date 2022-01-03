import { Controller, Get, Param, Query } from "@nestjs/common";
import { Realm } from "../entities/realms.entity";
import { RealmService } from "../services/realms.service";

@Controller("realm")
export class RealmController {
    constructor(private service: RealmService) {}

    @Get()
    public async getAll(): Promise<Realm[]> {
        return this.service.getAll();
    }
}
