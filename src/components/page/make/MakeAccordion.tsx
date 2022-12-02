import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["샌드위치", "빵", "치즈", "소스", "결과"];

export default function MakeAccordion() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={4} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
