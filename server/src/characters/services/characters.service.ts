import { HttpService } from "@nestjs/axios";
import { Injectable, Logger } from "@nestjs/common";
import { lastValueFrom } from "rxjs";
import { OAuthService } from "src/oauth2/services/oauth.service";
import { Character } from "../entities/characters.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { CharacterRepository } from "../repository/characters.repository";
import { CharacterDto } from "../dto/character.dto";
import { ConfigService } from "src/config/service/config.service";
import { RealmRepository } from "src/realms/repository/realms.repository";
import { Realm } from "src/realms/entities/realms.entity";

@Injectable()
export class CharacterService {
    constructor(
        private httpService: HttpService,
        private configService: ConfigService,
        @InjectRepository(CharacterRepository) private characterRepository: CharacterRepository,
        @InjectRepository(RealmRepository) private realmRepository: RealmRepository
    ) {}

    public async test() {}

    // Get the most "meta" character base on the average of all the top players playing this class
    public getMetaCharacter(characterClass: string, pvp: boolean = false): Character {
        return null;
    }

    public async getCharacter(realmSlug: string, characterName: string): Promise<Character> {
        const character = await this.characterRepository.findOne({
            relations: ["realm"],
            where: [{ realm: { slug: realmSlug }, name: characterName }]
        });

        if (character !== undefined) {
            return character;
        }

        const response = this.httpService.get(
            `${process.env.API_BASE_URI}/profile/wow/character/${realmSlug}/${characterName}`,
            await this.configService.getHttpConfig()
        );

        const data = (await lastValueFrom(response)).data;

        const realm: Realm = await this.realmRepository.findOne({ where: [{ slug: realmSlug }] });

        Logger.verbose(data);
        const dto: CharacterDto = {
            links: data._links.self.href,
            characterId: data.id,
            name: data.name,
            faction: data.faction.name,
            race: data.race.name,
            characterClass: data.character_class.name,
            activeSpec: data.active_spec.name,
            level: data.level,
            achievementPoints: data.achievement_points,
            averageItemLevel: data.average_item_level,
            equippedItemLevel: data.equipped_item_level,
            chosenCovenant: data.covenant_progress.chosen_covenant.name,
            renownLevel: data.covenant_progress.renown_level,
            isPvpMeta: false,
            realm
        };

        Logger.verbose(dto);

        return await this.createCharacter(dto);
    }

    private async createCharacter(dto: CharacterDto) {
        return await this.characterRepository.createCharacter(dto);
    }

    private getPveLeaderBoardCharactersByClass(characterClass: string): Character[] {
        return null;
    }

    // private getPvpLeaderBoardCharactersByClass(characterClass: string): Character[] {
    //     _links: id: name: faction: race: character_class: active_spec: realm: level: achievement_points: pvp_summary: encounters: media: hunter_pets: average_item_level: equipped_item_level: specializations: statistics: mythic_keystone_profile: equipment: appearance: collections: professions: chosen_covenant: renown_level: soulbinds: isPvpMeta: return null;
    // }
}
