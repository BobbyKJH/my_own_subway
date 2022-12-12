import { useRecoilState, useRecoilValue } from "recoil";
import { recipeFamily } from "../../../atom/atom";
import { recipeResult } from "../../../atom/persistAtom";

const MakeResultButton = () => {
  const [result, setResult] = useRecoilState(recipeResult);
  const resultSandwich = useRecoilValue(recipeFamily("sandwich"));
  const resultBread = useRecoilValue(recipeFamily("bread"));
  const resultCheese = useRecoilValue(recipeFamily("cheese"));
  const resultSauce = useRecoilValue(recipeFamily("sauce"));

  const resultCard = JSON.parse(
    localStorage.getItem("result/Recipe") as string
  );

  console.log(resultCard.recipe[0]);
  const resultMake = (e: any | never) => {
    setResult([resultSandwich, resultBread, resultCheese, resultSauce]);
  };
  return (
    <button
      style={{
        position: "absolute",
        transform: "translate(-50%, -50%)",
        top: "50%",
        left: "50%",
      }}
      onClick={resultMake}
    >
      1
    </button>
  );
};

export default MakeResultButton;
