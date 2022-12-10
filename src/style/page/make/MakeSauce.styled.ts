import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const MakeSauceContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

export const SauceImage = styled.img`
  display: inline;
  width: 50%;
`;

export const SauceName = styled(Grid)`
  font-size: 0.6rem;
  color: #009223;
  line-height: 15px;
`;

export const SauceEng = styled(SauceName)`
  font-size: 0.5rem;
  color: #ffce32;
`;
