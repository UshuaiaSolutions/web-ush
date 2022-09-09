import React from "react";
import Container from "../base/Container";
import { CorteDesktop, CorteMobile } from "../base/Cortes";
import { StyledContainer, ContainerIcon } from "./TeamingComp";

function Teaming() {
  return (
    <StyledContainer>
      <Container>
        <h1 className="hero-section-titles-mobile h1-web mb-20-mobile mb-40 text-left-mobile text-center">
          Teaming with
          <CorteMobile /> <u>clients worldwide</u>
        </h1>
        <p className="destacados-mobile destacado-regular mb-40-mobile mb-70 text-left-mobile text-center">
          <b>
            Our expertise enables us to offer different
            <CorteMobile /> localization solutions.
          </b>{" "}
          We provide several
          <CorteDesktop />
          <CorteMobile /> services from file processing and content
          <CorteMobile /> parsing to dubbing, MTPE, audio and video
          <CorteDesktop />
          <CorteMobile /> editing, DTP, voice-recording and testing.
          <CorteMobile /> Plus, we've localized and tested apps on iOS
          <CorteMobile /> <CorteDesktop /> and Android devices and we've helped
          <CorteMobile /> create corporate social media content.
        </p>
        <ContainerIcon>
          <img
            className=""
            src="https://ushmultimedia.blob.core.windows.net/ushwebsite/ManitoIcon.png"
            alt="See more"
          />
        </ContainerIcon>
      </Container>
    </StyledContainer>
  );
}

export default Teaming;
