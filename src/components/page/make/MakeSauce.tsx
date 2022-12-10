import { useRecoilValue } from "recoil";
import { recipeSauce } from "../../../atom/atom";

import { Grid } from "@mui/material";
import {
  MakeSauceContainer,
  SauceEng,
  SauceImage,
  SauceName,
} from "../../../style/page/make/MakeSauce.styled";

const MakeSauce = () => {
  const { img: Img, name: Name, eng: Eng_Name } = useRecoilValue(recipeSauce);

  return (
    <>
      <MakeSauceContainer>
        {Img.slice(0, 3).map((image) => (
          <Grid item xs={4} key={image}>
            <SauceImage src={image} />
          </Grid>
        ))}
      </MakeSauceContainer>

      <MakeSauceContainer>
        {Name.slice(0, 3).map((name) => (
          <SauceName item xs={4} key={name}>
            {name}
          </SauceName>
        ))}
      </MakeSauceContainer>

      <MakeSauceContainer>
        {Eng_Name.slice(0, 3).map((eng) => (
          <SauceEng item xs={4} key={eng}>
            {eng}
          </SauceEng>
        ))}
      </MakeSauceContainer>
    </>
  );
};

export default MakeSauce;
