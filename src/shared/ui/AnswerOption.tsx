import { Button } from "@mui/material";

interface Props {
  text: string;
  selected: boolean;
  onClick: () => void;
}

const AnswerOption = ({ text, selected, onClick }: Props) => (
  <Button
    variant={selected ? "contained" : "outlined"}
    onClick={onClick}
    fullWidth
  >
    {text}
  </Button>
);

export default AnswerOption;
