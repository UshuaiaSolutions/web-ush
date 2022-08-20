import React from "react";
import styled from "styled-components";
import Container from "./base/Container";
import { CorteDesktop, CorteMobile } from "./base/Cortes";

const StyledContainer = styled.div`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.fondo};

  @media (min-width: 1500px) {
    padding: 100px 0;
  }
`;

const StyledImg = styled.img`
  height: auto;
  width: 160px;
  object-fit: none;

  @media (max-width: 768px) {
    width: 67.65px;
    object-fit: contain;
  }
`;

const StyledImgLast = styled.img`
  height: fit-content;
  width: 360px;

  @media (max-width: 768px) {
    width: 184.5px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: between;

  @media (max-width: 1025px) {
    flex-direction: column;
  }
`;

function Memberships() {
  return (
    <StyledContainer>
      <Container>
        <Content>
          <div className="d-flex flex-column justify-center">
            <h2 className="h3-web h2-mobile mb-40 mb-20-mobile">
              Our Memberships
            </h2>
            <p className="txt-regular-mobile destacado-regular mb-20-mobile">
              Networking and sharing experiences is the
              <CorteDesktop />
              <CorteMobile /> best way to improve both our services and
              <CorteDesktop />
              <CorteMobile /> the language industry as a whole.
            </p>
          </div>
          <div className="d-flex flex-column">
            <div className="d-flex justify-evenly">
              <StyledImg
                src="/logos/logo-aasl.png"
                alt="Asociación Argentina de Servicios Lingüísticos"
              />
              <StyledImg
                src="/logos/logo-gala.png"
                alt="Globalization and localization association"
              />
            </div>
            <div className="d-flex justify-between align-center justify-evenly-mobile">
              <StyledImg
                src="/logos/logo-elia.png"
                alt="European Language Industry Association"
              />
              <StyledImgLast
                src="/logos/logo-translated.png"
                alt="Translated in Argentina"
              />
            </div>
          </div>
        </Content>
      </Container>
    </StyledContainer>
  );
}

export default Memberships;
