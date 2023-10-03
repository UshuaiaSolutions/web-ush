import React from "react";
import Container from "../base/Container";
import { CorteDesktop, CorteMobile } from "../base/Cortes";
import { StyledContainer, Column, Row, RowContainer } from "./HowWeCanComp";
import Uno from "../../assets/Numeros/Uno";
import Dos from "../../assets/Numeros/Dos";
import Tres from "../../assets/Numeros/Tres";
import Cuatro from "../../assets/Numeros/Cuatro";

import EstrellaRosa from "../../assets/Numeros/EstrellaRosa";
import EstrellaVerde from "../../assets/Numeros/EstrellaVerde";
import EstrellaAmarilla from "../../assets/Numeros/EstrellaAmarilla";
import EstrellaVioleta from "../../assets/Numeros/EstrellaVioleta";

function HowWeCan() {
  return (
    <Container>
      <StyledContainer>
        <RowContainer className="mb-40">
          <Column>
            <Row>
              <Uno />
              <h3 className="h2-web h3-mobile">
                You tell us
                <CorteDesktop /> your goals
              </h3>
            </Row>
            <span className="destacado-regular txt-regular-mobile mt-16-mobile mt-25">
              Easier said than done? We can help you
              <CorteMobile /> reach your community
              <CorteDesktop /> with services
              <CorteMobile /> ranging from multilingual copywriting,
              <CorteMobile /> translation
              <CorteDesktop /> and transcreation to
              <CorteMobile /> engaging video content and e-learning
              <CorteMobile /> initiatives
              <CorteDesktop /> to cover the language needs
              <CorteMobile /> of your international team.
            </span>
          </Column>
          <EstrellaRosa />
        </RowContainer>
        <RowContainer className="mb-40">
          <EstrellaVerde />
          <Column>
            <Row>
              <h3 className="h2-web h3-mobile">
                We agree
                <CorteDesktop /> on a work plan
              </h3>
              <Dos />
            </Row>
            <span className="destacado-regular txt-regular-mobile mt-16-mobile mt-25">
              Project-based, or on-going service,
              <CorteMobile /> customized and automated
              <CorteDesktop /> as needed,
              <CorteMobile /> using the latest language and content
              <CorteMobile /> technologies,
              <CorteDesktop /> we agree on what needs
              <CorteMobile /> to be done.
            </span>
          </Column>
        </RowContainer>
        <RowContainer className="mb-40">
          <Column>
            <Row>
              <Tres />
              <h3 className="h2-web h3-mobile">
                You leverage our
                <CorteDesktop /> multidisciplinary team
              </h3>
            </Row>
            <span className="destacado-regular txt-regular-mobile mt-16-mobile mt-25">
              You'll get access to a managed team
              <CorteMobile /> of translators, writers,
              <CorteDesktop /> designers and
              <CorteMobile /> creative minds that will work closely
              <CorteMobile /> with your own
              <CorteDesktop /> teams to provide
              <CorteMobile /> language and content services
              <CorteMobile /> as you need them.
            </span>
          </Column>
          <EstrellaAmarilla />
        </RowContainer>
        <RowContainer className="">
          <EstrellaVioleta />
          <Column>
            <Row>
              <h3 className="h2-web h3-mobile">
                We set new
                <CorteMobile />
                <CorteDesktop /> goals together
              </h3>
              <Cuatro />
            </Row>
            <span className="destacado-regular txt-regular-mobile mt-16-mobile mt-25">
              We ensure that our services meet high
              <CorteMobile /> quality standards and are
              <CorteDesktop /> delivered
              <CorteMobile /> on time at competitive rates. After initial
              <CorteMobile /> delivery,
              <CorteDesktop /> we work closely with your team
              <CorteMobile /> to make sure the content helps you
              <CorteDesktop />
              <CorteMobile /> expand your global potential!
            </span>
          </Column>
        </RowContainer>
      </StyledContainer>
    </Container>
  );
}

export default HowWeCan;
