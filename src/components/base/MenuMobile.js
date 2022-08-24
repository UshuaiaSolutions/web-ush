import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Fondo = styled.div`
  background: rgba(246, 243, 232, 0.9);
  width: 100vw;
  height: calc(100vh - 100px);
  position: absolute;
  top: 0;
  left: 0;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 20;
`;

const Logo = styled.div`
  background-size: cover;
  height: 46px;
  width: 169px;
  background: url(/logos/ush-mobile-open.png);
  margin-bottom: 30px;
`;

const StyledLink = styled(Link)`
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0em;
  color: ${(props) => props.theme.textonegro};
  margin-bottom: 30px;
  text-decoration: none;
`;

const Follow = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0em;
  color: ${(props) => props.theme.textonegro};
`;

const StyledBoton = styled.button`
  height: 32px;
  width: 254px;
  left: 0px;
  top: 240px;
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  color: ${(props) => props.theme.fondo};
  background: ${(props) => props.theme.lilaush};
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  margin-bottom: 10px;
`;

const ContainerRedesFooter = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 34px;
`;

const Red = styled.p`
  text-decoration: underline;
  font-size: 10px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0em;
`;

const ContainerRed = styled.a`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.textonegro};
  flex-direction: column;
  margin-right: 0px;
`;

const RedImage = styled.img`
  width: 23px;
  height: 23px;
  margin-bottom: 8px;
`;

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
