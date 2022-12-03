import { useEffect } from "react";

import { useRecoilValue, useResetRecoilState } from "recoil";
import { recipeOpen } from "../../../atom/atom";

import MakeList from "./MakeList";
import MakeSauce from "./MakeSauce";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["샌드위치", "빵", "치즈", "소스", "결과"];

const MakeAccordion = () => {
  const select = useRecoilValue(recipeOpen);
  const reset = useResetRecoilState(recipeOpen);

  useEffect(() => {
    reset();
  }, []);

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={select} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      {select === 0 && <MakeList select="sandwich" />}
      {select === 1 && <MakeList select="bread" />}
      {select === 2 && <MakeList select="cheese" />}
      {select === 3 && <MakeSauce />}
    </>
  );
};

export default MakeAccordion;
