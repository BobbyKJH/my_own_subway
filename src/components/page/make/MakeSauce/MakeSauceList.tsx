import { useQuery } from "react-query";

import { menuList } from "../../../../common/api";

import MakeSauceCard from "./MakeSauceCard";
import MakeSauceButton from "../makeButton/MakeSauceButton";
import MakeResultDialog from "../makeResult/MakeResultDialog";
import Loading from "../../../common/Loading";

import useMake from "../../../../hooks/useMake";

import { Grid } from "@mui/material";

interface ISauce {
  id: number;
  img: string;
  name: string;
  eng_name: string;
  calorie: number;
}

const MakeSauceList = () => {
  const { isLoading, data: RecipeList } = useQuery(`menu/sauce`, () =>
    menuList("sauce")
  );

  const { selectMenuSauce } = useMake();

  return (
    <Grid container spacing={1.5} sx={{ textAlign: "center" }}>
      <MakeSauceButton />

      {isLoading ? (
        <Loading />
      ) : (
        <>
          {RecipeList.map((menu: ISauce) => (
            <Grid
              item
              md={4}
              xs={6}
              key={menu.id}
              onClick={selectMenuSauce}
              data-img={menu.img}
              data-name={menu.name}
              data-eng={menu.eng_name}
              data-calorie={menu.calorie}
            >
              <MakeSauceCard
                img={menu.img}
                name={menu.name}
                eng={menu.eng_name}
                calorie={menu.calorie}
              />
            </Grid>
          ))}
        </>
      )}

      <MakeResultDialog />
    </Grid>
  );
};

export default MakeSauceList;
