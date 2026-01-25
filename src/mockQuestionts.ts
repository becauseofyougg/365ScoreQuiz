import { Question } from "@/features/question-page/types";

export const QUESTIONS: Question[] = [
  {
    id: "1",
    text: "Which footballer has won the most Ballon d’Or awards?",
    options: [
      "Cristiano Ronaldo",
      "Lionel Messi",
      "Zinedine Zidane",
      "Ronaldinho",
    ],
    correctIndex: 1,
  },
  {
    id: "2",
    text: "Which country won the 2018 FIFA World Cup?",
    options: ["Brazil", "Germany", "France", "Argentina"],
    correctIndex: 2,
  },
  {
    id: "3",
    text: "How many players are on the field per team in football?",
    options: ["9", "10", "11", "12"],
    correctIndex: 2,
  },
];
