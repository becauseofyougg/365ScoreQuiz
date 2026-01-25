import QuestionPage from "./pages/QuestionPage/QuestionPage";
import { Container } from "@mui/material";
import FinishPage from "./pages/FinishPage/FinishPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import { useAppSelector } from "./app/store";

function App() {
  const status = useAppSelector((state) => state.quiz.status);

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        maxWidth: "none",
        px: 0,
      }}
    >
      {status === "welcome" && <WelcomePage />}
      {status === "inProgress" && <QuestionPage />}
      {status === "finished" && <FinishPage />}
    </Container>
  );
}

export default App;
