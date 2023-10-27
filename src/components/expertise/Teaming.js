import React from "react";
import Container from "../base/Container";
import { CorteDesktop, CorteMobile } from "../base/Cortes";
import { StyledContainer } from "./TeamingComp";
import Mapa from "../../assets/Portfolio/Mapa";
import FinalLinea from "../../assets/Portfolio/FinalLinea";
import MapaDer from "../../assets/Portfolio/MapaDer";
import MapaIzq from "../../assets/Portfolio/MapaIzq";
import Avion from "../../assets/Portfolio/Avion";

function Teaming() {
  return (
    <>
      <Mapa />
      <StyledContainer>
        <Container>
          <div style={{ zIndex: "2", position: "relative" }}>
            <h1 className="h1-mobile h1-web mb-16-mobile mb-32 text-center">
              Teaming with
              <CorteDesktop />
              <CorteMobile /> clients worldwide
            </h1>
            <p className="txt-regular-mobile destacado-regular text-center">
              Our expertise enables us to offer different
              <CorteDesktop /> localization solutions. We provide several
              <CorteDesktop /> services from file processing and content parsing
              <CorteDesktop /> to dubbing, MTPE, audio and video editing, DTP,
              <CorteDesktop /> voice-recording, copywriting and testing.
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
