import React from "react";
import { CorteDesktop, CorteMobile } from "../base/Cortes";
import Circulos from "../../assets/Blog/Circulos";
import { Container } from "./FollowUSComp";

function FollowUS() {
  return (
    <Container>
      <div>
        <h2 className="h2-web mb-60">
          Something awesome is
          <CorteDesktop /> coming soon!
        </h2>
        <p className="destacado-regular">
          We're currently working on a blog section where you'll be
          <CorteDesktop /> able to see the latest news of the localization
          industry.
          <CorteDesktop /> If you're a linguist, graphic designer, IT
          specialist, writer
          <CorteDesktop /> or video editor, stay tuned to discover webinars,
          <CorteDesktop /> job opportunities and more.
        </p>
      </div>
      <Circulos />
    </Container>
  );
}

export default FollowUS;
