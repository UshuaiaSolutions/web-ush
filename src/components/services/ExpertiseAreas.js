import React from "react";
import Container from "../base/Container";
import { CorteDesktop, CorteMobile } from "../base/Cortes";
import { StyledContainer, Row, Card, Icon } from "./ExpertiseAreasComp";
import Technology from "../../assets/Areas/Technology";
import Industry from "../../assets/Areas/Industry";
import Arts from "../../assets/Areas/Arts";
import Sciences from "../../assets/Areas/Sciences";
import Business from "../../assets/Areas/Business";

function ExpertiseAreas() {
  return (
    <Container>
      <StyledContainer>
        <h2 className="h3-mobile h2-web mb-40 mb-16-mobile">Expertise Areas</h2>
        <p className="txt-regular-mobile destacado-regular mb-16-mobile mb-60">
          We've managed to select and train highly
          <CorteMobile /> skilled professionals specialized
          <CorteDesktop />
          <CorteMobile /> in different fields.
        </p>
        <Row>
          <Card>
            <Icon className="mb-32 mb-8-mobile">
              <Technology />
            </Icon>
            <h3 className="h3-web body-bold-mobile mb-32 mb-8-mobile">
              Technology
            </h3>
            <ul>
              <li className="destacado-regular txt-mobile text-center-mobile">
                Cloud Computing
              </li>
              <li className="destacado-regular txt-mobile text-center-mobile">
                Artificial Intelligence
              </li>
              <li className="destacado-regular txt-mobile text-center-mobile">
                Telecommunications
              </li>
              <li className="destacado-regular txt-mobile text-center-mobile">
                Enterprise Software
              </li>
            </ul>
          </Card>
          <Card>
            <Icon className="mb-32 mb-8-mobile">
              <Business />
            </Icon>
            <h3 className="h3-web body-bold-mobile mb-32 mb-8-mobile">
              Business
            </h3>
            <ul>
              <li className="destacado-regular txt-mobile text-center-mobile">
                Retail and
                <CorteMobile /> e-Commerce
              </li>
              <li className="destacado-regular txt-mobile text-center-mobile">
                Insurance and Legal
              </li>
              <li className="destacado-regular txt-mobile text-center-mobile">
                Marketing and HR
              </li>
              <li className="destacado-regular txt-mobile text-center-mobile">
                Finance and banking
              </li>
            </ul>
          </Card>
          <Card>
            <Icon className="mb-32 mb-8-mobile">
              <Industry />
            </Icon>
            <h3 className="h3-web body-bold-mobile mb-32 mb-8-mobile">
              Industry
            </h3>
            <ul>
              <li className="destacado-regular txt-mobile text-center-mobile">
                Automotive and
                <CorteDesktop />
                <CorteMobile />
                Heavy Machinery
              </li>
              <li className="destacado-regular txt-mobile text-center-mobile">
                Industrial manufacturing
              </li>
            </ul>
          </Card>
          <Card>
            <Icon className="mb-32 mb-8-mobile">
              <Arts />
            </Icon>
            <h3 className="h3-web body-bold-mobile mb-32 mb-8-mobile">
              Arts &<CorteDesktop /> Leisure
            </h3>
            <ul>
              <li className="destacado-regular txt-mobile text-center-mobile">
                Travel and Hospitality
              </li>
              <li className="destacado-regular txt-mobile text-center-mobile">
                Arts and Design
              </li>
            </ul>
          </Card>
          <Card>
            <Icon className="mb-32 mb-8-mobile">
              <Sciences />
            </Icon>
            <h3 className="h3-web body-bold-mobile mb-32 mb-8-mobile">
              Life Sciences
              <CorteDesktop /> & Healthcare
            </h3>
            <ul>
              <li className="destacado-regular txt-mobile text-center-mobile">
                Regulatory
              </li>
              <li className="destacado-regular txt-mobile text-center-mobile">
                Medical Devices
              </li>
              <li className="destacado-regular txt-mobile text-center-mobile">
                Clinical Trials
              </li>
            </ul>
          </Card>
        </Row>
      </StyledContainer>
    </Container>
  );
}

export default ExpertiseAreas;
