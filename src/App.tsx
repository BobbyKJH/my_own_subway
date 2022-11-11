import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import MenuPage from "./pages/MenuPage";
import MakePage from "./pages/MakePage";
import MyPage from "./pages/MyPage";

import Header from "./components/common/Header";
import { Box } from "@mui/material";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Box sx={{ ml: { xs: 0, md: "200px" } }}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/make" element={<MakePage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
