import { EntityRepository, Repository } from "typeorm";
import { Realm } from "../entities/realms.entity";

@EntityRepository(Realm)
export class RealmRepository extends Repository<Realm> {}
