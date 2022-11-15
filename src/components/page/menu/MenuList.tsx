import { useQuery } from "react-query";
import { menuList } from "../../../common/api";

import { useRecoilValue } from "recoil";
import { menuUrl } from "../../../atom/atom";

import MenuCard from "./MenuCard";
import Loading from "../../common/Loading";

import { Grid } from "@mui/material";

interface IMenuList {
  id: number;
  calorie: number;
  img: string;
  name: string;
  eng_name: string;
  summary: string;
}

const MenuList = () => {
  const kind = useRecoilValue(menuUrl);
  const { isLoading, data: menu } = useQuery(`${kind}`, () => menuList(kind));

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <Grid container spacing={4}>
          {menu.map((menu: IMenuList) => (
            <Grid
              item
              key={menu.id}
              xl={3}
              lg={3}
              md={4}
              sm={4}
              xs={6}
              sx={{ textAlign: "center" }}
              alignItems="stretch"
            >
              <MenuCard
                img={menu.img}
                name={menu.name}
                eng_name={menu.eng_name}
                calorie={menu.calorie}
                summary={menu.summary}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default MenuList;
