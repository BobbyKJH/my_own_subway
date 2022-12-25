import { useRecoilValue } from "recoil";
import { recipeResult } from "../../../atom/persistAtom";

import ResultCard from "./ResultCard";

import { Grid, Paper } from "@mui/material";
import ResultSauce from "./ResultSauce";

const ResultPaper = () => {
  const { sandwich, bread, cheese } = useRecoilValue(recipeResult);

  return (
    <Paper elevation={10} sx={{ pb: 2 }}>
      <Grid container spacing={0}>
        <ResultCard menu={sandwich} num={12} />

        <ResultCard menu={bread} num={6} />

        <ResultCard menu={cheese} num={6} />

        <ResultSauce />
      </Grid>
    </Paper>
  );
};

export default ResultPaper;
