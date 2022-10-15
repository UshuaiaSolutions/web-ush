import React from "react";
import BotonSecundario from "../base/BotonSecundario";
import Container from "../base/Container";
import { CorteDesktop, CorteMobile } from "../base/Cortes";
import {
  StyledContainer,
  RowDesktop,
  Column,
  Row,
  Image,
  StyledLink,
} from "./MeetYourNeedsComp";

function MeetYourNeeds() {
  return (
    <StyledContainer>
      <Container>
        <h2 className="h2-mobile h2-web mb-20-mobile mb-70 text-left-mobile text-center">
          We can meet <u>your needs.</u>
        </h2>
        <RowDesktop>
          <p className="destacados-mobile destacado-medium mb-40-mobile mb-40">
            We offer a wide variety of multilingual
            <CorteDesktop />
            <CorteMobile /> solutions, from translation and localization
            <CorteDesktop />
            <CorteMobile /> to content creation and video editing.
            <CorteDesktop />
            <CorteMobile /> We have dedicated translators on staff for
            <CorteDesktop />
            <CorteMobile /> the major European and Latin American
            <CorteDesktop />
            <CorteMobile /> languages, and their varieties.
          </p>
          <Column>
            <Row>
              <Image
                src="https://ushmultimedia.blob.core.windows.net/ushwebsite/checkmark.png"
                alt="Checked"
              />
              <h3 className="destacados-semibold-mobile destacado-item">
                Language Solutions
              </h3>
            </Row>
            <Row>
              <Image
                src="https://ushmultimedia.blob.core.windows.net/ushwebsite/checkmark.png"
                alt="Checked"
              />
              <h3 className="destacados-semibold-mobile destacado-item">
                Project Management
              </h3>
            </Row>
            <Row>
              <Image
                src="https://ushmultimedia.blob.core.windows.net/ushwebsite/checkmark.png"
                alt="Checked"
              />
              <h3 className="destacados-semibold-mobile destacado-item">
                Desktop Publishing
              </h3>
            </Row>
            <Row>
              <Image
                src="https://ushmultimedia.blob.core.windows.net/ushwebsite/checkmark.png"
                alt="Checked"
              />
              <h3 className="destacados-semibold-mobile destacado-item">
                Creative Visuals
              </h3>
            </Row>
            <Row>
              <Image
                src="https://ushmultimedia.blob.core.windows.net/ushwebsite/checkmark.png"
                alt="Checked"
              />
              <h3 className="destacados-semibold-mobile destacado-item">
                Content Creation
              </h3>
            </Row>
            <Row>
              <Image
                src="https://ushmultimedia.blob.core.windows.net/ushwebsite/checkmark.png"
                alt="Checked"
              />
              <h3 className="destacados-semibold-mobile destacado-item">
                E-learning and Video
              </h3>
            </Row>
          </Column>
        </RowDesktop>
        <StyledLink to="/services">
          <BotonSecundario>Explore USH services</BotonSecundario>
        </StyledLink>
      </Container>
    </StyledContainer>
  );
}

export default MeetYourNeeds;
