import { Avatar } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { MedalPosition } from "@/features/finish-page/types";

interface MedalIconProps {
  position: number;
  size?: number;
}

export const MedalIcon: React.FC<MedalIconProps> = ({
  position,
  size = 36,
}) => {
  const getMedalContent = () => {
    switch (position as MedalPosition) {
      case 1:
        return <EmojiEventsIcon sx={{ color: "#FFD700" }} />;
      case 2:
        return <MilitaryTechIcon sx={{ color: "#C0C0C0" }} />;
      case 3:
        return <WorkspacePremiumIcon sx={{ color: "#CD7F32" }} />;
      default:
        return `#${position}`;
    }
  };

  return (
    <Avatar
      sx={{
        bgcolor: position <= 3 ? "primary.main" : "grey.300",
        color: position <= 3 ? "white" : "grey.700",
        width: size,
        height: size,
        fontWeight: "bold",
      }}
    >
      {getMedalContent()}
    </Avatar>
  );
};
