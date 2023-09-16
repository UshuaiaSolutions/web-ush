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
  DateContainer,
  ErrorMessage,
} from "./BookMeetingComp";
import Success from "./Success";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";
import { isWeekday, handleChange, handleSend } from "./BookMeetingFunc";
import SelectCountries from "./SelectCountries";
import BotonSecundario from "../base/BotonSecundario";

const BookMeeting = () => {
  const [contactForm, setContactForm] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [missingFields, setMissingFields] = useState([]);

  return (
    <StyledContainer id="contact">
      {showSuccess && <Success func={setShowSuccess} />}
      <Container>
        <MediaContainer className="d-flex justify-between">
          <FirstContainer className="d-flex flex-column">
            <h1 className="h3-mobile h2-web mb-16-mobile mb-40 text-center-mobile">
              Book a meeting!
            </h1>
            <p className="txt-regular-mobile destacado-regular mb-80 mb-20-mobile text-center-mobile">
              Tell us what you need and we'll help you
              <CorteDesktop />
              <CorteMobile /> succeed in new markets.
              <CorteMobile /> Here are some
              <CorteDesktop /> questions to guide
              <CorteMobile /> your request.
            </p>

            <p className="destacados-italic-mobile destacado-italic mb-30 mb-16-mobile text-center-mobile">
              What type of content would you like
              <CorteDesktop /> to
              <CorteMobile /> create or localize?
            </p>
            <p className="destacados-italic-mobile destacado-italic mb-30 mb-16-mobile text-center-mobile">
              What is your target audience?
            </p>
            <p className="destacados-italic-mobile destacado-italic mb-40 mb-25-mobile text-center-mobile">
              Is your request urgent?
            </p>
          </FirstContainer>
          <SecondContainer className="d-flex flex-column">
            <form>
              <ColumnInput className="d-flex justify-between">
                <ContainerInput className="d-flex flex-column">
                  <label className="label-form mb-8">Name *</label>
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
                  {missingFields?.includes("name") && (
                    <ErrorMessage>Wrong input</ErrorMessage>
                  )}
                </ContainerInput>
                <ContainerInput className="d-flex flex-column">
                  <label className="label-form mb-8">Company Name *</label>
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
                  {missingFields?.includes("company") && (
                    <ErrorMessage>Wrong input</ErrorMessage>
                  )}
                </ContainerInput>
              </ColumnInput>
              <ColumnInput className="d-flex justify-between">
                <ContainerInput className="d-flex flex-column">
                  <label className="label-form mb-8">E-Mail *</label>
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
                  {missingFields?.includes("mail") && (
                    <ErrorMessage>Wrong input</ErrorMessage>
                  )}
                </ContainerInput>
                <ContainerInput className="d-flex flex-column">
                  <label className="label-form mb-8">Country *</label>
                  <SelectCountries data={contactForm} func={setContactForm} />
                  {missingFields?.includes("country") && (
                    <ErrorMessage>Wrong input</ErrorMessage>
                  )}
                </ContainerInput>
              </ColumnInput>
              <DateContainer className="d-flex flex-column mb-30 mb-16-mobile">
                <label className="label-form mb-8">Select a date *</label>
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
                {missingFields?.includes("date_reunion") && (
                  <ErrorMessage>Wrong input</ErrorMessage>
                )}
              </DateContainer>
              <div className="d-flex flex-column mb-30 mb-25-mobile">
                <label className="label-form mb-8">How can we help?</label>
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

            <BotonSecundario
              onClick={() =>
                handleSend(
                  contactForm,
                  setShowSuccess,
                  setContactForm,
                  setMissingFields
                )
              }
            >
              Get in touch
            </BotonSecundario>
          </SecondContainer>
        </MediaContainer>
      </Container>
    </StyledContainer>
  );
};

export default BookMeeting;
