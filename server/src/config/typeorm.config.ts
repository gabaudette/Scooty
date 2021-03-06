import { TypeOrmModuleOptions } from "@nestjs/typeorm";
require("dotenv").config();
export const typeOrmConfig: TypeOrmModuleOptions = {
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT) || 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + "/../**/*.entity.{js,ts}"],
    migrationsTableName: "custom_migration_table",
    migrations: ["dist/migration/*.js"],
    cli: {
        migrationsDir: "migration"
    },
    synchronize: process.env.NODE_EN === "development" //Remove in production
};
