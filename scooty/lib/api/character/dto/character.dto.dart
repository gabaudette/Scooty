import 'package:scooty/api/character/enum/character_region.enum.dart';

class CharacterDto {
  final String? name;
  final String? realm;

  CharacterDto({
    required this.name,
    required this.realm,
  });

  Map<String, dynamic> toJson() {
    return {
      "name": name != null ? name : null,
      "realm": realm != null ? realm : null,
    };
  }
}
