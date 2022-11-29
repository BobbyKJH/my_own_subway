import { useRecoilValue, useSetRecoilState } from "recoil";
import { recipeFamily, recipeOpen } from "../../../atom/atom";

import { useQuery } from "react-query";
import { menuList } from "../../../common/api";

import MakeCard from "./MakeCard";
import Loading from "../../common/Loading";

import { Grid } from "@mui/material";

interface IMenu {
  id: string;
  img: string;
  name: string;
  eng_name: string;
  calorie: number;
}

const MakeList = () => {
  const openMenu = useRecoilValue(recipeOpen);
  const setRecipe = useSetRecoilState(recipeFamily(openMenu));

  const { isLoading, data: RecipeList } = useQuery(`make/${openMenu}`, () =>
    menuList(openMenu)
  );

  const selectMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    const { dataset } = e.currentTarget;
    setRecipe({
      img: dataset.img,
      name: dataset.name,
      eng_name: dataset.eng,
      calorie: Number(dataset.calorie),
    });
  };

  return (
    <div style={{ textAlign: "center" }}>
      {isLoading ? (
        <Loading />
      ) : (
        <Grid container spacing={1.5}>
          {RecipeList.map((menu: IMenu) => (
            <Grid
              item
              md={4}
              xs={6}
              key={menu.id}
              onClick={selectMenu}
              data-img={menu.img}
              data-name={menu.name}
              data-eng={menu.eng_name}
              data-calorie={menu.calorie}
            >
              <MakeCard
                menu={openMenu}
                img={menu.img}
                name={menu.name}
                eng={menu.eng_name}
                calorie={menu.calorie}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default MakeList;
