import { useRecoilState } from "recoil";
import { HeaderOpen } from "../../atom/atom";

import { pathNav } from "../../common/utils";

import { Box, Typography, List, Drawer } from "@mui/material";
import { ListButton, ListLink } from "../../style/common/Header.styled";

interface Props {
  window?: () => Window;
}

const MobileHeader = (props: Props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useRecoilState(HeaderOpen);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <span>서브웨이</span>
      </Typography>
      <List>
        <ListLink to="/">
          <ListButton className={pathNav("") ? "path" : ""}>
            <p>홈</p>
          </ListButton>
        </ListLink>

        <ListLink to="/menu">
          <ListButton className={pathNav("menu") ? "path" : ""}>
            <p>메뉴</p>
          </ListButton>
        </ListLink>

        <ListLink to="/make">
          <ListButton className={pathNav("make") ? "path" : ""}>
            <p>만들기</p>
          </ListButton>
        </ListLink>

        <ListLink to="/mypage">
          <ListButton className={pathNav("mypage") ? "path" : ""}>
            <p>마이페이지</p>
          </ListButton>
        </ListLink>
      </List>
    </Box>
  );

  return (
    <Box component="nav">
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 240,
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default MobileHeader;
