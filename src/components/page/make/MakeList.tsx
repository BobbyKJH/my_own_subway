import { useRecoilState, useSetRecoilState } from "recoil";
import { recipeFamily, recipeOpen } from "../../../atom/atom";

import { useQuery } from "react-query";
import { menuList } from "../../../common/api";

import MakeCard from "./MakeCard";
import { Grid } from "@mui/material";

interface IMake {
  make: string;
  next: string;
}

const MakeList = ({ make, next }: IMake) => {
  const { isLoading, data: RecipeList } = useQuery(`make/${make}`, () =>
    menuList(`${make}`)
  );
  const setOpen = useSetRecoilState(recipeOpen);

  const [recipe, setRecipe] = useRecoilState(recipeFamily(make));

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

  console.log(recipe);
  return (
    <div>
      {isLoading ? null : (
        <Grid container spacing={1.5} sx={{ textAlign: "center" }}>
          {RecipeList.map((list: any) => (
            <Grid
              item
              md={4}
              xs={6}
              sx={{ textAlign: "center" }}
              key={list.id}
              onClick={selectMenu}
              data-img={list.img}
              data-name={list.name}
              data-eng={list.eng_name}
              data-calorie={list.calorie}
            >
              <MakeCard
                img={list.img}
                name={list.name}
                eng={list.eng_name}
                calorie={list.calorie}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default MakeList;
