import styled from "@emotion/styled";
import { Button, Grid } from "@mui/material";

export const MakeButtonGrid = styled(Grid)`
  display: flex;
  justify-content: center;
`;

export const MoveBtn = styled(Button)`
  margin: 10px;
  background-color: #009223;
  color: #ffce32;
  width: 30%;
  &:hover {
    color: #009223;
    background-color: #ffce32;
  }
`;
