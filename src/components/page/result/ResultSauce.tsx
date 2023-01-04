import { useRecoilValue } from "recoil";
import { recipeResult } from "../../../atom/persistAtom";

import { Grid } from "@mui/material";
import {
  ResultSauceContainer,
  ResultSauceEng,
  ResultSauceImage,
  ResultSauceName,
} from "../../../style/page/result/ResultSauce.styled";

const ResultSauce = () => {
  const {
    img: Image,
    name: Name,
    eng: Eng_Name,
  } = useRecoilValue(recipeResult).sauce;

  return (
    <Grid container spacing={0}>
      <ResultSauceContainer>
        {Image.slice(0, 3).map((img: string) => (
          <Grid item xs={4} key={img}>
            <ResultSauceImage src={img} />
          </Grid>
        ))}
      </ResultSauceContainer>

      <ResultSauceContainer>
        {Name.slice(0, 3).map((name: string) => (
          <ResultSauceName item xs={4} key={name}>
            {name}
          </ResultSauceName>
        ))}
      </ResultSauceContainer>

      <ResultSauceContainer>
        {Eng_Name.slice(0, 3).map((eng: string) => (
          <ResultSauceEng item xs={4} key={eng}>
            {eng}
          </ResultSauceEng>
        ))}
      </ResultSauceContainer>
    </Grid>
  );
};

export default ResultSauce;
