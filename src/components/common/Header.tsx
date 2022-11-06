import { Link } from "react-router-dom";

import { useSetRecoilState } from "recoil";
import { HeaderOpen } from "../../atom/atom";

import { pathNav } from "../../common/utils";

import MobileHeader from "./MobileHeader";

import MenuIcon from "@mui/icons-material/Menu";
import {
  Container,
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { LinkButton } from "../../style/common/Header.styled";

const Header = () => {
  const setMobileOpen = useSetRecoilState(HeaderOpen);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 99,
      }}
    >
      <AppBar component="nav">
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, textAlign: { xs: "right", sm: "left" } }}
            >
              <Link to="/">서브웨이 레시피</Link>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <LinkButton>
                <Link to="/menu" className={pathNav("menu") ? "path" : ""}>
                  메뉴
                </Link>
              </LinkButton>
              <LinkButton>
                <Link to="/make" className={pathNav("make") ? "path" : ""}>
                  조합 만들기
                </Link>
              </LinkButton>
              <LinkButton>
                <Link to="/mypage" className={pathNav("mypage") ? "path" : ""}>
                  마이페이지
                </Link>
              </LinkButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <MobileHeader />
    </Box>
  );
};

export default Header;
