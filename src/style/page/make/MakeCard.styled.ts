import styled from "@emotion/styled";
import { Card, CardContent, Typography } from "@mui/material";

interface IMakeCard {
  component: string;
}

export const MakeCardContainer = styled(Card)`
  cursor: pointer;
  display: inline-block;
  max-width: 400px;
  border: 2px solid #808080;
  border-radius: 20px;
`;

export const MakeCardImage = styled.img`
  width: 100%;
`;

export const MakeCardContent = styled.div`
  padding: 0;
  padding-top: 0;
`;

export const MakeCardName = styled(Typography)<IMakeCard>`
  font-family: "Gothic A1", sans-serif;
  color: #009223;
  font-size: 1rem;
  @media (max-width: 600px) {
    font-size: 0.7em;
  }
`;

export const MakeCardEng = styled(Typography)<IMakeCard>`
  font-family: "Gothic A1", sans-serif;
  color: #ffce32;
  font-size: 0.5em;
`;

export const MakeCardCalorie = styled(Typography)<IMakeCard>`
  font-family: "Gothic A1", sans-serif;
  font-size: 0.8rem;
  color: #808080;
  text-align: right;
  padding: 5px 20px 15px 20px;
  @media (max-width: 600px) {
    font-size: 0.5em;
    padding: 5px 20px 5px 20px;
  }
`;
