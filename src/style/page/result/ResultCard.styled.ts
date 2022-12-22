import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const ResultCardGrid = styled(Grid)`
  text-align: center;
`;

export const ResultCardImage = styled.img`
  width: 50%;
  aspect-ratio: 57/40;
`;

export const ResultCardName = styled.p`
  color: #009223;
  font-size: 0.8rem;
  line-height: 15px;
`;

export const ResultCardEng = styled(ResultCardName)`
  color: #ffce32;
  font-size: 0.6rem;
`;
