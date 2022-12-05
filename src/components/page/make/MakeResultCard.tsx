import { useRecoilValue } from "recoil";
import { recipeFamily } from "../../../atom/atom";

import { Grid } from "@mui/material";
import {
  MakeResultCardEng,
  MakeResultCardImg,
  MakeResultCardName,
} from "../../../style/page/make/MakeResultCard.styled";

const MakeResultCard = ({ menu, num }: { menu: string; num: number }) => {
  const resultMenu = useRecoilValue(recipeFamily(menu));

  return (
    <Grid item xs={num}>
      <MakeResultCardImg src={resultMenu.img} alt={resultMenu.name} />
      <MakeResultCardName>{resultMenu.name}</MakeResultCardName>
      <MakeResultCardEng>{resultMenu.eng_name}</MakeResultCardEng>
    </Grid>
  );
};

export default MakeResultCard;
