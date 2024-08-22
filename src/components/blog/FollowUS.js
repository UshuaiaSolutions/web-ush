import React, { useContext } from "react";
import Circulos from "../../assets/Blog/Circulos";
import { Container } from "./FollowUSComp";
import CirculoMobile from "../../assets/Blog/CirculoMobile";
import Translator from "../../assets/Translations/Translator";
import { TranslationContext } from "../../assets/Translations/TranslationsProvider";

function FollowUS() {
  const { text } = useContext(TranslationContext);

  return (
    <Container>
      <CirculoMobile />
      <div className="w-60-desktop">
        <h2 className="h2-web mb-60 text-center-mobile mb-16-mobile h1-mobile">
          <Translator text={text.BLOG.HERO.TITULO} />
        </h2>
        <p className="destacado-regular text-center-mobile txt-regular-mobile">
          <Translator text={text.BLOG.HERO.BAJADA} />
        </p>
      </div>
      <Circulos />
    </Container>
  );
}

export default FollowUS;
