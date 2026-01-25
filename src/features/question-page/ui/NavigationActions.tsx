import { Box, Button } from '@mui/material';

interface Props {
  disabled: boolean;
  onNext: () => void;
}

const NavigationActions = ({ disabled, onNext }: Props) => (
  <Box mt={3} textAlign="right">
    <Button variant="contained" onClick={onNext} disabled={disabled}>
      Next
    </Button>
  </Box>
);

export default NavigationActions;