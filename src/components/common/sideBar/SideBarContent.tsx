import { useState } from "react";

import { useSetRecoilState } from "recoil";
import { menuUrl, sideBarOpen } from "../../../atom/atom";

import { pathNav } from "../../../common/utils";

import {
  MenuKindButton,
  NickToolbar,
  SideButton,
  SideLink,
  SideMenu,
  SideText,
} from "../../../style/common/SideBar.styled";
import { Collapse, Divider, ListItemIcon, ListItemText } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import PersonIcon from "@mui/icons-material/Person";

const SideBarContent = () => {
  const [menu, setMenu] = useState(true);
  const setOpen = useSetRecoilState(sideBarOpen);
  const setKind = useSetRecoilState(menuUrl);

  const closeSideBar = (e: React.MouseEvent<HTMLDivElement>) => setOpen(false);

  const handleMenu = (e: React.MouseEvent<HTMLButtonElement>) =>
    setMenu((prev) => !prev);

  const kindMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    setKind(value);
  };

  return (
    <>
      <NickToolbar>1</NickToolbar>

      <Divider />

      <SideLink to="/">
        <SideButton
          onClick={closeSideBar}
          className={pathNav("") ? "path" : ""}
        >
          <ListItemIcon>
            <HomeIcon fontSize="small" />
          </ListItemIcon>
          <SideText primary="메인" />
        </SideButton>
      </SideLink>

      <SideMenu onClick={handleMenu}>
        <SideButton className={pathNav("menu") ? "path" : ""}>
          <ListItemIcon>
            <MenuIcon fontSize="small" />
          </ListItemIcon>
          <SideText primary="메뉴" />
        </SideButton>
      </SideMenu>

      <Collapse in={menu} timeout="auto" unmountOnExit>
        <SideLink to="/menu">
          <MenuKindButton onClick={kindMenu} value="sandwich">
            <ListItemText primary="샌드위치" />
          </MenuKindButton>

          <MenuKindButton onClick={kindMenu} value="bread">
            <ListItemText primary="빵" />
          </MenuKindButton>

          <MenuKindButton onClick={kindMenu} value="cheese">
            <ListItemText primary="치즈" />
          </MenuKindButton>

          <MenuKindButton onClick={kindMenu} value="vegetable">
            <ListItemText primary="채소" />
          </MenuKindButton>
          <MenuKindButton onClick={kindMenu} value="sauce">
            <ListItemText primary="소스" />
          </MenuKindButton>
        </SideLink>
      </Collapse>

      <SideLink to="/make">
        <SideButton
          onClick={closeSideBar}
          className={pathNav("make") ? "path" : ""}
        >
          <ListItemIcon>
            <RestaurantMenuIcon fontSize="small" />
          </ListItemIcon>
          <SideText primary="만들기" />
        </SideButton>
      </SideLink>

      <SideLink to="/mypage">
        <SideButton
          onClick={closeSideBar}
          className={pathNav("mypage") ? "path" : ""}
        >
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          <SideText primary="마이페이지" />
        </SideButton>
      </SideLink>
    </>
  );
};

export default SideBarContent;
