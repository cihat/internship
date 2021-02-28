import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return MyAppState();
  }
}

class MyAppState extends State<MyApp> {
  var questionIndex = 0;
  void answerQuestion() {
    setState(() {
      questionIndex = questionIndex + 1;
    });
    print(questionIndex);
  }

  @override
  Widget build(BuildContext context) {
    var questions = [
      'What\'s your favorite color ?',
      "What\s your favorite animal ?",
      'What\'s your favorite computer ?',
      "What\s your favorite books ?",
      'What\'s your favorite desk ?',
      "What\s your favorite table ?",
      'What\'s your favorite chair ?',
      "What\s your favorite television ?",
      'What\'s your favorite phone ?',
      "What\s your favorite emulator ?",
    ];
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text("My First App"),
        ),
        body: Column(
          children: [
            Text(questions[questionIndex]),
            RaisedButton(
              child: Text(
                "Answer 1",
              ),
              onPressed: () => print("Answer 1 chosen!"),
            ),
            RaisedButton(
              child: Text(
                "Answer 2",
              ),
              onPressed: () => {
                // .....
                print("Answer 2 chosen!!")
              },
            ),
            RaisedButton(
              child: Text(
                "Answer 3",
              ),
              onPressed: answerQuestion,
            ),
          ],
        ),
      ),
    );
  }
}
