import React from "react";
import {
  Fondo,
  Logo,
  StyledLink,
  Follow,
  StyledBoton,
  ContainerRedesFooter,
  Red,
  ContainerRed,
  RedImage,
} from "./MenuMobileComp";

function MenuMobile({ func }) {
  return (
    <Fondo>
      <Logo />
      <StyledLink onClick={() => func(false)} to="/">
        Home
      </StyledLink>
      <StyledLink onClick={() => func(false)} to="/about">
        About
      </StyledLink>
      <StyledLink onClick={() => func(false)} to="/services">
        Services
      </StyledLink>
      <StyledLink onClick={() => func(false)} to="/expertise">
        Expertise
      </StyledLink>
      <StyledLink onClick={() => func(false)} to="/contact">
        <StyledBoton>Get started</StyledBoton>
      </StyledLink>
      <Follow>Follow us on social media</Follow>
      <ContainerRedesFooter>
        <ContainerRed
          href="https://www.instagram.com/ushuaiasolutions/"
          target="_blank"
        >
          <RedImage
            className="object-scale me-5 me-0-mobile"
            src="/icons/instagram-blanco.png"
            alt="instagram"
          />
          <Red>Instagram</Red>
        </ContainerRed>
        <ContainerRed
          href="https://www.linkedin.com/company/ushuaia-solutions/"
          target="_blank"
        >
          <RedImage
            className="object-scale me-5 me-0-mobile"
            src="/icons/linkedin-blanco.png"
            alt="linkedin"
          />
          <Red>Linked In</Red>
        </ContainerRed>
        <ContainerRed
          href="https://www.facebook.com/UshuaiaSolutions"
          target="_blank"
        >
          <RedImage
            className="object-scale me-5 me-0-mobile"
            src="/icons/facebook-blanco.png"
            alt="facebook"
          />
          <Red>Facebook</Red>
        </ContainerRed>
        <ContainerRed
          href="https://www.youtube.com/channel/UCexqpO701H7nI72dplSkjaw"
          target="_blank"
        >
          <RedImage
            className="object-scale me-5 me-0-mobile"
            src="/icons/youtube-blanco.png"
            alt="youtube"
          />
          <Red>Youtube</Red>
        </ContainerRed>
      </ContainerRedesFooter>
    </Fondo>
  );
}

export default MenuMobile;
