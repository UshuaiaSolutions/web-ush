import React from "react";
import { Link } from "react-router-dom";
import BotonSecundario from "../base/BotonSecundario";
import Container from "../base/Container";
import { CorteDesktop, CorteMobile } from "../base/Cortes";
import { StyledContainer, Content, Reverse, Areas } from "./WhyUSHComp";

function WhyUSH() {
  return (
    <StyledContainer>
      <Container>
        <Content>
          <div className="corte-exacto-desktop-medio">
            <h2 className="h2-web h2-mobile mb-40 mb-0-mobile">Why USH?</h2>

            <Reverse>
              <Areas>
                <p className="extra-dest-mobile h3-mayus resaltado-underline resaltado-underline-mobile mb-20">
                  Experience
                </p>
                <p className="extra-dest-mobile h3-mayus resaltado-underline resaltado-underline-mobile mb-20">
                  Innovation
                </p>
                <p className="extra-dest-mobile h3-mayus resaltado-underline resaltado-underline-mobile mb-40">
                  Team work
                </p>
              </Areas>

              <p className="txt-regular-mobile destacado-regular mb-40 text-center-mobile">
                We are there where you need us, when you
                <CorteDesktop />
                <CorteMobile /> need us. We offer a unique combination of
                <CorteDesktop />
                <CorteMobile /> technological innovation and professional
                <CorteDesktop />
                <CorteMobile /> expertise to help you solve multilingual
                <CorteDesktop />
                <CorteMobile /> challenges. Plus, we encourage positive
                <CorteDesktop />
                <CorteMobile /> leadership to motivate our talented
                <CorteDesktop />
                <CorteMobile /> professionals to work together as one.
              </p>
            </Reverse>
          </div>
        </Content>
      </Container>
    </StyledContainer>
  );
}

export default WhyUSH;
