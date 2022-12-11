import { useRecoilValue } from "recoil";
import { recipeSauce } from "../../../atom/atom";

import {
  MakeCardCalorie,
  MakeCardContainer,
  MakeCardContent,
  MakeCardEng,
  MakeCardImage,
  MakeCardName,
} from "../../../style/page/make/MakeCard.styled";

interface IMakeCard {
  img: string | undefined;
  name: string | undefined;
  eng: string | undefined;
  calorie: number | undefined;
}

const MakeSauceCard = ({ img, name, eng, calorie }: IMakeCard) => {
  const menuSauce = useRecoilValue(recipeSauce);

  return (
    <MakeCardContainer>
      <div
        className={
          menuSauce.name.slice(0, 3).includes(name) ? "select" : "card"
        }
      >
        <MakeCardImage src={img} alt={name} />

        <MakeCardContent>
          <MakeCardName gutterBottom variant="h5" component="div">
            {name}
          </MakeCardName>

          <MakeCardEng gutterBottom variant="h5" component="div">
            {eng}
          </MakeCardEng>
        </MakeCardContent>

        <MakeCardCalorie variant="body2" component="div">
          {calorie}Kcal
        </MakeCardCalorie>
      </div>
    </MakeCardContainer>
  );
};

export default MakeSauceCard;
