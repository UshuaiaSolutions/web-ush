import React from "react";
import { HashLink } from "react-router-hash-link";
import BotonSecundario from "../base/BotonSecundario";
import Container from "../base/Container";
import { CorteDesktop, CorteMobile } from "../base/Cortes";
import { Content, Image } from "./HeroComp";

const Hero = () => {
  return (
    <Container>
      <Content>
        <div className="mb-20-mobile corte-exacto-desktop-chico">
          <h1 className="h1-web hero-section-titles-mobile mb-40 mb-20-mobile">
            Expand your
            <CorteDesktop />
            <CorteMobile /> <u>global potential</u>
          </h1>
          <p className="destacado-regular txt-regular-mobile mb-40 mb-20-mobile">
            Specialized professionals empowered by
            <CorteDesktop />
            <CorteMobile /> the latest technology{" "}
            <span className="destacado-bold destacados-semibold-mobile">
              to help you succeed
              <CorteDesktop />
              <CorteMobile /> in international markets.
            </span>
          </p>
          <HashLink smooth to="/#contact">
            <BotonSecundario>Get in touch</BotonSecundario>
          </HashLink>
        </div>
        <Image
          src="https://ushmultimedia.blob.core.windows.net/ushwebsite/HomeHeroSection.png"
          alt="hero illustration"
        />
      </Content>
    </Container>
  );
};

export default Hero;
