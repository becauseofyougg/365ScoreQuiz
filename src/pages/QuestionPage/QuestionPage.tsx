import { Box, Typography } from "@mui/material";
import {
  selectAnswer,
  submitAnswer,
  nextQuestion,
} from "@/features/quiz/quizSlice";
import NavigationActions from "@/features/question-page/ui/NavigationActions";
import QuestionCard from "@/features/question-page/ui/QuestionCard";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { QUESTIONS } from "@/mockQuestionts";

const QuestionPage = () => {
  const dispatch = useAppDispatch();
  const quiz = useAppSelector((s) => s.quiz);

  const question = QUESTIONS[quiz.currentIndex];

  const handleNext = () => {
    dispatch(submitAnswer(quiz.selectedAnswer === question.correctIndex));
    dispatch(nextQuestion(QUESTIONS.length));
  };

  return (
    <Box maxWidth={600} mx="auto" mt={6}>
      <Typography variant="h5" mb={2}>
        Question {quiz.currentIndex + 1} of {QUESTIONS.length}
      </Typography>

      <QuestionCard
        question={question}
        selectedAnswer={quiz.selectedAnswer}
        onSelect={(i) => dispatch(selectAnswer(i))}
      />

      <NavigationActions
        disabled={quiz.selectedAnswer === null}
        onNext={handleNext}
      />
    </Box>
  );
};

export default QuestionPage;
