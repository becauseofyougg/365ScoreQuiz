import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { resetQuiz } from "@/features/quiz/quizSlice";
import { useHighscores } from "@/features/finish-page/hooks/useHighscores";
import { HighscoreList } from "@/features/finish-page/ui/HighscoreList";
import { ScoreDisplay } from "@/features/finish-page/ui/ScoreDisplay";


const FinishPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { score, userName } = useAppSelector((s) => s.quiz);

  const { top10Highscores, isCurrentUserInTop10, handleClearHighscores } =
    useHighscores({
      userName,
      score,
    });

  return (
    <Box maxWidth={600} mx="auto" mt={6} p={3}>
      <Typography variant="h4" mb={2} textAlign="center" fontWeight="bold">
        Congratulations, {userName}! 🎉
      </Typography>

      <ScoreDisplay
        userName={userName}
        score={score}
        isInTop10={isCurrentUserInTop10}
      />

      <Box
        sx={{ backgroundColor: "white", borderRadius: 2, boxShadow: 1, p: 3 }}
      >
        <HighscoreList
          highscores={top10Highscores}
          currentUserName={userName}
          currentUserScore={score}
          onClearHighscores={handleClearHighscores}
        />
      </Box>

      <Box textAlign="center" mt={4}>
        <Button
          variant="contained"
          size="large"
          onClick={() => dispatch(resetQuiz())}
          sx={{ px: 4, py: 1.5 }}
        >
          Play Again
        </Button>
      </Box>
    </Box>
  );
};

export default FinishPage;
