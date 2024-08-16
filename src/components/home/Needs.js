import React, { useContext } from "react";
import Container from "../base/Container";
import { StyledContainer } from "../services/HowWeCanComp";
import { Column, ContentDesktop, Row } from "./NeedsComp";
import IlustracionNeeds from "../../assets/Ilustracion-Needs";
import { Link } from "react-router-dom";
import BotonSecundario from "../base/BotonSecundario";
import Translator from "../../assets/Translations/Translator";
import { TranslationContext } from "../../assets/Translations/TranslationsProvider";

function Needs() {
  const { text } = useContext(TranslationContext);

  return (
    <StyledContainer>
      <Container>
        <ContentDesktop>
          <div>
            <h1 className="h3-mobile h2-web mb-16-mobile mb-32 text-center-mobile">
              <Translator text={text.HOME.MEET_YOUR_NEEDS.TITLE} />
            </h1>
            <p className="txt-regular-mobile destacado-regular mb-40-mobile mb-32 text-center-mobile">
              <Translator text={text.HOME.MEET_YOUR_NEEDS.BAJADA} />
            </p>
            <IlustracionNeeds />
          </div>
          {/* <div className="desktop-chico-exacto">  */}
          <div className="">
            <Column>
              <h3 className="body-bold-mobile  h3-web mb-16-mobile mb-32">
                01/&ensp;&ensp;
                {text.HOME.MEET_YOUR_NEEDS.FIRST.TITLE}
              </h3>
              <Row>
                <p className="w-100 txt-regular-mobile destacado-regular mb-0-mobile mb-32">
                  <Translator text={text.HOME.MEET_YOUR_NEEDS.FIRST.BAJADA} />
                </p>
              </Row>
              <Link to="/about">
                <BotonSecundario>
                  {text.HOME.MEET_YOUR_NEEDS.FIRST.BUTTON}
                </BotonSecundario>
              </Link>
            </Column>
            <Column>
              <h4 className="body-bold-mobile h3-web mb-16-mobile mb-32">
                02/&ensp;&ensp;{text.HOME.MEET_YOUR_NEEDS.SECOND.TITLE}
              </h4>
              <Row>
                <p className="w-100 txt-regular-mobile destacado-regular mb-0-mobile mb-32">
                  <Translator text={text.HOME.MEET_YOUR_NEEDS.SECOND.BAJADA} />
                </p>
              </Row>
              <Link to="/about">
                <BotonSecundario>
                  {text.HOME.MEET_YOUR_NEEDS.FIRST.BUTTON}
                </BotonSecundario>
              </Link>
            </Column>
            <Column>
              <h5 className="body-bold-mobile  h3-web mb-16-mobile mb-32">
                03/&ensp;&ensp;{text.HOME.MEET_YOUR_NEEDS.THIRD.TITLE}
              </h5>
              <Row>
                <p className="w-100 txt-regular-mobile destacado-regular mb-0-mobile mb-32">
                  <Translator text={text.HOME.MEET_YOUR_NEEDS.THIRD.BAJADA} />
                </p>
              </Row>
              <Link to="/about">
                <BotonSecundario>
                  {text.HOME.MEET_YOUR_NEEDS.FIRST.BUTTON}
                </BotonSecundario>
              </Link>
            </Column>
          </div>
        </ContentDesktop>
      </Container>
    </StyledContainer>
  );
}

export default Needs;
