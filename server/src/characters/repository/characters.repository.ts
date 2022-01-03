import { ConflictException, InternalServerErrorException, Logger } from "@nestjs/common";
import { Realm } from "src/realms/entities/realms.entity";
import { EntityRepository, Repository } from "typeorm";
import { CharacterDto } from "../dto/character.dto";
import { Character } from "../entities/characters.entity";

@EntityRepository(Character)
export class CharacterRepository extends Repository<Character> {
    public async createCharacter(dto: CharacterDto): Promise<Character> {
        const character: Character = new Character();
        character.links = dto.links;
        character.characterId = dto.characterId;
        character.name = dto.name;
        character.faction = dto.faction;
        character.race = dto.race;
        character.characterClass = dto.characterClass;
        character.activeSpec = dto.activeSpec;
        character.level = dto.level;
        character.achievementPoints = dto.achievementPoints;
        character.averageItemLevel = dto.averageItemLevel;
        character.equippedItemLevel = dto.equippedItemLevel;
        character.chosenCovenant = dto.chosenCovenant;
        character.renownLevel = dto.renownLevel;
        character.isPvpMeta = dto.isPvpMeta;
        character.realm = dto.realm;

        try {
            await character.save();

            //  delete character.realm;

            return character;
        } catch (error) {
            Logger.error(`${error.message} ${error.stack}`);

            //Duplicate username
            if (error.code === "23505") throw new ConflictException("Character already exists");
            else throw new InternalServerErrorException();
        }
    }
}
