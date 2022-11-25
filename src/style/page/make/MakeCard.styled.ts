import styled from "@emotion/styled";
import { Card, CardContent, Typography } from "@mui/material";

interface IMakeCard {
  component: string;
}

export const MakeCardContainer = styled(Card)`
  cursor: pointer;
  display: inline-block;
  max-width: 400px;
  .select {
    border: 5px solid #009223;
  }
  .card {
    border: 5px solid #ffce32;
  }
`;

export const MakeCardImage = styled.img`
  width: 100%;
  background-color: #fff;
`;

export const MakeCardContent = styled.div`
  padding: 5px 0;
`;

export const MakeCardName = styled(Typography)<IMakeCard>`
  font-family: "Gothic A1", sans-serif;
  text-align: center;
  color: #009223;
  font-size: 1rem;
  margin: 0;
  @media (max-width: 600px) {
    font-size: 0.7em;
  }
`;

export const MakeCardEng = styled(MakeCardName)<IMakeCard>`
  color: #ffce32;
  font-size: 0.7em;
  @media (max-width: 600px) {
    font-size: 0.5em;
  }
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
