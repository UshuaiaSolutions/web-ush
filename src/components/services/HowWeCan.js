import React, { useContext } from "react";
import Container from "../base/Container";
import { StyledContainer, Column, Row, RowContainer } from "./HowWeCanComp";
import Uno from "../../assets/Numeros/Uno";
import Dos from "../../assets/Numeros/Dos";
import Tres from "../../assets/Numeros/Tres";
import Cuatro from "../../assets/Numeros/Cuatro";

import EstrellaRosa from "../../assets/Numeros/EstrellaRosa";
import EstrellaVerde from "../../assets/Numeros/EstrellaVerde";
import EstrellaAmarilla from "../../assets/Numeros/EstrellaAmarilla";
import EstrellaVioleta from "../../assets/Numeros/EstrellaVioleta";
import { TranslationContext } from "../../assets/Translations/TranslationsProvider";
import Translator from "../../assets/Translations/Translator";

function HowWeCan() {
  const { text } = useContext(TranslationContext);

  return (
    <Container>
      <StyledContainer>
        <RowContainer className="mb-40">
          <Column>
            <Row>
              <Uno />
              <h3 className="h2-web h3-mobile">
                <Translator text={text.SERVICES.HERO.FIRST.TITLE} />
              </h3>
            </Row>
            <span className="sp destacado-regular txt-regular-mobile mt-16-mobile mt-25">
              <Translator text={text.SERVICES.HERO.FIRST.BAJADA} />
            </span>
          </Column>
          <EstrellaRosa />
        </RowContainer>
        <RowContainer className="mb-40">
          <EstrellaVerde />
          <Column>
            <Row>
              <h3 className="h2-web h3-mobile">
                <Translator text={text.SERVICES.HERO.SECOND.TITLE} />
              </h3>
              <Dos />
            </Row>
            <span className="sp destacado-regular txt-regular-mobile mt-16-mobile mt-25">
              <Translator text={text.SERVICES.HERO.SECOND.BAJADA} />
            </span>
          </Column>
        </RowContainer>
        <RowContainer className="mb-40">
          <Column>
            <Row>
              <Tres />
              <h3 className="h2-web h3-mobile width-tres">
                <Translator text={text.SERVICES.HERO.THIRD.TITLE} />
              </h3>
            </Row>
            <span className="sp destacado-regular txt-regular-mobile mt-16-mobile mt-25">
              <Translator text={text.SERVICES.HERO.THIRD.BAJADA} />
            </span>
          </Column>
          <EstrellaAmarilla />
        </RowContainer>
        <RowContainer className="">
          <EstrellaVioleta />
          <Column>
            <Row>
              <h3 className="h2-web h3-mobile">
                <Translator text={text.SERVICES.HERO.FOURTH.TITLE} />
              </h3>
              <Cuatro />
            </Row>
            <span className="sp destacado-regular txt-regular-mobile mt-16-mobile mt-25">
              <Translator text={text.SERVICES.HERO.FOURTH.BAJADA} />
            </span>
          </Column>
        </RowContainer>
      </StyledContainer>
    </Container>
  );
}

export default HowWeCan;
