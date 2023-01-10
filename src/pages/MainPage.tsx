import { Grid } from "@mui/material";
import { useState } from "react";
import Loading from "../components/common/Loading";

const MainPage = () => {
  const [nick, setNick] = useState("");

  const handleNick = (e: any) => {
    const { value } = e.currentTarget;
    setNick(value);
  };
  const b = [1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      {/* <MainSwiper /> */}
      <Loading />
    </>
  );
};

export default MainPage;
