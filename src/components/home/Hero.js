import React from "react";
import { HashLink } from "react-router-hash-link";
import styled from "styled-components";
import BotonSecundario from "../base/BotonSecundario";
import Container from "../base/Container";
import { CorteDesktop, CorteMobile } from "../base/Cortes";

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 60px 0;

  @media (min-width: 769px) and (max-width: 1124px) {
    flex-direction: row;
    padding: 50px 0;

    & .corte-exacto-desktop-medio {
      width: 50%;
    }
  }

  @media (min-width: 1125px) {
    flex-direction: row;
    padding: 100px 0;

    & .corte-exacto-desktop-medio {
      min-width: 507px;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;

  @media (min-width: 769px) and (max-width: 1124px) {
    width: 50%;
  }

  @media (min-width: 1125px) {
    width: 50%;
  }
`;

const Hero = () => {
  return (
    <Container>
      <Content>
        <div className="mb-20-mobile corte-exacto-desktop-chico corte-exacto-desktop-medio">
          <h1 className="h1-web hero-section-titles-mobile mb-40 mb-20-mobile">
            Expand your
            <CorteDesktop />
            <CorteMobile /> <u>global potential</u>
          </h1>
          <p className="destacado-regular h1-mobile mb-40 mb-20-mobile">
            Specialized professionals empowered by
            <CorteDesktop />
            <CorteMobile /> the latest technology{" "}
            <span className="destacado-bold h1-mobile">
              to help you succeed
              <CorteDesktop /> in
              <CorteMobile /> international markets.
            </span>
          </p>
          <HashLink smooth to="/#contact">
            <BotonSecundario>Get in touch</BotonSecundario>
          </HashLink>
        </div>
        <Image src="/hero-image.png" alt="hero illustration" />
      </Content>
    </Container>
  );
};

export default Hero;
