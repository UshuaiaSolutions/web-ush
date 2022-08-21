import React from "react";
import styled from "styled-components";
import BotonSecundario from "./base/BotonSecundario";
import Container from "./base/Container";
import { CorteDesktop, CorteMobile } from "./base/Cortes";

const StyledContainer = styled.div`
  background: ${(props) => props.theme.rosaush};
  width: 100%;
  padding: 60px 0;

  @media (min-width: 1025px) {
    padding: 90px 0;
  }

  @media (min-width: 1500px) {
    padding: 100px 0;
  }
`;

const MediaContainer = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FirstContainer = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SecondContainer = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ContainerInput = styled.div`
  width: 48%;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

const ColumnInput = styled.div`
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 0;
  }
`;

function BookMeeting() {
  return (
    <StyledContainer>
      <Container>
        <MediaContainer className="d-flex justify-between">
          <FirstContainer className="d-flex flex-column">
            <h1 className="hero-section-alto-mobile h1-web-sub mb-20-mobile mb-40">
              Book a<CorteDesktop /> meeting!
            </h1>
            <p className="txt-destacados-alta-mobile destacado-medium mb-60 mb-20-mobile">
              Constructing a brief could be a<CorteDesktop /> difficult
              <CorteMobile /> task. Here are some
              <CorteDesktop /> questions to guide
              <CorteMobile /> your request.
            </p>

            <p className="txt-destacados-alta-mobile destacado-italic mb-20">
              What services are you looking for?
            </p>
            <p className="txt-destacados-alta-mobile destacado-italic mb-20">
              What languages do you need
              <CorteMobile /> us <CorteDesktop /> to work with?
            </p>
            <p className="txt-destacados-alta-mobile destacado-italic mb-40">
              Is your request urgent?
              <CorteMobile />
              <CorteDesktop /> When do you need it?
            </p>
          </FirstContainer>
          <SecondContainer className="d-flex flex-column">
            <form>
              <ColumnInput className="d-flex justify-between">
                <ContainerInput className="d-flex flex-column">
                  <label className="label-form">Name *</label>
                  <input className="input-form txt-destacados-alta-mobile texto-regular" />
                </ContainerInput>
                <ContainerInput className="d-flex flex-column">
                  <label className="label-form">
                    Organization / Company Name *
                  </label>
                  <input className="input-form txt-destacados-alta-mobile texto-regular" />
                </ContainerInput>
              </ColumnInput>
              <ColumnInput className="d-flex justify-between">
                <ContainerInput className="d-flex flex-column">
                  <label className="label-form">E-Mail *</label>
                  <input
                    className="input-form txt-destacados-alta-mobile texto-regular"
                    type="email"
                  />
                </ContainerInput>
                <ContainerInput className="d-flex flex-column">
                  <label className="label-form">Country</label>
                  <input className="input-form txt-destacados-alta-mobile texto-regular" />
                </ContainerInput>
              </ColumnInput>
              <div className="d-flex flex-column mb-30">
                <label className="label-form">Select a date</label>
                <input
                  type="date"
                  className="input-form txt-destacados-alta-mobile texto-regular"
                />
              </div>
              <div className="d-flex flex-column mb-30">
                <label className="label-form">How can we help?</label>
                <textarea
                  placeholder="Share with us a brief about your request..."
                  className="textarea-form txt-destacados-alta-mobile texto-regular"
                />
              </div>
            </form>

            <BotonSecundario>Get in touch</BotonSecundario>
          </SecondContainer>
        </MediaContainer>
      </Container>
    </StyledContainer>
  );
}

export default BookMeeting;
