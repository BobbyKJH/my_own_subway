import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { Button, ListItemButton, ListItemText, Toolbar } from "@mui/material";

export const SideLink = styled(NavLink)`
  background-color: #fff;
  color: #009223;
  align-content: center;
  .path {
    background-color: #ffce32;
  }
`;

export const SideButton = styled(ListItemButton)`
  display: flex;
  align-items: center;

  padding: 15px 10px;
  &:hover {
    background-color: #ffce32;
  }
`;

export const SideMenu = styled.button`
  background-color: #fff;
  color: #009223;
  align-content: center;
  margin: 0;
  padding: 0;
  border: none;
  .path {
    background-color: #ffce32;
  }
`;

export const MenuKindButton = styled(Button)`
  width: 100%;
  text-align: left;
  padding: 12px 10px;
  padding-left: 48px;
  color: #808080;
  span {
    font-weight: 900;
    font-family: "Gothic A1", sans-serif;
    font-size: 0.8rem;
  }
`;

export const NickToolbar = styled(Toolbar)`
  justify-content: center;
`;

export const SideText = styled(ListItemText)`
  span {
    font-family: "Gothic A1", sans-serif;
    font-weight: 900;
  }
`;
