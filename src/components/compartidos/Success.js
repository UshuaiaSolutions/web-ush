import React from "react";
import { CorteDesktop, CorteMobile } from "../base/Cortes";
import { Fondo, Container, Close, Img } from "./SuccessComp";

const Success = ({ func }) => {
  return (
    <>
      <Fondo onClick={() => func(false)} />
      <Container>
        <Close
          src="https://ushmultimedia.blob.core.windows.net/ushwebsite/Closeicon.png"
          onClick={() => func(false)}
        />
        <Img
          src="https://ushmultimedia.blob.core.windows.net/ushwebsite/SmileIcon.png"
          alt="Smiley face"
        />
        <h2 className="h2-web h3-mobile mb-30 mb-30-mobile">Thank you!</h2>
        <h3 className="destacado-bold destacados-semibold-mobile mb-30 mb-30-mobile text-center-mobile">
          Your request
          <CorteMobile /> has been successfully sent.
        </h3>
        <p className="text-center text-center-mobile texto-regular txt-minimo-mobile">
          You'll be quickly contacted by a member of the USHteam.
          <CorteDesktop /> If you don't see our response, please check your Spam
          <CorteDesktop /> or Junk email folders.
        </p>
      </Container>
    </>
  );
};

export default Success;
