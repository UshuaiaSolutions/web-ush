import React from "react";
import { CorteDesktop, CorteMobile } from "../base/Cortes";
import { Fondo, Container, Close } from "./SuccessComp";

const Success = ({ func }) => {
  return (
    <>
      <Fondo onClick={() => func(false)} />
      <Container>
        <Close src="/icons/Toggle.png" onClick={() => func(false)} />
        <h2 className="h2-web h3-mobile mb-30 mb-30-mobile">Thank you!</h2>
        <h3 className="destacado-bold destacados-semibold-mobile mb-30 mb-30-mobile text-center-mobile">
          Your request
          <CorteMobile /> has been successfully sent.
        </h3>
        <p className="text-center text-center-mobile texto-regular txt-minimo-mobile">
          You'll be quickly contacted by a member
          <CorteMobile /> of the USHteam.
          <CorteDesktop /> If you don't see our
          <CorteMobile /> response, please check your Spam
          <CorteDesktop />
          <CorteMobile /> or Junk email folders.
        </p>
      </Container>
    </>
  );
};

export default Success;
