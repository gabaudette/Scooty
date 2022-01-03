import { Controller, Get, Param, Query } from "@nestjs/common";
import { Character } from "../entities/characters.entity";
import { CharactersService } from "../services/characters.service";

@Controller("character")
export class CharactersController {
    constructor(private service: CharactersService) {}

    @Get(":realmSlug/:characterName")
    public async getCharacter(@Param("realmSlug") realmSlug: string, @Param("characterName") characterName: string): Promise<Character> {
        return this.service.getCharacter(realmSlug, characterName);
    }

    @Get("meta/:characterClass")
    public async getMetaCharacters(@Param("characterClass") characterClass: string, @Query("pvp") pvp: boolean): Promise<Character> {
        return this.service.getMetaCharacter(characterClass, pvp);
    }
}
