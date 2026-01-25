import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type QuizStatus = "welcome" | "inProgress" | "finished";

interface QuizState {
  status: QuizStatus;
  currentIndex: number;
  selectedAnswer: number | null;
  score: number;
  userName: string;
}

const initialState: QuizState = {
  status: "welcome",
  currentIndex: 0,
  selectedAnswer: null,
  score: 0,
  userName: localStorage.getItem("quizUser") ?? "",
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setUserName(state, action: PayloadAction<string>) {
      state.userName = action.payload;
      localStorage.setItem("quizUser", action.payload);
    },
    startQuiz(state) {
      state.status = "inProgress";
    },
    selectAnswer(state, action: PayloadAction<number>) {
      state.selectedAnswer = action.payload;
    },
    submitAnswer(state, action: PayloadAction<boolean>) {
      if (action.payload) state.score += 1;
    },
    nextQuestion(state, total: PayloadAction<number>) {
      state.selectedAnswer = null;
      if (state.currentIndex + 1 >= total.payload) {
        state.status = "finished";
      } else {
        state.currentIndex += 1;
      }
    },
    resetQuiz(state) {
      state.status = "welcome";
      state.currentIndex = 0;
      state.selectedAnswer = null;
      state.score = 0;
    },
  },
});

export const {
  setUserName,
  startQuiz,
  selectAnswer,
  submitAnswer,
  nextQuestion,
  resetQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;
