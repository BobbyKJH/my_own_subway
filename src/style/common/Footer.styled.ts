import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 90;
  .location {
    border: 7px inset #fff;
  }
  @media (min-width: 900px) {
    display: none;
  }
`;

export const FooterLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 7px outset black;
  background-color: #fff;
  width: 25%;
  padding: 15px 0;
  .path {
    color: #ffce32;
  }
`;
