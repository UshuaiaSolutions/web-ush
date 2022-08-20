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
    padding: 90px 0 40px;
  }

  @media (min-width: 1500px) {
    padding: 100px 0;
  }
`;

const ContainerIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 1025px) {
    margin-bottom: 20px;
  }
`;

const Image = styled.img`
  @media (min-width: 1025px) {
    height: 68px;
    width: 68px;
  }
`;

function MeetYourNeeds() {
  return (
    <StyledContainer>
      <Container>
        <h1 className="hero-section-titles-mobile h1-web mb-20-mobile mb-40 text-center text-left-mobile">
          We can meet
          <CorteMobile /> <u>your needs</u>
        </h1>
        <p className="destacados-mobile destacado-regular mb-40-mobile text-center text-left-mobile">
          We offer a wide variety of multilingual
          <CorteMobile /> solutions, from translation and
          <CorteMobile /> localization to content
          <CorteDesktop /> creation and
          <CorteMobile /> video editing. USH is a synonym of
          <CorteMobile /> flexibility, scalability and efficiency.
        </p>
        <p className="destacados-mobile destacado-bold mb-40-mobile mb-40 text-center text-left-mobile">
          We're your language service partner for
          <CorteMobile /> Latin America, Europe and the world.
        </p>
        <ContainerIcon>
          <Image className="" src="/icons/finger-down.png" alt="See more" />
        </ContainerIcon>
      </Container>
    </StyledContainer>
  );
}

export default MeetYourNeeds;
