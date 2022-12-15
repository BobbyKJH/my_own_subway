import { useQuery } from "react-query";

import { useRecoilState } from "recoil";
import { recipeSauce } from "../../../../atom/atom";

import { menuList } from "../../../../common/api";

import MakeSauceCard from "./MakeSauceCard";
import MakeSauceButton from "../makeButton/MakeSauceButton";
import Loading from "../../../common/Loading";
import MakeResultDialog from "../makeResult/MakeResultDialog";

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

  const [sauce, setSauce] = useRecoilState(recipeSauce);

  const selectSauce = (e: React.MouseEvent<HTMLDivElement>) => {
    const { dataset } = e.currentTarget;
    if (sauce.name.slice(0, 3).find((name) => name === dataset.name)) {
      return alert("이미 선택하신 소스 입니다.");
    }
    setSauce({
      img: [dataset.img, ...sauce.img],
      name: [dataset.name, ...sauce.name],
      eng: [dataset.eng, ...sauce.eng],
      calorie: [Number(dataset.calorie), ...sauce.calorie],
    });
  };

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
              onClick={selectSauce}
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
