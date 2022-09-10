import React from "react";
import Container from "../base/Container";
import { CorteDesktop, CorteMobile } from "../base/Cortes";
import {
  StyledContainer,
  StyledImgAASL,
  StyledImgGALA,
  StyledImgELIA,
  StyledImgLast,
  Content,
} from "./MembershipsComp";

function Memberships() {
  return (
    <StyledContainer>
      <Container>
        <Content>
          <div className="d-flex flex-column justify-center corte-exacto-medio">
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
          <div className="d-flex flex-column content-images">
            <div className="d-flex justify-evenly mb-20-mobile mb-40">
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
