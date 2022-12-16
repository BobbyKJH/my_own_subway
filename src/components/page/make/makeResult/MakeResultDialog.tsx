import { forwardRef, ReactElement, Ref } from "react";

import { useRecoilState } from "recoil";
import { makeResult } from "../../../../atom/atom";

import MakeResultCard from "./MakeResultCard";
import MakeSauce from "../makeSauce/MakeSauce";
import MakeResultButton from "./MakeResultButton";

import { TransitionProps } from "@mui/material/transitions";

import { Dialog, Toolbar, Grid, List, Slide } from "@mui/material";
import {
  MakeResultBar,
  MakeResultBox,
  MakeResultClose,
} from "../../../../style/page/make/makeResult/MakeResultDialog.styled";

import CloseIcon from "@mui/icons-material/Close";

const Transition = forwardRef(
  (
    props: TransitionProps & {
      children: ReactElement;
    },
    ref: Ref<unknown>
  ) => {
    return <Slide direction="up" ref={ref} {...props} />;
  }
);

const MakeResultDialog = () => {
  const [open, setOpen] = useRecoilState(makeResult);

  const handleClose = (e: React.MouseEvent) => {
    setOpen(false);
  };

  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <MakeResultBar sx={{ backgroundColor: "aqua" }}>
        <Toolbar>
          <MakeResultClose
            edge="start"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon fontSize="large" />
          </MakeResultClose>
        </Toolbar>
      </MakeResultBar>

      <List>
        <MakeResultBox>
          <Grid container>
            <MakeResultCard menu="sandwich" num={12} />

            <MakeResultCard menu="bread" num={6} />

            <MakeResultCard menu="cheese" num={6} />

            <MakeSauce />
          </Grid>
        </MakeResultBox>
      </List>
    </Dialog>
  );
};

export default MakeResultDialog;
