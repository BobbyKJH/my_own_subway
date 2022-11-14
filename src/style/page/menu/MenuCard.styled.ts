import { CardMedia, Typography } from "@mui/material";
import styled from "@emotion/styled";

export const CardImg = styled(CardMedia)<{ component: string; alt: string }>`
  height: 200px;
  margin: 10px 0;
  @media (max-width: 1000px) {
    height: 170px;
  }
  @media (max-width: 600px) {
    height: 130px;
  }
  @media (max-width: 490px) {
    height: 100px;
  }
`;

export const CardName = styled(Typography)`
  color: #009223;
  font-size: 0.8rem;
  font-weight: 900;
  @media (max-width: 600px) {
    font-size: 0.6em;
  }
`;

export const CardEng = styled(Typography)`
  color: #ffce32;
  font-size: 0.6em;
  font-weight: 900;
  @media (max-width: 900px) {
    display: none;
  }
  @media (max-width: 490px) {
    font-size: 0.6em;
  }
`;

export const CardCalorie = styled(Typography)`
  padding: 10px 25px;
  text-align: right;
  @media (max-width: 490px) {
    font-size: 0.7em;
  }
`;
