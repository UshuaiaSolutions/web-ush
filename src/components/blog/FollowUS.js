import React from "react";
import { CorteDesktop, CorteMobile } from "../base/Cortes";
import Circulos from "../../assets/Blog/Circulos";
import { Container } from "./FollowUSComp";
import CirculoMobile from "../../assets/Blog/CirculoMobile";

function FollowUS() {
  return (
    <Container>
      <CirculoMobile />
      <div>
        <h2 className="h2-web mb-60 text-center-mobile mb-16-mobile h1-mobile">
          Something awesome is
          <CorteDesktop /> coming soon!
        </h2>
        <p className="destacado-regular text-center-mobile txt-regular-mobile">
          We're currently working on a blog section
          <CorteMobile /> where you'll be
          <CorteDesktop /> able to see the latest news
          <CorteMobile /> of the localization industry.
          <CorteDesktop /> If you're a linguist,
          <CorteMobile /> graphic designer, IT specialist, writer
          <CorteDesktop /> or video
          <CorteMobile /> editor, stay tuned to discover webinars,
          <CorteDesktop />
          <CorteMobile /> job opportunities and more.
        </p>
      </div>
      <Circulos />
    </Container>
  );
}

export default FollowUS;
