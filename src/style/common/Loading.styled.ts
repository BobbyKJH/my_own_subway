import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const LoadingScreen = styled.div`
  min-height: 600px;
  position: relative;
`;

export const LoadingBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
