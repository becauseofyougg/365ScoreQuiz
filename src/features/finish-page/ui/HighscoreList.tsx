import React from "react";
import { Box, Typography, List, Button, Divider } from "@mui/material";
import { Highscore } from "@/features/finish-page/types";
import { HighscoreListItem } from "@/features/finish-page/ui/HighscoreListItem";

interface HighscoreListProps {
  highscores: Highscore[];
  currentUserName?: string;
  currentUserScore?: number;
  onClearHighscores: () => void;
}

export const HighscoreList: React.FC<HighscoreListProps> = ({
  highscores,
  currentUserName,
  currentUserScore,
  onClearHighscores,
}) => {
  if (highscores.length === 0) {
    return (
      <Typography textAlign="center" color="text.secondary" py={4}>
        No scores yet. Be the first to set a record!
      </Typography>
    );
  }

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={3}
      >
        <Typography variant="h5" fontWeight="bold">
          🏅 Top 10 High Scores
        </Typography>
        <Button
          size="small"
          onClick={onClearHighscores}
          color="error"
          variant="outlined"
        >
          Clear All
        </Button>
      </Box>

      <List sx={{ maxHeight: 400, overflow: "auto" }}>
        {highscores.map((highscore, index) => {
          const position = index + 1;
          const isCurrentUser = Boolean(
            currentUserName &&
            typeof currentUserScore === "number" &&
            highscore.user === currentUserName &&
            highscore.score === currentUserScore,
          );

          return (
            <React.Fragment
              key={`${highscore.user}-${highscore.score}-${highscore.timestamp}`}
            >
              <HighscoreListItem
                {...highscore}
                position={position}
                isCurrentUser={isCurrentUser}
              />
              {index < highscores.length - 1 && <Divider />}
            </React.Fragment>
          );
        })}
      </List>
    </>
  );
};
