import 'package:scooty/api/character/enum/character_region.enum.dart';

class CharacterDto {
  final CharacterRegionEnum? region;
  final String? name;
  final String? realm;

  CharacterDto({
    required this.region,
    required this.name,
    required this.realm,
  });

  Map<String, dynamic> toJson() {
    return {
      "region": region != null ? region : null,
      "name": region != null ? region : null,
      "realm": region != null ? region : null,
    };
  }
}
