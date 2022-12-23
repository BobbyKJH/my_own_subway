import { useRecoilValue } from "recoil";
import { recipeOpen } from "../../../atom/atom";

import MakeSauceList from "./makeSauce/MakeSauceList";
import MakeList from "./MakeList";

import { Stepper, Step, StepLabel } from "@mui/material";
import { MakeAccordionContainer } from "../../../style/page/make/MakeAccordion.styled";

const steps = ["샌드위치", "빵", "치즈", "소스"];

const MakeAccordion = () => {
  const select = useRecoilValue(recipeOpen);

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

      {select === 0 && <MakeList select="sandwich" />}
      {select === 1 && <MakeList select="bread" />}
      {select === 2 && <MakeList select="cheese" />}
      {select === 3 && <MakeSauceList />}
    </>
  );
};

export default MakeAccordion;
