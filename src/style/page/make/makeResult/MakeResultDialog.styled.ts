import styled from "@emotion/styled";
import { AppBar, Box, IconButton } from "@mui/material";

export const MakeResultBar = styled(AppBar)`
  position: relative;
  background-color: #009223;
`;

export const MakeResultClose = styled(IconButton)`
  color: #ffce32;
`;

export const MakeResultBox = styled(Box)`
  position: absolute;
  max-width: 700px;
  width: 100%;
  left: 50%;
  transform: translate(-50%, 10%);
`;
