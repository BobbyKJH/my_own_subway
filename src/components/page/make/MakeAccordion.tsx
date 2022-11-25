import { SyntheticEvent } from "react";

import { useRecoilState } from "recoil";
import { recipeOpen } from "../../../atom/atom";

import MakeList from "./MakeList";
import MakeResult from "./MakeReult";

import {
  MakeAccordionBox,
  MakeAccordionContainer,
  MakeAccordionDetails,
  MakeAccordionSummary,
} from "../../../style/page/make/MakeAccordion.styled";

const MakeAccordion = () => {
  const [open, setOpen] = useRecoilState(recipeOpen);

  const handleChange =
    (panel: string) => (e: SyntheticEvent, newExpanded: boolean) => {
      setOpen(newExpanded ? panel : false);
    };

  return (
    <MakeAccordionContainer>
      <MakeAccordionBox
        disableGutters
        elevation={0}
        square
        expanded={open === "sandwich"}
        onChange={handleChange("sandwich")}
      >
        <MakeAccordionSummary
          className={open === "sandwich" ? "select-menu" : "select-completion"}
        >
          <p>1. 샌드위치</p>
        </MakeAccordionSummary>

        <MakeAccordionDetails>
          <MakeList make="sandwich" next="bread" />
        </MakeAccordionDetails>
      </MakeAccordionBox>

      <MakeAccordionBox
        disableGutters
        elevation={0}
        square
        expanded={open === "bread"}
        onChange={handleChange("bread")}
      >
        <MakeAccordionSummary
          className={open === "bread" ? "select-menu" : "select-completion"}
        >
          <p>2. 빵</p>
        </MakeAccordionSummary>

        <MakeAccordionDetails>
          <MakeList make="bread" next="cheese" />
        </MakeAccordionDetails>
      </MakeAccordionBox>

      <MakeAccordionBox
        disableGutters
        elevation={0}
        square
        expanded={open === "cheese"}
        onChange={handleChange("cheese")}
      >
        <MakeAccordionSummary
          className={open === "cheese" ? "select-menu" : "select-completion"}
        >
          <p>3. 치즈</p>
        </MakeAccordionSummary>

        <MakeAccordionDetails>
          <MakeList make="cheese" next="sauce" />
        </MakeAccordionDetails>
      </MakeAccordionBox>

      <MakeAccordionBox
        disableGutters
        elevation={0}
        square
        expanded={open === "sauce"}
        onChange={handleChange("sauce")}
      >
        <MakeAccordionSummary
          className={open === "sauce" ? "select-menu" : "select-completion"}
        >
          <p>4. 소스</p>
        </MakeAccordionSummary>

        <MakeAccordionDetails>
          <MakeList make="sauce" next="result" />
        </MakeAccordionDetails>
      </MakeAccordionBox>

      <MakeAccordionBox
        disableGutters
        elevation={0}
        square
        expanded={open === "result"}
        onChange={handleChange("result")}
        TransitionProps={{ unmountOnExit: true }}
      >
        <MakeAccordionSummary
          className={open === "result" ? "select-menu" : "select-completion"}
        >
          <p>5. 결과</p>
        </MakeAccordionSummary>

        <MakeAccordionDetails>
          <MakeResult />
        </MakeAccordionDetails>
      </MakeAccordionBox>
    </MakeAccordionContainer>
  );
};

export default MakeAccordion;
