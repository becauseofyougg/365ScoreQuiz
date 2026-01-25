import React from "react";
import { ListItem, Box, Typography } from "@mui/material";
import { HighscoreListItemProps } from "@/features/finish-page/types";
import { MedalIcon } from "@/shared/ui/MedalIcon";


export const HighscoreListItem: React.FC<HighscoreListItemProps> = ({
  user,
  score,
  position,
  isCurrentUser,
}) => (
  <Box component="div">
    <ListItem
      sx={{
        py: 2,
        backgroundColor: isCurrentUser ? "#F0F7FF" : "transparent",
        borderRadius: 1,
        mb: 0.5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <MedalIcon position={position} />

          <Box>
            <Typography
              variant="subtitle1"
              fontWeight={isCurrentUser ? "bold" : "normal"}
              color={isCurrentUser ? "primary.main" : "inherit"}
            >
              {user}
              {isCurrentUser && " (You)"}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Position #{position}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ textAlign: "right" }}>
          <Typography variant="h6" fontWeight="bold">
            {score} points
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Score
          </Typography>
        </Box>
      </Box>
    </ListItem>
  </Box>
);
