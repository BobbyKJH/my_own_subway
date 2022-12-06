import { useEffect } from "react";

import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import { recipeOpen } from "../../../atom/atom";

import MakeList from "./MakeList";
import MakeSauceList from "./MakeSauceList";
import MakeResult from "./MakeReult";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { MakeAccordionContainer } from "../../../style/page/make/MakeAccordion.styled";

const steps = ["샌드위치", "빵", "치즈", "소스", "결과"];

const MakeAccordion = () => {
  const [select, setSelect] = useRecoilState(recipeOpen);
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
              <StepLabel sx={{ fontSize: "10rem" }}>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </MakeAccordionContainer>
      <button onClick={() => setSelect((prev) => prev + 1)}>1111</button>
      {select === 0 && <MakeList select="sandwich" />}
      {select === 1 && <MakeList select="bread" />}
      {select === 2 && <MakeList select="cheese" />}
      {select === 3 && <MakeSauceList />}
      {select === 4 && <MakeResult />}
    </>
  );
};

export default MakeAccordion;
