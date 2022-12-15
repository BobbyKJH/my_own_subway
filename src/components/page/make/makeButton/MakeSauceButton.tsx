import { useSetRecoilState } from "recoil";
import { makeResult, recipeOpen } from "../../../../atom/atom";

import {
  MakeButtonGrid,
  MoveBtn,
} from "../../../../style/page/make/makeButton/MakeButton.styled";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const MakeSauceButton = () => {
  const setBtn = useSetRecoilState(recipeOpen);
  const setResult = useSetRecoilState(makeResult);

  const previousBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    setBtn((prev) => prev - 1);
  };

  const nextBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    setResult(true);
  };

  return (
    <>
      <MakeButtonGrid item xs={12}>
        <MoveBtn onClick={previousBtn}>
          <ArrowBackIcon fontSize="medium" />
        </MoveBtn>

        <MoveBtn onClick={nextBtn}>
          <ArrowForwardIcon fontSize="medium" />
        </MoveBtn>
      </MakeButtonGrid>
    </>
  );
};

export default MakeSauceButton;
