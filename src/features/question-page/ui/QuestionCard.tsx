import { Question } from "@/features/question-page/types";
import AnswerOption from "@/shared/ui/AnswerOption";
import { Card, CardContent, Typography, Stack } from "@mui/material";

interface Props {
  question: Question;
  selectedAnswer: number | null;
  onSelect: (index: number) => void;
}

const QuestionCard = ({ question, selectedAnswer, onSelect }: Props) => (
  <Card>
    <CardContent>
      <Typography variant="h6" mb={2}>
        {question.text}
      </Typography>

      <Stack spacing={1}>
        {question.options.map((opt, i) => (
          <AnswerOption
            key={i}
            text={opt}
            selected={selectedAnswer === i}
            onClick={() => onSelect(i)}
          />
        ))}
      </Stack>
    </CardContent>
  </Card>
);

export default QuestionCard;
