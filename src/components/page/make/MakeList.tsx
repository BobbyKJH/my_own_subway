import { useSetRecoilState } from "recoil";
import { recipeFamily, recipeOpen } from "../../../atom/atom";

import { useQuery } from "react-query";
import { menuList } from "../../../common/api";

import MakeCard from "./MakeCard";
import { Grid } from "@mui/material";

interface IMake {
  make: string;
  next: string;
}

interface IMenu {
  id: string;
  img: string;
  name: string;
  eng_name: string;
  calorie: number;
}

const MakeList = ({ make, next }: IMake) => {
  const { isLoading, data: RecipeList } = useQuery(`make/${make}`, () =>
    menuList(`${make}`)
  );
  const setOpen = useSetRecoilState(recipeOpen);

  const setRecipe = useSetRecoilState(recipeFamily(make));

  const selectMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    const { dataset } = e.currentTarget;
    setRecipe({
      img: dataset.img,
      name: dataset.name,
      eng_name: dataset.eng,
      calorie: Number(dataset.calorie),
    });
    setOpen(next);
  };

  return (
    <div>
      {isLoading ? null : (
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
                menu={make}
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
