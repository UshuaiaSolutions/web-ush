import React from "react";
import { Background, Content } from "../../components/nomatch/StyledComponents";
import { CorteDesktop, CorteMobile } from "../../components/base/Cortes";

const NoMatch = () => {
  return (
    <Background>
      <Content>
        <div>
          <h1 className="hero-section-titles-mobile h1-web mb-30">
            Houston,
            <br />{" "}
            <u className="hero-section-alto-mobile  h1-web">
              we have a problem
            </u>
            .
          </h1>
          <p className="destacado-medium h2-mobile">
            Oops! Something's wrong. <CorteDesktop />
            <CorteMobile /> The page you're looking for can't be
            <CorteDesktop />
            <CorteMobile /> found. Please go back to
            <CorteDesktop />
            <CorteMobile /> homepage.
          </p>
        </div>
        <img
          src="https://ushmultimedia.blob.core.windows.net/ushwebsite/404notfoundMob.png"
          className="mobile-404"
          alt="Not found"
        />
      </Content>
      <img
        src="https://ushmultimedia.blob.core.windows.net/ushwebsite/404notfound.png"
        alt="Not found"
        className="desktop-404"
      />
    </Background>
  );
};

export default NoMatch;
