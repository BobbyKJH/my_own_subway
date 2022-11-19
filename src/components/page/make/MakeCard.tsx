import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface IMakeCard {
  img: string;
  name: string;
  eng: string;
  calorie: number;
}

const MakeCard = ({ img, name, eng, calorie }: IMakeCard) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={img} alt="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>

        <Typography gutterBottom variant="h5" component="div">
          {eng}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {calorie}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MakeCard;
