import React from "react";
import styled from "styled-components";
import Container from "../base/Container";

const StyledContainer = styled.div`
  padding: 40px 0;
  color: ${(props) => props.theme.textonegro};
  background: ${(props) => props.theme.fondo};
  display: flex;
  flex-direction: column;

  @media (min-width: 1025px) {
    padding: 115px 0 40px;
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
          Teaming with clients worldwide
        </h1>
        <p className="destacados-mobile destacado-regular mb-40-mobile mb-70">
          Our expertise enables us to offer different localization solutions. We
          provide several services from file processing and content parsing to
          dubbing, MTPE, audio and video, DTP, voice-recording and testing
          services. Plus, we've localized and tested apps on iOS and Android
          devices and we've helped create corporate social media content.
        </p>
        <ContainerIcon>
          <img className="" src="/icons/finger-down.png" alt="See more" />
        </ContainerIcon>
      </Container>
    </StyledContainer>
  );
}

export default Teaming;
