import React from "react";
import BotonPrincipal from "../base/BotonPrincipal";
import Container from "../base/Container";
import { CorteDesktop, CorteMobile } from "../base/Cortes";
import {
  StyledContainer,
  MediaContainer,
  FirstContainer,
  SecondContainer,
  ColumnInput,
  ContainerInput,
} from "./BookMeetingComp";

const BookMeeting = () => {
  return (
    <StyledContainer id="contact">
      <Container>
        <MediaContainer className="d-flex justify-between">
          <FirstContainer className="d-flex flex-column">
            <h1 className="hero-section-alto-mobile h1-web-sub mb-20-mobile mb-40">
              Book a<CorteDesktop /> meeting!
            </h1>
            <p className="destacados-semibold-mobile destacado-medium mb-60 mb-20-mobile">
              Constructing a brief could be a<CorteDesktop /> difficult
              <CorteMobile /> task. Here are some
              <CorteDesktop /> questions to guide
              <CorteMobile /> your request.
            </p>

            <p className="destacados-italic-mobile destacado-italic mb-20">
              What services are you looking for?
            </p>
            <p className="destacados-italic-mobile destacado-italic mb-20">
              What languages do you need
              <CorteMobile /> us <CorteDesktop /> to work with?
            </p>
            <p className="destacados-italic-mobile destacado-italic mb-40">
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
                  <label className="label-form">Company Name *</label>
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
                  <label className="label-form">Country *</label>
                  <input className="input-form txt-destacados-alta-mobile texto-regular" />
                </ContainerInput>
              </ColumnInput>
              <ColumnInput className="d-flex justify-between">
                <ContainerInput className="d-flex flex-column">
                  <label className="label-form">Select a date *</label>
                  <input
                    type="date"
                    className="input-form txt-destacados-alta-mobile texto-regular"
                  />
                </ContainerInput>
              </ColumnInput>
              <div className="d-flex flex-column mb-30">
                <label className="label-form">How can we help?</label>
                <textarea
                  placeholder="Share with us a brief about your request..."
                  className="textarea-form txt-destacados-alta-mobile texto-regular"
                />
              </div>
            </form>

            <BotonPrincipal>Get in touch</BotonPrincipal>
          </SecondContainer>
        </MediaContainer>
      </Container>
    </StyledContainer>
  );
};

export default BookMeeting;
