import { useRecoilState } from "recoil";
import { sideBarOpen } from "../../atom/atom";

import { pathNav } from "../../common/utils";

import { Box, Divider, Drawer, ListItemIcon } from "@mui/material";
import {
  ListButton,
  ListLink,
  NickToolbar,
} from "../../style/common/SideBar.styled";

import HomeIcon from "@mui/icons-material/Home";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";

interface Props {
  window?: () => Window;
}

const SideBar = (props: Props) => {
  const { window } = props;
  const [open, setOpen] = useRecoilState(sideBarOpen);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleSideBar = (e: React.MouseEvent) => setOpen((prev) => !prev);

  const closeSideBar = () => setOpen(false);

  const drawer = (
    <>
      <NickToolbar>1</NickToolbar>

      <Divider />
      <ListLink to="/">
        <ListButton
          onClick={closeSideBar}
          className={pathNav("") ? "path" : ""}
        >
          <ListItemIcon>
            <HomeIcon fontSize="small" />
          </ListItemIcon>
          <span>메인</span>
        </ListButton>
      </ListLink>

      <ListLink to="/menu">
        <ListButton
          onClick={closeSideBar}
          className={pathNav("menu") ? "path" : ""}
        >
          <ListItemIcon>
            <MenuIcon fontSize="small" />
          </ListItemIcon>
          <span>메뉴</span>
        </ListButton>
      </ListLink>

      <ListLink to="/make">
        <ListButton
          onClick={closeSideBar}
          className={pathNav("make") ? "path" : ""}
        >
          <ListItemIcon>
            <RestaurantMenuIcon fontSize="small" />
          </ListItemIcon>
          <span>만들기</span>
        </ListButton>
      </ListLink>

      <ListLink to="/mypage">
        <ListButton
          onClick={closeSideBar}
          className={pathNav("mypage") ? "path" : ""}
        >
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          <span>마이페이지</span>
        </ListButton>
      </ListLink>
    </>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: 240 }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        container={container}
        variant="temporary"
        open={open}
        onClose={handleSideBar}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
          },
        }}
      >
        {drawer}
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 200,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default SideBar;
