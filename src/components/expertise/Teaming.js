import React from "react";
import styled from "styled-components";
import Container from "../base/Container";

const StyledContainer = styled.div`
  padding: 40px 0;
  color: ${(props) => props.theme.textonegro};
  background: ${(props) => props.theme.fondo};
  display: flex;
  flex-direction: column;
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
        <h1 className="hero-section-titles-mobile mb-20-mobile">
          Teaming with <br />
          clients worldwide
        </h1>
        <p className="destacados-mobile mb-40-mobile">
          Our expertise enables us to offer different
          <br /> localization solutions. We provide several <br />
          services from file processing and content <br />
          parsing to dubbing, MTPE, audio and video, <br />
          DTP, voice-recording and testing services. <br />
          Plus, we've localized and tested apps on <br />
          iOS and Android devices and we've helped <br />
          create corporate social media content.
        </p>
        <ContainerIcon>
          <img className="" src="/icons/finger-down.png" alt="See more" />
        </ContainerIcon>
      </Container>
    </StyledContainer>
  );
}

export default Teaming;
