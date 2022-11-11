import { useRecoilState } from "recoil";
import { sideBarOpen } from "../../../atom/atom";

import SideBarContent from "./SideBarContent";

import { Box, Drawer } from "@mui/material";

const SideBar = () => {
  const [open, setOpen] = useRecoilState(sideBarOpen);

  const handleSideBar = (e: React.MouseEvent) => setOpen((prev) => !prev);

  return (
    <Box
      component="nav"
      sx={{ width: { sm: 220 }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
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
            width: 220,
          },
        }}
      >
        <SideBarContent />
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 220,
          },
        }}
        open
      >
        <SideBarContent />
      </Drawer>
    </Box>
  );
};

export default SideBar;
