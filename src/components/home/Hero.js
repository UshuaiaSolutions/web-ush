import React from "react";
import { HashLink } from "react-router-hash-link";
import BotonSecundario from "../base/BotonSecundario";
import Container from "../base/Container";
import { Content } from "./HeroComp";
import IlustracionHS from "../../assets/Ilustracion-HS";
import Ondas from "../../assets/Ondas";
import { CorteDesktop, CorteMobile } from "../base/Cortes";

const Hero = () => {
  return (
    <Container>
      <Content>
        <div className="mb-20-mobile">
          <h1 className="h1-web h1-mobile mb-32 mb-16-mobile">
            Expand your
            <CorteMobile />
            <CorteDesktop /> global potential
          </h1>
          <p className="destacado-regular txt-regular-mobile mb-32 mb-16-mobile">
            Specialized professionals empowered
            <CorteDesktop />
            <CorteMobile /> by the latest technology can{" "}
            <span className="destacado-bold destacados-semibold-mobile">
              translate,
              <CorteMobile />
              <CorteDesktop /> localize and create content
            </span>{" "}
            to help you
            <CorteMobile />
            <CorteDesktop /> succeed in international markets.
          </p>
          <HashLink smooth to="/#contact">
            <BotonSecundario>Get in touch</BotonSecundario>
          </HashLink>
        </div>
        <IlustracionHS />
      </Content>
      <Ondas />
    </Container>
  );
};

export default Hero;
