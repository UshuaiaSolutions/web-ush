import React from "react";
import Container from "../base/Container";
import { CorteDesktop, CorteMobile } from "../base/Cortes";
import { StyledContainer, ContainerIcon, Image } from "./MeetYourNeedsComp";

function MeetYourNeeds() {
  return (
    <StyledContainer>
      <Container>
        <h1 className="hero-section-titles-mobile h1-web mb-20-mobile mb-40 text-center text-left-mobile">
          We can meet
          <CorteMobile /> <u>your needs</u>
        </h1>
        <p className="txt-regular-mobile destacado-regular mb-40-mobile mb-40 text-center text-center-mobile">
          USH is a synonym of flexibility, scalability
          <CorteMobile /> and efficiency.
          <CorteDesktop />{" "}
          <span className="destacados-semibold-mobile destacado-bold">
            We're your language service
            <CorteMobile /> partner for Latin America,
            <CorteMobile /> Europe and the world.
          </span>
        </p>
        <ContainerIcon>
          <Image
            className=""
            src="https://ushmultimedia.blob.core.windows.net/ushwebsite/ManitoIcon.png"
            alt="See more"
          />
        </ContainerIcon>
      </Container>
    </StyledContainer>
  );
}

export default MeetYourNeeds;
