import { Grid } from "@mui/material";
import MakeCard from "./MakeCard";

const MakeResultCard = ({ menu }: any) => {
  return (
    <>
      {menu.name === "" ? (
        <p>111</p>
      ) : (
        <Grid item xs={6}>
          <MakeCard
            img={menu.img}
            name={menu.name}
            eng={menu.eng_name}
            calorie={menu.calorie}
          />
        </Grid>
      )}
    </>
  );
};

export default MakeResultCard;
