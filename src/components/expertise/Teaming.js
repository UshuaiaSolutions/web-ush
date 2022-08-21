import React from "react";
import styled from "styled-components";
import Container from "../base/Container";
import { CorteDesktop, CorteMobile } from "../base/Cortes";

const StyledContainer = styled.div`
  padding: 40px 0;
  color: ${(props) => props.theme.textonegro};
  background: ${(props) => props.theme.fondo};
  display: flex;
  flex-direction: column;

  @media (min-width: 1025px) {
    padding: 115px 0 40px;
  }

  @media (min-width: 1500px) {
    padding: 100px 0;
  }
`;

const ContainerIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

function Teaming() {
  return (
    <StyledContainer>
      <Container>
        <h1 className="hero-section-titles-mobile h1-web mb-20-mobile mb-40 text-left-mobile text-center">
          Teaming with <u>clients worldwide</u>
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
          <CorteMobile /> Plus, we've localized and tested apps on
          <CorteMobile /> iOS
          <CorteDesktop /> and Android devices and we've helped
          <CorteMobile /> create corporate social media content.
        </p>
        <ContainerIcon>
          <img className="" src="/icons/finger-down.png" alt="See more" />
        </ContainerIcon>
      </Container>
    </StyledContainer>
  );
}

export default Teaming;
