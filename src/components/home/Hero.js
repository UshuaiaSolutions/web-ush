import React from "react";
import { HashLink } from "react-router-hash-link";
import BotonSecundario from "../base/BotonSecundario";
import Container from "../base/Container";
import { Content } from "./HeroComp";
import IlustracionHS from "../../assets/Ilustracion-HS";
import Ondas from "../../assets/Ondas";

const Hero = () => {
  return (
    <Container>
      <Content>
        <div className="mb-20-mobile">
          <h1 className="h1-web hero-section-titles-mobile mb-32 mb-16-mobile">
            Expand your
            <br /> global potential
          </h1>
          <p className="destacado-regular txt-regular-mobile mb-32 mb-16-mobile">
            Specialized professionals empowered
            <br />
            by the latest technology can{" "}
            <span className="destacado-bold destacados-semibold-mobile">
              translate,
              <br /> localize and create content
            </span>{" "}
            to help you
            <br /> succeed in international markets.
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
