import React from "react";
import { Background, Content } from "../../components/nomatch/StyledComponents";
import { CorteDesktop, CorteMobile } from "../../components/base/Cortes";

const NoMatch = () => {
  return (
    <Background>
      <Content>
        <div>
          <h1 className="hero-section-titles-mobile hero-section-alto-mobile h1-web mb-30">
            We are building
            <br /> something for you
          </h1>
          <p className="destacado-medium h1-mobile">
            Our website is currently under
            <CorteDesktop /> construction.
            <CorteMobile /> We should be back
            <CorteDesktop /> shortly.
            <CorteMobile /> Drop by again soon!
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
