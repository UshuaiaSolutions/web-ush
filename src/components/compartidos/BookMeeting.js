import React, { useEffect, useState } from "react";
import Container from "../base/Container";
import { CorteDesktop } from "../base/Cortes";
import {
  StyledContainer,
  MediaContainer,
  FirstContainer,
  SecondContainer,
  ColumnInput,
  ContainerInput,
  DateContainer,
  ErrorMessage,
  Column,
} from "./BookMeetingComp";
import Success from "./Success";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";
import { handleChange, handleSend } from "./BookMeetingFunc";
import SelectCountries from "./SelectCountries";
import { StyledBoton } from "../base/BotonSecundario";
import CheckYes from "../../assets/CheckYes";
import CheckNo from "../../assets/CheckNo";
import { isWorkingDay, minDate } from "./hooks";

const BookMeeting = () => {
  const [contactForm, setContactForm] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [missingFields, setMissingFields] = useState([]);
  const [quiereReu, setQuiereReu] = useState(true);

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showSuccess]);

  useEffect(() => {
    if (showError) {
      const timer = setTimeout(() => {
        setShowError(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showError]);

  return (
    <StyledContainer id="contact">
      <Success showDiv={showSuccess} />
      <Container>
        <MediaContainer className="d-flex justify-between">
          <FirstContainer className="d-flex flex-column">
            <h1 className="h3-mobile h2-web mb-16-mobile mb-40 text-center-mobile">
              Book a meeting!
            </h1>
            <p className="txt-regular-mobile destacado-regular mb-80 mb-20-mobile text-center-mobile">
              Tell us what you need and we'll help you
              <CorteDesktop /> succeed in new markets. Here are some
              <CorteDesktop /> questions to guide your request.
            </p>

            <p className="destacados-italic-mobile destacado-italic mb-30 mb-16-mobile text-center-mobile">
              What type of content would you like
              <CorteDesktop /> to create or localize?
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
                  <label htmlFor="name" className="label-form mb-8">
                    Name *
                  </label>
                  <input
                    name="name"
                    id="name"
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
                  <label htmlFor="company" className="label-form mb-8">
                    Company Name *
                  </label>
                  <input
                    name="company"
                    id="company"
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
                  <label htmlFor="email" className="label-form mb-8">
                    E-Mail *
                  </label>
                  <input
                    name="email"
                    id="email"
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
                  <SelectCountries data={contactForm} func={setContactForm} />
                  {missingFields?.includes("country") && (
                    <ErrorMessage>Wrong input</ErrorMessage>
                  )}
                </ContainerInput>
              </ColumnInput>
              <Column className="d-flex flex-column">
                <label className="label-form mb-8">
                  Would you like to book a meeting?
                </label>
                <div className="d-flex">
                  <div>
                    <label className="label-form">Yes</label>
                    {quiereReu ? (
                      <CheckYes handleClick={() => setQuiereReu(true)} />
                    ) : (
                      <CheckNo handleClick={() => setQuiereReu(true)} />
                    )}
                  </div>
                  <div>
                    <label className="label-form">No</label>
                    {!quiereReu ? (
                      <CheckYes handleClick={() => setQuiereReu(false)} />
                    ) : (
                      <CheckNo handleClick={() => setQuiereReu(false)} />
                    )}
                  </div>
                </div>
              </Column>
              {quiereReu && (
                <DateContainer className="d-flex flex-column mb-16-mobile">
                  <label htmlFor="date" className="label-form mb-8">
                    Select a date *
                  </label>
                  <DatePicker
                    name="date"
                    id="date"
                    selected={
                      contactForm.date_reunion ? contactForm.date_reunion : null
                    }
                    onChange={(date) => {
                      setContactForm({ ...contactForm, date_reunion: date });
                    }}
                    minDate={minDate}
                    filterDate={isWorkingDay}
                    dateFormat="dd/MM/yyyy"
                    className="input-date"
                  />
                  {missingFields?.includes("date_reunion") && (
                    <ErrorMessage>Wrong input</ErrorMessage>
                  )}
                </DateContainer>
              )}
              <div className="d-flex flex-column mb-30 mb-25-mobile">
                <label htmlFor="comment" className="label-form mb-8">
                  How can we help?
                </label>
                <textarea
                  name="comment"
                  id="comment"
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

            <StyledBoton
              onClick={() => {
                handleSend(
                  contactForm,
                  setShowSuccess,
                  setShowError,
                  setContactForm,
                  setMissingFields,
                  quiereReu
                );
              }}
            >
              Get in touch
            </StyledBoton>
          </SecondContainer>
        </MediaContainer>
      </Container>
    </StyledContainer>
  );
};

export default BookMeeting;
