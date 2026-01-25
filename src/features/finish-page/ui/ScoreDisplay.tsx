import React from "react";
import { Box, Typography, Chip } from "@mui/material";

interface ScoreDisplayProps {
  userName?: string;
  score: number;
  isInTop10: boolean;
}

export const ScoreDisplay: React.FC<ScoreDisplayProps> = ({
  userName,
  score,
  isInTop10,
}) => (
  <Box
    sx={{
      backgroundColor: isInTop10 ? "#E8F5E9" : "#F5F5F5",
      p: 3,
      borderRadius: 2,
      mb: 4,
      textAlign: "center",
      border: isInTop10 ? "2px solid #4CAF50" : "1px solid #e0e0e0",
    }}
  >
    <Typography variant="h5" mb={1} color="primary">
      Your Final Score
    </Typography>
    <Typography variant="h2" fontWeight="bold" color="secondary">
      {typeof score === "number" ? score : 0}
      {userName ?? ""}
    </Typography>
    {isInTop10 && (
      <Chip
        label="🏆 Top 10 Scorer!"
        color="success"
        sx={{ mt: 2 }}
        size="small"
      />
    )}
  </Box>
);
