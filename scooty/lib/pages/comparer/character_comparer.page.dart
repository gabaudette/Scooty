import 'package:flutter/material.dart';

class CharacterComparerPage extends StatefulWidget {
  const CharacterComparerPage({Key? key}) : super(key: key);

  @override
  _CharacterComparerPageState createState() => _CharacterComparerPageState();
}

class _CharacterComparerPageState extends State<CharacterComparerPage> {
  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Expanded(
          child: Container(
            color: Colors.red,
            child: const Text("Character 1"),
          ),
        ),
        Expanded(
          child: Container(
            color: Colors.blue,
            child: const Text("Meta 2"),
          ),
        ),
      ],
    );
  }
}
