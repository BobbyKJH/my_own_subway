import { Container, Paper } from "@mui/material";
import ResultPaper from "./ResultPaper";

const ResultContainer = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "75vh",
      }}
    >
      <ResultPaper />
    </Container>
  );
};

export default ResultContainer;
