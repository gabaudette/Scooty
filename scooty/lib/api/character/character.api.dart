import 'package:dio/dio.dart';
import 'package:scooty/api/base/base.api.dart';

class CharacterApi extends BaseApi {
  final Dio dio;

  CharacterApi({required this.dio}) : super(path: "character");

  Future<dynamic> character() async {}
}
