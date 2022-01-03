import { Logger } from "@nestjs/common";
import { Realm } from "src/realms/entities/realms.entity";
import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import * as data from "./realms.json";

export default class RealmSeeder implements Seeder {
    jsonData = JSON.parse(JSON.stringify(data));
    realms = this.jsonData.realms;
    public async run(factory: Factory, connection: Connection) {
        this.realms.forEeach((realm) => {
            connection
                .createQueryBuilder()
                .insert()
                .into(Realm)
                .values([{ name: realm.name, realmId: realm.id, slug: realm.slug }]);
        });
    }
}
