import React from "react";
import { Link } from "react-router-dom";
import Container from "../base/Container";
import { CorteDesktop, CorteMobile } from "../base/Cortes";
import { StyledContainer, Column } from "./BookMeetingSmallComp";
import BotonSecundario from "../base/BotonSecundario";

function BookMeetingSmall() {
  return (
    <StyledContainer>
      <Container>
        <Column>
          <h1 className="text-center-mobile hero-section-titles-mobile h1-web-sub mb-20-mobile">
            Book a<CorteDesktop /> meeting!
          </h1>
          <div>
            <p className="text-center-mobile destacados-italic-mobile destacado-italic mb-20-mobile mb-40">
              Tell us what you need and we'll help you
              <CorteDesktop />
              <CorteMobile /> succeed in new markets.
            </p>

            <Link to="/contact">
              <BotonSecundario>Get in touch</BotonSecundario>
            </Link>
          </div>
        </Column>
      </Container>
    </StyledContainer>
  );
}

export default BookMeetingSmall;
