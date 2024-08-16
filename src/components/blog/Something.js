import React, { useContext } from "react";

import { StyledContainer, ImgDesktop, ImgMobile } from "./SomethingComp";
import { useTheme } from "styled-components";
import imgDKClaro from "../../assets/Blog/desktop-claro.jpg";
import imgDKOscuro from "../../assets/Blog/desktop-oscuro.jpg";
import imgMBClaro from "../../assets/Blog/mobile-claro.jpg";
import imgMBOscuro from "../../assets/Blog/mobile-oscuro.jpg";
import { TranslationContext } from "../../assets/Translations/TranslationsProvider";
import Translator from "../../assets/Translations/Translator";

function Something() {
  const theme = useTheme();

  const { text } = useContext(TranslationContext);

  return (
    <StyledContainer>
      <h3 className="text-center h3-mobile h3-web mb-32 mb-16-mobile">
        <Translator text={text.BLOG.SOCIAL} />
      </h3>
      <a
        href="https://www.instagram.com/ushuaiasolutions/"
        target="_blank"
        rel="noreferrer"
      >
        <ImgDesktop
          src={theme.nombre === "light" ? imgDKClaro : imgDKOscuro}
          alt="Instagram feed of Ushuaia Solutions. By clicking on the image, you will be redirected to the Instagram account."
        />
        <ImgMobile
          src={theme.nombre === "light" ? imgMBClaro : imgMBOscuro}
          alt="Instagram feed of Ushuaia Solutions. By clicking on the image, you will be redirected to the Instagram account."
        />
      </a>
    </StyledContainer>
  );
}

export default Something;
