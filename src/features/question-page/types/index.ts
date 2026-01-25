export interface Question {
  id: string;
  text: string;
  options: string[];
  correctIndex: number;
}

export interface QuizState {
  questions: Question[];
  currentIndex: number;
  selectedAnswer: number | null;
  score: number;
}