import React from "react";
import { Link } from "react-router-dom";
import BotonPrincipal from "./base/BotonPrincipal";
import Container from "./base/Container";
import { CorteDesktop, CorteMobile } from "./base/Cortes";
import { StyledContainer, Column } from "./BookMeetingSmallComp";

function BookMeetingSmall() {
  return (
    <StyledContainer>
      <Container>
        <Column>
          <h1 className="text-center-mobile hero-section-titles-mobile h1-web-sub mb-20-mobile">
            Book a<CorteDesktop /> meeting!
          </h1>
          <div>
            <p className="text-center-mobile destacados-italic-mobile destacado-italic mb-20-mobile">
              What services are you looking for?
            </p>
            <p className="text-center-mobile destacados-italic-mobile destacado-italic mb-20-mobile">
              What languages do you
              <CorteMobile /> need us to work with?
            </p>
            <p className="text-center-mobile destacados-italic-mobile destacado-italic mb-20-mobile mb-40">
              Is your request urgent?
              <CorteMobile /> When do you need it?
            </p>
            <Link to="/contact">
              <BotonPrincipal>Get in touch</BotonPrincipal>
            </Link>
          </div>
        </Column>
      </Container>
    </StyledContainer>
  );
}

export default BookMeetingSmall;
