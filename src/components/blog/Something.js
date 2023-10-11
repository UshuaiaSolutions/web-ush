import React from "react";

import { StyledContainer, ImgDesktop, ImgMobile } from "./SomethingComp";
import { CorteMobile } from "../base/Cortes";
import { useTheme } from "styled-components";
import imgDKClaro from "../../assets/Blog/desktop-claro.png";
import imgDKOscuro from "../../assets/Blog/desktop-oscuro.png";
import imgMBClaro from "../../assets/Blog/mobile-claro.png";
import imgMBOscuro from "../../assets/Blog/mobile-oscuro.png";

function Something() {
  const theme = useTheme();

  return (
    <StyledContainer>
      <h3 className="text-center h3-mobile h3-web mb-32 mb-16-mobile">
        While you wait,
        <CorteMobile /> follow us on social media
      </h3>
      <a
        href="https://www.instagram.com/ushuaiasolutions/"
        target="_blank"
        rel="noreferrer"
      >
        <ImgDesktop
          src={theme.nombre === "light" ? imgDKClaro : imgDKOscuro}
          alt=""
        />
        <ImgMobile
          src={theme.nombre === "light" ? imgMBClaro : imgMBOscuro}
          alt=""
        />
      </a>
    </StyledContainer>
  );
}

export default Something;
