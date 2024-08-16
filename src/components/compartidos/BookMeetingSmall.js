import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Container from "../base/Container";
import { StyledContainer, Column, Content } from "./BookMeetingSmallComp";
import BotonSecundario from "../base/BotonSecundario";
import { TranslationContext } from "../../assets/Translations/TranslationsProvider";
import Translator from "../../assets/Translations/Translator";

function BookMeetingSmall() {
  const { text } = useContext(TranslationContext);

  return (
    <Container>
      <StyledContainer>
        <Column>
          <h1 className="h2-web h3-mobile mb-16-mobile text-center-mobile">
            {text.SERVICES.MEETING_SMALL.TITLE}
          </h1>
          <Content>
            <p className="text-center-mobile destacados-italic-mobile destacado-italic mb-20-mobile mb-50">
              <Translator text={text.SERVICES.MEETING_SMALL.BAJADA} />
            </p>
            <Link to="/contact">
              <BotonSecundario className="mb-32 mb-16-mobile">
                {text.SERVICES.MEETING_SMALL.BUTTON}
              </BotonSecundario>
            </Link>
          </Content>
        </Column>
      </StyledContainer>
    </Container>
  );
}

export default BookMeetingSmall;
