import { useState } from "react";

import MenuDialog from "./MenuDialog";

import { Card, CardContent, CardActionArea } from "@mui/material";
import {
  CardCalorie,
  CardEng,
  CardImg,
  CardName,
} from "../../../style/page/menu/MenuCard.styled";

interface IMenuCard {
  img: string;
  calorie: number;
  name: string;
  eng_name: string;
  summary: string;
}

const MenuCard = ({ img, calorie, name, eng_name, summary }: IMenuCard) => {
  const [dialog, setDialog] = useState(false);

  const dialogOpen = () => {
    setDialog(true);
  };

  const dialogClose = () => {
    setDialog(false);
  };

  return (
    <>
      <Card
        sx={{ maxWidth: 345, display: "inline-block" }}
        onClick={dialogOpen}
      >
        <CardActionArea>
          <CardImg component="img" image={img} alt={name} />

          <CardContent sx={{ p: 0 }}>
            <CardName gutterBottom variant="h5">
              <span>{name}</span>
            </CardName>

            <CardEng gutterBottom variant="h5">
              <span>{eng_name}</span>
            </CardEng>

            <CardCalorie variant="body2">
              <span>{calorie}kcal</span>
            </CardCalorie>
          </CardContent>
        </CardActionArea>
      </Card>

      <MenuDialog
        open={dialog}
        dialogClose={dialogClose}
        img={img}
        name={name}
        eng_name={eng_name}
        summary={summary}
        calorie={calorie}
      />
    </>
  );
};

export default MenuCard;
