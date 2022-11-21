import {
  MakeCardCalorie,
  MakeCardContainer,
  MakeCardContent,
  MakeCardEng,
  MakeCardImage,
  MakeCardName,
} from "../../../style/page/make/MakeCard.styled";

interface IMakeCard {
  img: string;
  name: string;
  eng: string;
  calorie: number;
}

const MakeCard = ({ img, name, eng, calorie }: IMakeCard) => {
  return (
    <MakeCardContainer>
      <MakeCardImage src={img} alt={name} />

      <MakeCardContent>
        <MakeCardName gutterBottom variant="h5" component="div">
          {name}
        </MakeCardName>

        <MakeCardEng gutterBottom variant="h5" component="div">
          {eng}
        </MakeCardEng>

        <MakeCardCalorie variant="body2" component="div">
          {calorie}Kcal
        </MakeCardCalorie>
      </MakeCardContent>
    </MakeCardContainer>
  );
};

export default MakeCard;
