import { useSetRecoilState } from "recoil";
import { sideBarOpen } from "../../atom/atom";

import SideBar from "./SideBar";

import { IconButton } from "@mui/material";
import {
  NavBar,
  NavBox,
  NavTitleLink,
  NavToolbar,
} from "../../style/common/Header.styled";

import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const setOpen = useSetRecoilState(sideBarOpen);

  const handleDrawerToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOpen((prev) => !prev);
  };

  return (
    <NavBox>
      <NavBar>
        <NavToolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" }, color: "#fff" }}
          >
            <MenuIcon />
          </IconButton>

          <NavTitleLink to="/">서브웨이 메뉴</NavTitleLink>
        </NavToolbar>
      </NavBar>

      <SideBar />
    </NavBox>
  );
};

export default Header;
