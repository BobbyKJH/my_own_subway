import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { ListItemButton, Toolbar } from "@mui/material";

export const ListLink = styled(NavLink)`
  background-color: #fff;
  color: #009223;
  align-content: center;
  .path {
    background-color: #ffce32;
  }
`;

export const ListButton = styled(ListItemButton)`
  display: flex;
  align-items: center;

  padding: 20px 10px;
  &:hover {
    background-color: #ffce32;
  }
`;

export const NickToolbar = styled(Toolbar)`
  justify-content: center;
`;
