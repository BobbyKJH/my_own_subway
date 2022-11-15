import styled from "@emotion/styled";
import { Dialog, DialogContentText, DialogTitle } from "@mui/material";

export const DialogBox = styled(Dialog)`
  display: block;
  min-height: 650px;
`;

export const DialogImage = styled.img`
  width: 100%;
  aspect-ratio: 57/40;
`;

export const DialogName = styled(DialogTitle)`
  font-family: "Gothic A1", sans-serif;
  font-weight: 900;
  font-size: 1rem;
  text-align: center;
  color: #009223;
  padding: 0;
`;

export const DialogEng = styled(DialogName)`
  font-size: 0.8rem;
  text-align: center;
  color: #ffce32;
  padding-bottom: 10px;
`;

export const DialogSummary = styled(DialogContentText)`
  font-size: 0.8rem;
  padding: 15px;
  text-align: center;
  color: #808080;
`;

export const DialogCalorie = styled(DialogSummary)`
  font-weight: 700;
  padding: 0 20px;
  color: #000;
`;
