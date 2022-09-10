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
  DateContainer,
} from "./BookMeetingComp";
import Success from "./Success";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";
import { isWeekday, handleChange, handleSend } from "./BookMeetingFunc";
// import SelectCountries from "./SelectCountries";

const BookMeeting = () => {
  const [contactForm, setContactForm] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <StyledContainer id="contact">
      {showSuccess && <Success func={setShowSuccess} />} *
      <Container>
        <MediaContainer className="d-flex justify-between">
          <FirstContainer className="d-flex flex-column">
            <h1 className="hero-section-alto-mobile h1-web-sub mb-20-mobile mb-40">
              Book a<CorteDesktop /> meeting!
            </h1>
            <p className="txt-regular-mobile destacado-medium mb-60 mb-20-mobile">
              Tell us what you need and we'll
              <CorteDesktop /> help you
              <CorteMobile /> succeed in new markets.
              <CorteDesktop />
              <CorteMobile /> Here are some questions to guide
              <CorteDesktop />
              <CorteMobile /> your request.
            </p>

            <p className="destacados-italic-mobile destacado-italic mb-20">
              What type of content would you
              <CorteDesktop /> like to
              <CorteMobile /> create or localize?
            </p>
            <p className="destacados-italic-mobile destacado-italic mb-20">
              What is your target audience?
            </p>
            <p className="destacados-italic-mobile destacado-italic mb-40">
              Is your request urgent?
            </p>
          </FirstContainer>
          <SecondContainer className="d-flex flex-column">
            <form>
              <ColumnInput className="d-flex justify-between">
                <ContainerInput className="d-flex flex-column">
                  <label className="label-form">Name *</label>
                  <input
                    value={contactForm.name ? contactForm.name : ""}
                    onChange={(e) =>
                      handleChange(
                        "name",
                        e.target.value,
                        setContactForm,
                        contactForm
                      )
                    }
                    className="input-form txt-destacados-alta-mobile texto-regular"
                  />
                </ContainerInput>
                <ContainerInput className="d-flex flex-column">
                  <label className="label-form">Company Name *</label>
                  <input
                    value={contactForm.company ? contactForm.company : ""}
                    onChange={(e) =>
                      handleChange(
                        "company",
                        e.target.value,
                        setContactForm,
                        contactForm
                      )
                    }
                    className="input-form txt-destacados-alta-mobile texto-regular"
                  />
                </ContainerInput>
              </ColumnInput>
              <ColumnInput className="d-flex justify-between">
                <ContainerInput className="d-flex flex-column">
                  <label className="label-form">E-Mail *</label>
                  <input
                    value={contactForm.mail ? contactForm.mail : ""}
                    onChange={(e) =>
                      handleChange(
                        "mail",
                        e.target.value,
                        setContactForm,
                        contactForm
                      )
                    }
                    className="input-form txt-destacados-alta-mobile texto-regular"
                    type="email"
                  />
                </ContainerInput>
                <ContainerInput className="d-flex flex-column">
                  <label className="label-form">Country *</label>
                  {/* <SelectCountries /> */}
                  {/* <input
                    value={contactForm.country ? contactForm.country : ""}
                    onChange={(e) =>
                      handleChange(
                        "country",
                        e.target.value,
                        setContactForm,
                        contactForm
                      )
                    }
                    className="input-form txt-destacados-alta-mobile texto-regular"
                  /> */}
                </ContainerInput>
              </ColumnInput>
              <DateContainer className="d-flex flex-column mb-30">
                <label className="label-form">Select a date *</label>
                <DatePicker
                  selected={
                    contactForm.date_reunion
                      ? contactForm.date_reunion
                      : new Date()
                  }
                  onChange={(date) => {
                    setContactForm({ ...contactForm, date_reunion: date });
                  }}
                  filterDate={isWeekday}
                  minDate={new Date().setDate(new Date().getDate() + 2)}
                />
              </DateContainer>
              <div className="d-flex flex-column mb-30">
                <label className="label-form">How can we help?</label>
                <textarea
                  value={contactForm.comment ? contactForm.comment : ""}
                  onChange={(e) =>
                    handleChange(
                      "comment",
                      e.target.value,
                      setContactForm,
                      contactForm
                    )
                  }
                  placeholder="Share with us a brief about your request..."
                  className="textarea-form txt-destacados-alta-mobile texto-regular"
                />
              </div>
            </form>

            <Boton
              onClick={() =>
                handleSend(contactForm, setShowSuccess, setContactForm)
              }
            >
              Get in touch
            </Boton>
          </SecondContainer>
        </MediaContainer>
      </Container>
    </StyledContainer>
  );
};

export default BookMeeting;
