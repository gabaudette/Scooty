class CharacterModel {
  int? id;
  final String? links;
  final int? characterId;
  final String? name;
  final String? faction;
  final String? race;
  final String? characterClass;
  final String? activeSpec;
  final String? realm;
  final String? realmSlug;
  final int? level;
  final int? achievementPoints;
  final int? averageItemLevel;
  final int? equippedItemLevel;
  final String? chosenCovenant;
  final int? renownLevel;
  final bool? isPvpMeta;

  CharacterModel({
    this.id,
    this.links,
    this.characterId,
    this.name,
    this.faction,
    this.race,
    this.characterClass,
    this.activeSpec,
    this.realm,
    this.realmSlug,
    this.level,
    this.achievementPoints,
    this.averageItemLevel,
    this.equippedItemLevel,
    this.chosenCovenant,
    this.renownLevel,
    this.isPvpMeta,
  });

  CharacterModel.fromJson(Map<String, dynamic> json)
      : id = json["id"],
        links = json["link"],
        characterId = json["characterId"],
        name = json["name"],
        faction = json["faction"],
        race = json["race"],
        characterClass = json["characterClass"],
        activeSpec = json["activeSpec"],
        realm = json["realm"],
        realmSlug = json["realmSlug"],
        level = json["level"],
        achievementPoints = json["achievementPoints"],
        averageItemLevel = json["averageItemLevel"],
        equippedItemLevel = json["equippedItemLevel"],
        chosenCovenant = json["chosenCovenant"],
        renownLevel = json["renownLevel"],
        isPvpMeta = json["isPvpMeta"];
}
