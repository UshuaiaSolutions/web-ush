import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BotonPrincipal from "./base/BotonPrincipal";
import Container from "./base/Container";
import { CorteDesktop, CorteMobile } from "./base/Cortes";

const StyledContainer = styled.div`
  padding: 45px 0;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.rosaush};
  width: 100%;
  color: ${(props) => props.theme.textonegro};

  @media (min-width: 1025px) {
    padding: 150px 0;
  }

  @media (min-width: 1500px) {
    padding: 100px 0;
  }
`;

const Column = styled.div`
  @media (min-width: 769px) {
    display: flex;
    justify-content: space-between;
  }
`;

function BookMeetingSmall() {
  return (
    <StyledContainer>
      <Container>
        <Column>
          <h1 className="text-center-mobile hero-section-titles-mobile h1-web-sub mb-20-mobile w-100-mobile w-40">
            Book a<CorteDesktop /> meeting!
          </h1>
          <div className="w-50-desktop-grande w-50-desktop-chico">
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
