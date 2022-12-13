import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { makeError, recipeFamily, recipeOpen } from "../../../../atom/atom";

import { Grid } from "@mui/material";
import { MoveBtn } from "../../../../style/page/make/makeButton/MakeButton.styled";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const MakeButton = ({ select }: { select: string }) => {
  const [btn, setBtn] = useRecoilState(recipeOpen);
  const setError = useSetRecoilState(makeError);
  const { name } = useRecoilValue(recipeFamily(select));

  const previousBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    btn > 0 ? setBtn((prev) => prev - 1) : alert("첫 페이지 입니다.");
  };

  const nextBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    name === "" ? setError(true) : setBtn((prev) => prev + 1);
  };

  return (
    <>
      <Grid item xs={12} sx={{ justifyContent: "center", display: "flex" }}>
        <MoveBtn onClick={previousBtn}>
          <ArrowBackIcon fontSize="medium" />
        </MoveBtn>

        <MoveBtn onClick={nextBtn}>
          <ArrowForwardIcon fontSize="medium" />
        </MoveBtn>
      </Grid>
    </>
  );
};

export default MakeButton;
