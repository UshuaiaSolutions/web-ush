import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BotonSecundario from "../base/BotonSecundario";
import Container from "../base/Container";
import { CorteDesktop, CorteMobile } from "../base/Cortes";

const StyledContainer = styled.div`
  padding: 60px 0;
  color: ${(props) => props.theme.fondo};
  background: ${(props) => props.theme.textonegro};
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    padding: 70px 0;
  }

  @media (min-width: 1500px) {
    padding: 100px 0;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;

  @media (min-width: 769px) {
    padding-left: 0;
    width: 50%;
  }
`;

const Row = styled.div`
  display: flex;
`;

const Image = styled.img`
  height: 14px;
  width: 14px;
  margin-right: 19px;

  @media (min-width: 1125px) {
    height: 31px;
    width: 31px;
    margin-top: 5px;
    object-fit: scale-down;
  }
`;

const RowDesktop = styled.div`
  @media (min-width: 769px) {
    display: flex;
    justify-content: space-between;
  }
`;

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
              <h3 className="destacados-semibold-mobile destacado-item mb-15-mobile mb-20">
                Language Solutions
              </h3>
            </Row>
            <Row>
              <Image
                src="https://ushmultimedia.blob.core.windows.net/ushwebsite/checkmark.png"
                alt="Checked"
              />
              <h3 className="destacados-semibold-mobile destacado-item mb-15-mobile mb-20">
                Project Management
              </h3>
            </Row>
            <Row>
              <Image
                src="https://ushmultimedia.blob.core.windows.net/ushwebsite/checkmark.png"
                alt="Checked"
              />
              <h3 className="destacados-semibold-mobile destacado-item mb-15-mobile mb-20">
                Desktop Publishing
              </h3>
            </Row>
            <Row>
              <Image
                src="https://ushmultimedia.blob.core.windows.net/ushwebsite/checkmark.png"
                alt="Checked"
              />
              <h3 className="destacados-semibold-mobile destacado-item mb-15-mobile mb-20">
                Creative Visuals
              </h3>
            </Row>
            <Row>
              <Image
                src="https://ushmultimedia.blob.core.windows.net/ushwebsite/checkmark.png"
                alt="Checked"
              />
              <h3 className="destacados-semibold-mobile destacado-item mb-15-mobile mb-20">
                Content Creation
              </h3>
            </Row>
            <Row>
              <Image
                src="https://ushmultimedia.blob.core.windows.net/ushwebsite/checkmark.png"
                alt="Checked"
              />
              <h3 className="destacados-semibold-mobile destacado-item mb-40-mobile">
                E-learning and Video
              </h3>
            </Row>
          </Column>
        </RowDesktop>
        <Link to="/services">
          <BotonSecundario>Explore USH services</BotonSecundario>
        </Link>
      </Container>
    </StyledContainer>
  );
}

export default MeetYourNeeds;
