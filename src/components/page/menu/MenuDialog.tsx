import { Dialog } from "@mui/material";
import {
  DialogBox,
  DialogCalorie,
  DialogEng,
  DialogImage,
  DialogName,
  DialogSummary,
} from "../../../style/page/menu/MenuDialog.styled";

interface IMenuDialog {
  open: boolean;
  dialogClose: React.ReactEventHandler;
  img: string;
  name: string;
  eng_name: string;
  summary: string;
  calorie: number;
}

const MenuDialog = ({
  open,
  dialogClose,
  img,
  name,
  eng_name,
  summary,
  calorie,
}: IMenuDialog) => {
  return (
    <DialogBox open={open} onClose={dialogClose}>
      <DialogImage src={img} alt={name} />

      <DialogName>{name}</DialogName>
      <DialogEng>{eng_name}</DialogEng>

      <DialogCalorie>{calorie}Kcal</DialogCalorie>

      <DialogSummary>{summary}</DialogSummary>
    </DialogBox>
  );
};

export default MenuDialog;
