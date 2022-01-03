class BaseApi {
  String _apiUrl = "http://127.0.0.1:8080"; // TODO Add env
  final String path;

  BaseApi({
    required this.path,
  });

  String url([String? route]) {
    return route != null ? "$_apiUrl/$path/$route" : "$_apiUrl/$path";
  }
}
