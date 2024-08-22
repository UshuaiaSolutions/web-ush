import React, { useContext } from "react";
import Container from "../base/Container";
import { StyledContainer, Row, Card, Icon } from "./ExpertiseAreasComp";
import Technology from "../../assets/Areas/Technology";
import Industry from "../../assets/Areas/Industry";
import Arts from "../../assets/Areas/Arts";
import Sciences from "../../assets/Areas/Sciences";
import Business from "../../assets/Areas/Business";
import { TranslationContext } from "../../assets/Translations/TranslationsProvider";
import Translator from "../../assets/Translations/Translator";

function ExpertiseAreas() {
  const { text } = useContext(TranslationContext);

  return (
    <Container>
      <StyledContainer>
        <h2 className="h3-mobile h2-web mb-40 mb-16-mobile">
          {text.SERVICES.AREAS.TITLE}
        </h2>
        <p className="txt-regular-mobile destacado-regular mb-16-mobile mb-60 w-90-desktop auto-sides-desktop">
          <Translator text={text.SERVICES.AREAS.BAJADA} />
        </p>
        <Row>
          <Card>
            <Icon className="mb-32 mb-8-mobile">
              <Technology />
            </Icon>
            <h3 className="h3-web body-bold-mobile mb-32 mb-8-mobile">
              {text.SERVICES.AREAS.FIRST.TITLE}
            </h3>
            <ul>
              <li className="destacado-regular txt-mobile text-center-mobile">
                {text.SERVICES.AREAS.FIRST.ITEM1}
              </li>
              <li className="destacado-regular txt-mobile text-center-mobile">
                {text.SERVICES.AREAS.FIRST.ITEM2}
              </li>
              <li className="destacado-regular txt-mobile text-center-mobile">
                {text.SERVICES.AREAS.FIRST.ITEM3}
              </li>
              <li className="destacado-regular txt-mobile text-center-mobile">
                {text.SERVICES.AREAS.FIRST.ITEM4}
              </li>
            </ul>
          </Card>
          <Card>
            <Icon className="mb-32 mb-8-mobile">
              <Business />
            </Icon>
            <h3 className="h3-web body-bold-mobile mb-32 mb-8-mobile">
              {text.SERVICES.AREAS.SECOND.TITLE}
            </h3>
            <ul>
              <li className="destacado-regular txt-mobile text-center-mobile">
                <Translator text={text.SERVICES.AREAS.SECOND.ITEM1} />
              </li>
              <li className="destacado-regular txt-mobile text-center-mobile">
                {text.SERVICES.AREAS.SECOND.ITEM2}
              </li>
              <li className="destacado-regular txt-mobile text-center-mobile">
                {text.SERVICES.AREAS.SECOND.ITEM3}
              </li>
              <li className="destacado-regular txt-mobile text-center-mobile">
                {text.SERVICES.AREAS.SECOND.ITEM4}
              </li>
            </ul>
          </Card>
          <Card>
            <Icon className="mb-32 mb-8-mobile">
              <Industry />
            </Icon>
            <h3 className="h3-web body-bold-mobile mb-32 mb-8-mobile">
              {text.SERVICES.AREAS.THIRD.TITLE}
            </h3>
            <ul>
              <li className="destacado-regular txt-mobile text-center-mobile">
                <Translator text={text.SERVICES.AREAS.THIRD.ITEM1} />
              </li>
              <li className="destacado-regular txt-mobile text-center-mobile">
                {text.SERVICES.AREAS.THIRD.ITEM2}
              </li>
            </ul>
          </Card>
          <Card>
            <Icon className="mb-32 mb-8-mobile">
              <Arts />
            </Icon>
            <h3 className="h3-web body-bold-mobile mb-32 mb-8-mobile">
              <Translator text={text.SERVICES.AREAS.FOURTH.TITLE} />
            </h3>
            <ul>
              <li className="destacado-regular txt-mobile text-center-mobile">
                {text.SERVICES.AREAS.FOURTH.ITEM1}
              </li>
              <li className="destacado-regular txt-mobile text-center-mobile">
                {text.SERVICES.AREAS.FOURTH.ITEM2}
              </li>
            </ul>
          </Card>
          <Card>
            <Icon className="mb-32 mb-8-mobile">
              <Sciences />
            </Icon>
            <h3 className="h3-web body-bold-mobile mb-32 mb-8-mobile">
              <Translator text={text.SERVICES.AREAS.FIFTH.TITLE} />
            </h3>
            <ul>
              <li className="destacado-regular txt-mobile text-center-mobile">
                {text.SERVICES.AREAS.FIFTH.ITEM1}
              </li>
              <li className="destacado-regular txt-mobile text-center-mobile">
                {text.SERVICES.AREAS.FIFTH.ITEM2}
              </li>
              <li className="destacado-regular txt-mobile text-center-mobile">
                {text.SERVICES.AREAS.FIFTH.ITEM3}
              </li>
            </ul>
          </Card>
        </Row>
      </StyledContainer>
    </Container>
  );
}

export default ExpertiseAreas;
