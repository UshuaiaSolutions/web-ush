import React from "react";
import styled from "styled-components";
import Container from "../base/Container";
import { CorteDesktop, CorteMobile } from "../base/Cortes";

const StyledContainer = styled.div`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.azulush};
  color: ${(props) => props.theme.fondo};

  @media (min-width: 1500px) {
    padding: 100px 0;
  }
`;

const StyledImgAASL = styled.img`
  @media (min-width: 1125px) {
    width: 140.79px;
    height: fit-content;
  }
`;

const StyledImgGALA = styled.img`
  @media (min-width: 1125px) {
    width: 126.44px;
    height: fit-content;
  }
`;

const StyledImgELIA = styled.img`
  @media (min-width: 1125px) {
    width: 121.06px;
    height: fit-content;
  }
`;

const StyledImgLast = styled.img`
  @media (min-width: 1125px) {
    height: fit-content;
    width: 330px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
  @media (min-width: 1025px) and (max-width: 1499px) {
    & .corte-exacto-medio {
      min-width: 518px;
    }
  }
`;

function Memberships() {
  return (
    <StyledContainer>
      <Container>
        <Content>
          <div className="d-flex flex-column justify-center w-50-desktop-medio corte-exacto-medio">
            <h2 className="h2-web h2-mobile mb-40 mb-20-mobile">
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
          <div className="d-flex flex-column w-50-desktop-grande w-50-desktop-chico ">
            <div className="d-flex justify-evenly">
              <StyledImgAASL
                src="https://ushmultimedia.blob.core.windows.net/ushwebsite/AASLWhite.png"
                alt="Asociación Argentina de Servicios Lingüísticos"
              />
              <StyledImgGALA
                src="https://ushmultimedia.blob.core.windows.net/ushwebsite/GALAWhite.png"
                alt="Globalization and localization association"
              />
            </div>
            <div className="d-flex justify-between align-center justify-evenly-mobile">
              <StyledImgELIA
                src="https://ushmultimedia.blob.core.windows.net/ushwebsite/EliaWhite.png"
                alt="European Language Industry Association"
              />
              <StyledImgLast
                src="https://ushmultimedia.blob.core.windows.net/ushwebsite/TinAWhite.png"
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
