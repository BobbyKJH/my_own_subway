import { useRecoilValue } from "recoil";
import { recipeFamily } from "../../../../atom/atom";

import {
  MakeResultCardGrid,
  MakeResultCardImg,
  MakeResultCardName,
  MakeResultCardEng,
} from "../../../../style/page/make/makeResult/MakeResultCard.styled";

const MakeResultCard = ({ menu, num }: { menu: string; num: number }) => {
  const { img, name, eng_name } = useRecoilValue(recipeFamily(menu));

  return (
    <MakeResultCardGrid item xs={num}>
      <MakeResultCardImg src={img} alt={name} />

      <MakeResultCardName>{name}</MakeResultCardName>

      <MakeResultCardEng>{eng_name}</MakeResultCardEng>
    </MakeResultCardGrid>
  );
};

export default MakeResultCard;
