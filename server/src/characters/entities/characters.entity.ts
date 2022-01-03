import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
export class Character extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    links: string;

    @Column({ name: "character_id", type: "int" })
    characterId: number;

    @Column()
    name: string;

    @Column()
    faction: string;

    @Column()
    race: string;

    @Column({ name: "character_class" })
    characterClass: string;

    @Column({ name: "active_spec" })
    activeSpec: string;

    @Column()
    realm: string;

    @Column()
    realmSlug: string;

    @Column("int")
    level: number;

    @Column({ name: "achievement_points", type: "int" })
    achievementPoints: number;

    @Column({ name: "average_item_level", type: "int" })
    averageItemLevel: number;

    @Column({ name: "equipped_item_level", type: "int" })
    equippedItemLevel: number;

    @Column({ name: "chosen_covenant" })
    chosenCovenant: string;

    @Column({ name: "renown_level", type: "int" })
    renownLevel: number;

    @Column({ name: "is_pvp_meta", default: false })
    isPvpMeta: boolean;

    // TODO Linked table that are not provide by the profile api like hunter pets, soulbinds, equipement
}
