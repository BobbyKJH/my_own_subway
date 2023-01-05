import { pathNav } from "../../common/utils";

import { FooterContainer, FooterLink } from "../../style/common/Footer.styled";

import HomeIcon from "@mui/icons-material/Home";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import PersonIcon from "@mui/icons-material/Person";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLink to="/" className={pathNav("") ? "location" : ""}>
        <HomeIcon fontSize="small" className={pathNav("") ? "path" : ""} />
      </FooterLink>

      <FooterLink to="/make" className={pathNav("make") ? "location" : ""}>
        <RestaurantMenuIcon
          fontSize="small"
          className={pathNav("make") ? "path" : ""}
        />
      </FooterLink>

      <FooterLink to="/result" className={pathNav("result") ? "location" : ""}>
        <RestaurantIcon
          fontSize="small"
          className={pathNav("result") ? "path" : ""}
        />
      </FooterLink>

      <FooterLink to="/mypage" className={pathNav("mypage") ? "location" : ""}>
        <PersonIcon
          fontSize="small"
          className={pathNav("mypage") ? "path" : ""}
        />
      </FooterLink>
    </FooterContainer>
  );
};

export default Footer;
