import { useNavigate } from "react-router-dom";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { recipeFamily, recipeSauce } from "../../../../atom/atom";
import { recipeResult } from "../../../../atom/persistAtom";

import useReset from "../../../../hooks/useReset";

const MakeResultButton = () => {
  const navigation = useNavigate();
  const { resetState } = useReset();

  const setResult = useSetRecoilState(recipeResult);

  const resultSandwich = useRecoilValue(recipeFamily("sandwich"));
  const resultBread = useRecoilValue(recipeFamily("bread"));
  const resultCheese = useRecoilValue(recipeFamily("cheese"));

  const resultSauce = useRecoilValue(recipeSauce);

  const resultMake = (e: React.MouseEvent<HTMLButtonElement>) => {
    setResult({
      sandwich: resultSandwich,
      bread: resultBread,
      cheese: resultCheese,
      sauce: resultSauce,
    });
    navigation("/result");
  };

  return (
    <>
      <button onClick={resultMake}>완성</button>
      <button onClick={resetState}>다시 선택</button>
    </>
  );
};

export default MakeResultButton;
