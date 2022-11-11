import styled from "@emotion/styled";
import { AppBar, Box, Toolbar } from "@mui/material";
import { NavLink } from "react-router-dom";

export const NavBox = styled(Box)`
  position: sticky;
  top: 0;
  display: flex;
  z-index: 99;
`;

export const NavBar = styled(AppBar)`
  position: relative;
  background-color: #009223;
  color: #ffce32;
  justify-content: space-between;
  text-align: right;
  margin-left: 200px;
  width: calc(100% - 200px);
  @media (max-width: 900px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const NavToolbar = styled(Toolbar)`
  justify-content: right;
  @media (max-width: 900px) {
    justify-content: space-between;
  }
`;

export const NavTitleLink = styled(NavLink)`
  font-size: 1.1rem;
  font-weight: 900;
`;
