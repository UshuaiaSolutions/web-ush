import React from "react";
import Container from "../base/Container";
import { CorteDesktop } from "../base/Cortes";
import { StyledContainer } from "./MeetYourNeedsComp";
import Ondas from "../../assets/Ondas";

function MeetYourNeeds() {
  return (
    <Container>
      <StyledContainer>
        <h2 className="h1-web h1-mobile mb-16-mobile mb-50 text-center-mobile">
          Let's reach
          <CorteDesktop /> global markets
        </h2>
        <p className="txt-regular-mobile destacado-regular mb-32-mobile mb-40 text-center-mobile">
          USH is a synonym of flexibility, scalability
          <br /> and efficiency. We're your language service
          <br /> partner for Latin America, Europe
          <br /> and the world.
        </p>
      </StyledContainer>
      <Ondas />
    </Container>
  );
}

export default MeetYourNeeds;
