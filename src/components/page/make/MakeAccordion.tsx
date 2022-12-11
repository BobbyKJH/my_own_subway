import { useEffect } from "react";

import { useRecoilValue, useResetRecoilState } from "recoil";
import { recipeOpen } from "../../../atom/atom";

import MakeList from "./MakeList";
import MakeSauceList from "./MakeSauceList";
import MakeResult from "./MakeReult";

import { Stepper, Step, StepLabel } from "@mui/material";
import { MakeAccordionContainer } from "../../../style/page/make/MakeAccordion.styled";
import MakeButton from "./MakeButton";

const steps = ["샌드위치", "빵", "치즈", "소스", "결과"];

const MakeAccordion = () => {
  const select = useRecoilValue(recipeOpen);
  const reset = useResetRecoilState(recipeOpen);

  useEffect(() => {
    reset();
  }, []);

  return (
    <>
      <MakeAccordionContainer>
        <Stepper activeStep={select} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </MakeAccordionContainer>

      <MakeButton />

      {select === 0 && <MakeList select="sandwich" />}
      {select === 1 && <MakeList select="bread" />}
      {select === 2 && <MakeList select="cheese" />}
      {select === 3 && <MakeSauceList />}
      {select === 4 && <MakeResult />}
    </>
  );
};

export default MakeAccordion;
