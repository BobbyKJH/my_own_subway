import { useResetRecoilState } from "recoil";
import {
  recipeFamily,
  recipeOpen,
  recipeSauce,
  makeResult,
} from "../atom/atom";

const useReset = () => {
  const resetNum = useResetRecoilState(recipeOpen);
  const resetResult = useResetRecoilState(makeResult);

  const resetSandwich = useResetRecoilState(recipeFamily("sandwich"));
  const resetBread = useResetRecoilState(recipeFamily("bread"));
  const resetCheese = useResetRecoilState(recipeFamily("cheese"));

  const resetSauce = useResetRecoilState(recipeSauce);

  // Event Type
  const resetState = () => {
    resetNum();
    resetSandwich();
    resetBread();
    resetCheese();
    resetSauce();
    resetResult();
  };

  return { resetState };
};

export default useReset;
