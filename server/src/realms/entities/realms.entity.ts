import { Character } from "src/characters/entities/characters.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class Realm extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "realm_id", type: "int" })
    realmId: number;

    @Column()
    slug: string;

    @Column()
    name: string;

    @OneToMany(() => Character, (character) => character.realm)
    characters: Character[];
}
