import React, { useContext } from "react";
import "../../styles/slider.css";
import Container from "../base/Container";
import BotonSecundario from "../base/BotonSecundario";
import { Link } from "react-router-dom";
import { StyledContainer, Content } from "./BringingTogetherComp";
import Mundo from "../../assets/Mundo";
import MundoMB from "../../assets/MundoMB";
import Translator from "../../assets/Translations/Translator";
import { TranslationContext } from "../../assets/Translations/TranslationsProvider";

function BringingTogether() {
  const { text } = useContext(TranslationContext);

  return (
    <StyledContainer>
      <Container>
        <div className="container-content">
          <Content className="w-50-desktop">
            <h2 className="h3-mobile h2-web mb-16-mobile mb-32 text-center-mobile">
              <Translator text={text.HOME.BRINGING_TOGETHER.TITLE} />
            </h2>
            <MundoMB />
            <p className="txt-regular-mobile destacado-regular mb-16-mobile mb-32 text-center-mobile">
              <Translator text={text.HOME.BRINGING_TOGETHER.BAJADA} />
            </p>
            <Link to="/expertise">
              <BotonSecundario>
                {text.HOME.BRINGING_TOGETHER.BUTTON}
              </BotonSecundario>
            </Link>
          </Content>
          <Mundo />
        </div>
      </Container>
    </StyledContainer>
  );
}

export default BringingTogether;
