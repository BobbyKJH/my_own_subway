import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "./pages/MainPage";
import MenuPage from "./pages/MenuPage";
import MakePage from "./pages/MakePage";
import ResultPage from "./pages/ResultPage";
import MyPage from "./pages/MyPage";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

import { Box } from "@mui/material";

const App = () => {
  return (
    <>
      <Header />

      <Box
        sx={{
          ml: {
            xs: 0,
            md: "220px",
          },
          mb: { xs: 10, mb: 0 },
        }}
      >
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/make" element={<MakePage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Box>

      <Footer />
    </>
  );
};

export default App;
