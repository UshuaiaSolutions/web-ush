import React from "react";
import Container from "../base/Container";
import { CorteDesktop, CorteMobile } from "../base/Cortes";
import { StyledContainer } from "./TeamingComp";
import Mapa from "../../assets/Portfolio/Mapa";
import FinalLinea from "../../assets/Portfolio/FinalLinea";

function Teaming() {
  return (
    <>
      <Mapa />
      <StyledContainer>
        <Container>
          <h1 className="h1-mobile h1-web mb-16-mobile mb-32 text-center">
            Teaming with
            <br /> clients worldwide
          </h1>
          <p className="txt-regular-mobile destacado-regular text-center">
            Our expertise enables us to offer different
            <CorteDesktop />
            <CorteMobile /> localization solutions. We provide several
            <CorteDesktop />
            <CorteMobile /> services from file processing and content
            <CorteMobile /> parsing
            <CorteDesktop /> to dubbing, MTPE, audio and video
            <CorteMobile /> editing, DTP,
            <CorteDesktop /> voice-recording,
            <CorteMobile /> copywriting and testing.
          </p>
        </Container>
      </StyledContainer>
      <FinalLinea />
    </>
  );
}

export default Teaming;
