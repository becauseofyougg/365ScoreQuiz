import { Box, Button, TextField, Typography } from "@mui/material";
import { setUserName, startQuiz } from "@/features/quiz/quizSlice";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/store";

const WelcomePage = () => {
  const dispatch = useAppDispatch();
  const storedName = useAppSelector((s) => s.quiz.userName);
  const [name, setName] = useState(storedName);

  const handleStart = () => {
    if (!name.trim()) return;
    dispatch(setUserName(name.trim()));
    dispatch(startQuiz());
  };

  return (
    <Box textAlign="center" mt={10}>
      <Typography variant="h3" mb={3}>
        365Scores Quiz
      </Typography>

      <TextField
        label="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ mb: 3, width: 280 }}
      />

      <br />

      <Button
        size="large"
        variant="contained"
        disabled={!name.trim()}
        onClick={handleStart}
      >
        Start Quiz
      </Button>
    </Box>
  );
};

export default WelcomePage;
