import { useQuery } from "react-query";
import { menuList } from "../../../common/api";

import MakeCard from "./MakeCard";
import MakeButton from "./makeButton/MakeButton";
import Loading from "../../common/Loading";
import MakeError from "./MakeError";

import useMake from "../../../hooks/useMake";

import { Grid } from "@mui/material";
import { MakeListContainer } from "../../../style/page/make/MakeList.styled";

interface IMenu {
  id: string;
  img: string;
  name: string;
  eng_name: string;
  calorie: number;
}

const MakeList = ({ select }: { select: string }) => {
  const { isLoading, data: RecipeList } = useQuery(`make/${select}`, () =>
    menuList(select)
  );

  const { selectMenu } = useMake(select);

  return (
    <MakeListContainer container spacing={1.5}>
      <MakeButton select={select} />

      {isLoading ? (
        <Grid item md={4} xs={6}>
          <Loading />
        </Grid>
      ) : (
        <>
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
                menu={select}
                img={menu.img}
                name={menu.name}
                eng={menu.eng_name}
                calorie={menu.calorie}
              />
            </Grid>
          ))}
        </>
      )}
      <MakeError />
    </MakeListContainer>
  );
};

export default MakeList;
