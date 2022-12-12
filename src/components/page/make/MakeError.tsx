import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

import { useRecoilState } from "recoil";
import { makeError } from "../../../atom/atom";

const MakeError = () => {
  const [open, setOpen] = useRecoilState(makeError);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">메뉴를 선택해주세요.</DialogTitle>
      </Dialog>
    </>
  );
};

export default MakeError;
