import { MigrationInterface, QueryRunner } from "typeorm";
import * as data from "./realms.json";

export class RealmSeeder1641243488820 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        const jsonData = JSON.parse(JSON.stringify(data));
        const realms = jsonData.realms;
    }

    public async down(queryRunner: QueryRunner): Promise<void> {}
}
