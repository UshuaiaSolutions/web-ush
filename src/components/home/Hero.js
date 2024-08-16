import React, { useContext } from "react";
import { HashLink } from "react-router-hash-link";
import BotonSecundario from "../base/BotonSecundario";
import Container from "../base/Container";
import { Content } from "./HeroComp";
import IlustracionHS from "../../assets/Ilustracion-HS";
import Ondas from "../../assets/Ondas";
import { CorteDesktop, CorteMobile } from "../base/Cortes";
import { TranslationContext } from "../../assets/Translations/TranslationsProvider";
import Translator from "../../assets/Translations/Translator";

const Hero = () => {
  const { text } = useContext(TranslationContext);

  return (
    <Container>
      <Content>
        <div className="mb-20-mobile">
          <h1 className="h1-web h1-mobile mb-32 mb-16-mobile">
            <Translator text={text.HOME.HERO.TITULO} />
          </h1>
          <p className="destacado-regular txt-regular-mobile mb-32 mb-16-mobile">
            {/* Specialized professionals empowered
            <CorteDesktop /> by the latest technology can{" "}
            <span className="destacado-bold destacados-semibold-mobile">
              translate,
              <CorteDesktop /> localize and create content
            </span>{" "}
            to help you
            <CorteDesktop /> succeed in international markets. */}
            <Translator text={text.HOME.HERO.BAJADA} />
          </p>
          <HashLink smooth to="/#contact">
            <BotonSecundario>{text.HOME.HERO.BUTTON}</BotonSecundario>
          </HashLink>
        </div>
        <IlustracionHS />
      </Content>
      <Ondas />
    </Container>
  );
};

export default Hero;
