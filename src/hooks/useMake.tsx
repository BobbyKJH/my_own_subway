import { useRecoilState, useSetRecoilState } from "recoil";
import {
  makeResult,
  recipeFamily,
  recipeOpen,
  recipeSauce,
} from "../atom/atom";

const useMake = (menu?: string) => {
  const setMake = useSetRecoilState(recipeFamily(menu));
  const setMenuCount = useSetRecoilState(recipeOpen);
  const setResult = useSetRecoilState(makeResult);

  const [makeSauce, setMakeSauce] = useRecoilState(recipeSauce);

  const selectMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    const { dataset } = e.currentTarget;

    setMake({
      img: String(dataset.img),
      name: String(dataset.name),
      eng_name: String(dataset.eng),
      calorie: Number(dataset.calorie),
    });

    setMenuCount((prev) => prev + 1);
  };

  const selectMenuSauce = (e: React.MouseEvent<HTMLDivElement>) => {
    const { dataset } = e.currentTarget;

    if (makeSauce.name.slice(0, 3).find((name) => name === dataset.name)) {
      return alert(1);
    }

    setMakeSauce({
      img: [String(dataset.img), ...makeSauce.img],
      name: [String(dataset.name), ...makeSauce.name],
      eng: [String(dataset.eng), ...makeSauce.eng],
      calorie: [Number(dataset.calorie), ...makeSauce.calorie],
    });

    makeSauce.name.length >= 2 && setResult(true);
  };

  return { selectMenu, selectMenuSauce };
};

export default useMake;
