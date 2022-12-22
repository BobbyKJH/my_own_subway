import {
  ResultCardEng,
  ResultCardGrid,
  ResultCardImage,
  ResultCardName,
} from "../../../style/page/result/ResultCard.styled";

interface IResultCard {
  img: string;
  name: string;
  eng_name: string;
  calorie: number;
}

const ResultCard = ({ menu, num }: { menu: IResultCard; num: number }) => {
  return (
    <ResultCardGrid item xs={num}>
      <ResultCardImage src={menu.img} alt={menu.name} />

      <ResultCardName>{menu.name}</ResultCardName>

      <ResultCardEng>{menu.eng_name}</ResultCardEng>
    </ResultCardGrid>
  );
};

export default ResultCard;
