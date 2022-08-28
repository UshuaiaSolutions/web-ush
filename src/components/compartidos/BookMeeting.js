import React, { useState } from "react";
import Container from "../base/Container";
import { CorteDesktop, CorteMobile } from "../base/Cortes";
import {
  StyledContainer,
  MediaContainer,
  FirstContainer,
  SecondContainer,
  ColumnInput,
  ContainerInput,
  Boton,
} from "./BookMeetingComp";
import Success from "./Success";

const BookMeeting = () => {
  const [contactForm, setContactForm] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (id, value) => {
    setContactForm({ ...contactForm, [id]: value });
  };

  const handleSend = () => {
    if (
      contactForm.name &&
      contactForm.name.length > 0 &&
      contactForm.mail &&
      contactForm.mail.length > 0 &&
      contactForm.country &&
      contactForm.country.length > 0 &&
      contactForm.company &&
      contactForm.company.length > 0 &&
      contactForm.date_reunion &&
      contactForm.date_reunion.length > 0
    ) {
      setShowSuccess(true);
      setContactForm({});
    }
  };

  return (
    <StyledContainer id="contact">
      {showSuccess && <Success func={setShowSuccess} />}
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
                  <input
                    value={contactForm.name ? contactForm.name : ""}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className="input-form txt-destacados-alta-mobile texto-regular"
                  />
                </ContainerInput>
                <ContainerInput className="d-flex flex-column">
                  <label className="label-form">Company Name *</label>
                  <input
                    value={contactForm.company ? contactForm.company : ""}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className="input-form txt-destacados-alta-mobile texto-regular"
                  />
                </ContainerInput>
              </ColumnInput>
              <ColumnInput className="d-flex justify-between">
                <ContainerInput className="d-flex flex-column">
                  <label className="label-form">E-Mail *</label>
                  <input
                    value={contactForm.mail ? contactForm.mail : ""}
                    onChange={(e) => handleChange("mail", e.target.value)}
                    className="input-form txt-destacados-alta-mobile texto-regular"
                    type="email"
                  />
                </ContainerInput>
                <ContainerInput className="d-flex flex-column">
                  <label className="label-form">Country *</label>
                  <input
                    value={contactForm.country ? contactForm.country : ""}
                    onChange={(e) => handleChange("country", e.target.value)}
                    className="input-form txt-destacados-alta-mobile texto-regular"
                  />
                </ContainerInput>
              </ColumnInput>
              <ColumnInput className="d-flex justify-between">
                <ContainerInput className="d-flex flex-column">
                  <label className="label-form">Select a date *</label>
                  <input
                    value={
                      contactForm.date_reunion ? contactForm.date_reunion : ""
                    }
                    onChange={(e) =>
                      handleChange("date_reunion", e.target.value)
                    }
                    type="date"
                    className="input-form txt-destacados-alta-mobile texto-regular"
                  />
                </ContainerInput>
              </ColumnInput>
              <div className="d-flex flex-column mb-30">
                <label className="label-form">How can we help?</label>
                <textarea
                  value={contactForm.comment ? contactForm.comment : ""}
                  onChange={(e) => handleChange("comment", e.target.value)}
                  placeholder="Share with us a brief about your request..."
                  className="textarea-form txt-destacados-alta-mobile texto-regular"
                />
              </div>
            </form>

            <Boton onClick={() => handleSend()}>Get in touch</Boton>
          </SecondContainer>
        </MediaContainer>
      </Container>
    </StyledContainer>
  );
};

export default BookMeeting;
