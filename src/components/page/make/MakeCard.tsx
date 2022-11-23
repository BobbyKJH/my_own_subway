import { useRecoilValue } from "recoil";
import { recipeFamily } from "../../../atom/atom";

import {
  MakeCardCalorie,
  MakeCardContainer,
  MakeCardContent,
  MakeCardEng,
  MakeCardImage,
  MakeCardName,
} from "../../../style/page/make/MakeCard.styled";

interface IMakeCard {
  menu?: string;
  img: string | undefined;
  name: string | undefined;
  eng: string | undefined;
  calorie: number | undefined;
}

const MakeCard = ({ menu, img, name, eng, calorie }: IMakeCard) => {
  const menuState = useRecoilValue(recipeFamily(menu));

  return (
    <MakeCardContainer>
      <div className={menuState.name === name ? "select" : "card"}>
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

export default MakeCard;
