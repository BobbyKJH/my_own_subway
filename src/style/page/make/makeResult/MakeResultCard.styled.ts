import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const MakeResultCardGrid = styled(Grid)`
  display: inline-block;
`;

export const MakeResultCardImg = styled.img`
  display: block;
  width: 50%;
  margin: 0 auto;
`;

export const MakeResultCardName = styled.p`
  text-align: center;
  color: #009223;
  font-size: 0.6rem;
  line-height: 15px;
`;

export const MakeResultCardEng = styled(MakeResultCardName)`
  color: #ffce32;
  font-size: 0.5rem;
`;
