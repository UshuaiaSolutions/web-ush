import React, { useContext } from "react";
import Container from "../base/Container";
import { StyledContainer } from "./TeamingComp";
import Mapa from "../../assets/Portfolio/Mapa";
import FinalLinea from "../../assets/Portfolio/FinalLinea";
import MapaDer from "../../assets/Portfolio/MapaDer";
import MapaIzq from "../../assets/Portfolio/MapaIzq";
import Avion from "../../assets/Portfolio/Avion";
import { TranslationContext } from "../../assets/Translations/TranslationsProvider";
import Translator from "../../assets/Translations/Translator";

function Teaming() {
  const { text } = useContext(TranslationContext);

  return (
    <>
      <Mapa />
      <StyledContainer>
        <Container>
          <div style={{ zIndex: "2", position: "relative" }}>
            <h1 className="h1-mobile h1-web mb-16-mobile mb-32 text-center">
              <Translator text={text.EXPERTISE.TEAMING.TITLE} />
            </h1>
            <p className="txt-regular-mobile destacado-regular text-center">
              <Translator text={text.EXPERTISE.TEAMING.BAJADA} />
            </p>
          </div>
        </Container>
        <MapaDer />
        <MapaIzq />
        <Avion />
      </StyledContainer>
      <FinalLinea />
    </>
  );
}

export default Teaming;
