import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:scooty/comparer/character_comparer.page.dart';

void main() {
  // WidgetsFlutterBinding.ensureInitialized(); in the runApp it already WidgetsFlutterBinding.ensureInitialized()

  final dio = Dio();

  // final characterApi = CharacterApi(dio: dio);

  // TODO Add MultiRepositoryProvider
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Scooty",
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: "Scooty"),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          children: const [
            CharacterComparerPage(),
          ],
        ),
      ),
    );
  }
}
