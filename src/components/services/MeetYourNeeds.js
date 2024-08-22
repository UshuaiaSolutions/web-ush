import React, { useContext } from "react";
import Container from "../base/Container";
import { StyledContainer } from "./MeetYourNeedsComp";
import Ondas from "../../assets/Ondas";
import { TranslationContext } from "../../assets/Translations/TranslationsProvider";
import Translator from "../../assets/Translations/Translator";

function MeetYourNeeds() {
  const { text } = useContext(TranslationContext);

  return (
    <Container>
      <StyledContainer>
        <h2 className="h1-web h1-mobile mb-16-mobile mb-50 text-center-mobile w-50-desktop">
          <Translator text={text.SERVICES.HERO.TITULO} />
        </h2>
        <p className="txt-regular-mobile destacado-regular mb-32-mobile mb-40 text-center-mobile w-50-desktop">
          <Translator text={text.SERVICES.HERO.BAJADA} />
        </p>
      </StyledContainer>
      <Ondas />
    </Container>
  );
}

export default MeetYourNeeds;
