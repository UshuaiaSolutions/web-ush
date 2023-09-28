import React from "react";
import { Link } from "react-router-dom";
import Container from "../base/Container";
import { CorteDesktop, CorteMobile } from "../base/Cortes";
import { StyledContainer, Column, Content } from "./BookMeetingSmallComp";
import BotonSecundario from "../base/BotonSecundario";

function BookMeetingSmall() {
  return (
    <Container>
      <StyledContainer>
        <Column>
          <h1 className="h2-web h3-mobile mb-16-mobile text-center-mobile">
            Book a meeting!
          </h1>
          <Content>
            <p className="text-center-mobile destacados-italic-mobile destacado-italic mb-20-mobile mb-50">
              Tell us what you need
              <CorteDesktop /> and we'll help you
              <CorteMobile /> succeed in new markets.
            </p>
            <Link to="/contact">
              <BotonSecundario className="mb-32 mb-16-mobile">
                Get in touch
              </BotonSecundario>
            </Link>
          </Content>
        </Column>
      </StyledContainer>
    </Container>
  );
}

export default BookMeetingSmall;
