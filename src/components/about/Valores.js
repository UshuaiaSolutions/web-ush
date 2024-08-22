import React, { useContext } from "react";
import Container from "../base/Container";
import { Content, Card, StyledContainer } from "./ValoresComp";
import Innovation from "../../assets/Valores/Innovation";
import Reliability from "../../assets/Valores/Reliability";
import Learning from "../../assets/Valores/Learning";
import Teamwork from "../../assets/Valores/Teamwork";
import Empathy from "../../assets/Valores/Empathy";
import { TranslationContext } from "../../assets/Translations/TranslationsProvider";
import { CorteDesktop, CorteMobile } from "../base/Cortes";

function Valores() {
  const { text } = useContext(TranslationContext);

  return (
    <StyledContainer>
      <Container>
        <h2 className="h2-web h3-mobile text-center mb-80 mb-25-mobile">
          {text.ABOUT.VALUES.VALUES}
        </h2>
        <Content>
          <Card>
            <Innovation />
            <span className="texto-regular mt-10 txt-mobile mt-5-mobile text-center">
              {text.ABOUT.VALUES.INNOVATION}
            </span>
          </Card>
          <Card>
            <Reliability />
            <span className="texto-regular mt-10 txt-mobile mt-5-mobile text-center">
              {text.ABOUT.VALUES.RELIABILITY}
            </span>
          </Card>
          <Card>
            <Learning />
            <span className="texto-regular mt-10 txt-mobile mt-5-mobile text-center">
              {text.ABOUT.VALUES.CONTINUOS}
              <CorteDesktop />
              <CorteMobile /> {text.ABOUT.VALUES.LEARNING}
            </span>
          </Card>
          <Card>
            <Teamwork />
            <span className="texto-regular mt-10 txt-mobile mt-5-mobile text-center">
              {text.ABOUT.VALUES.TEAMWORK}
            </span>
          </Card>
          <Card>
            <Empathy />
            <span className="texto-regular mt-10 txt-mobile mt-5-mobile text-center">
              {text.ABOUT.VALUES.EMPATHY}
            </span>
          </Card>
        </Content>
      </Container>
    </StyledContainer>
  );
}

export default Valores;
