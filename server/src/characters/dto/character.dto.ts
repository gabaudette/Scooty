import { Expose } from "class-transformer";
import { IsBoolean, IsInt, IsString } from "class-validator";

export class CharacterDto {
    @Expose()
    @IsString()
    links: string;

    @Expose()
    @IsInt()
    characterId: number;

    @Expose()
    @IsString()
    name: string;

    @Expose()
    @IsString()
    faction: string;

    @Expose()
    @IsString()
    race: string;

    @Expose()
    @IsString()
    characterClass: string;

    @Expose()
    @IsString()
    activeSpec: string;

    @Expose()
    @IsString()
    realm: string;

    @Expose()
    @IsString()
    realmSlug: string;

    @Expose()
    @IsInt()
    level: number;

    @Expose()
    @IsInt()
    achievementPoints: number;

    @Expose()
    @IsInt()
    averageItemLevel: number;

    @Expose()
    @IsInt()
    equippedItemLevel: number;

    @Expose()
    @IsString()
    chosenCovenant: string;

    @Expose()
    @IsInt()
    renownLevel: number;

    @Expose()
    @IsBoolean()
    isPvpMeta: boolean;
}
