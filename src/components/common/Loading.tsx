import { CircularProgress } from "@mui/material";
import { LoadingBox, LoadingScreen } from "../../style/common/Loading.styled";

const Loading = () => {
  return (
    <LoadingScreen>
      <LoadingBox>
        <CircularProgress />
      </LoadingBox>
    </LoadingScreen>
  );
};

export default Loading;
