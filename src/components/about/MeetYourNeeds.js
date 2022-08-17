import React from "react";
import styled from "styled-components";
import BotonSecundario from "../base/BotonSecundario";
import Container from "../base/Container";

const StyledContainer = styled.div`
  padding: 60px 0;
  color: ${(props) => props.theme.fondo};
  background: ${(props) => props.theme.lilaush};
  display: flex;
  flex-direction: column;

  @media (min-width: 1025px) {
    padding: 70px 0;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
`;

const Row = styled.div`
  display: flex;
`;

const Image = styled.img`
  height: 14px;
  width: 14px;
  margin-right: 19px;

  @media (min-width: 1025px) {
    height: 31px;
    width: 31px;
    margin-top: 5px;
  }
`;

const RowDesktop = styled.div`
  @media (min-width: 1025px) {
    display: flex;
    justify-content: space-between;

    & > div,
    & p {
      width: 45%;
    }
  }
`;

function MeetYourNeeds() {
  return (
    <StyledContainer>
      <Container>
        <h2 className="h2-mobile h2-web mb-20-mobile mb-40 text-left-mobile text-center">
          We can meet <u>your needs.</u>
        </h2>
        <RowDesktop>
          <p className="txt-regular-mobile destacado-medium mb-40-mobile mb-40">
            We offer a wide variety of multilingual solutions, from translation
            and localization to content creation and video editing. We have
            dedicated translators on staff for the major European languages and
            their varieties. Our core competence involves English, German,
            Spanish, Catalan and Portuguese in any direction and combination.
          </p>
          <Column>
            <Row>
              <Image src="/icons/check-blanco.png" alt="Checked" />
              <h3 className="txt-destacados-alta-mobile destacado-item mb-15-mobile mb-20">
                Language Solutions
              </h3>
            </Row>
            <Row>
              <Image src="/icons/check-blanco.png" alt="Checked" />
              <h3 className="txt-destacados-alta-mobile destacado-item mb-15-mobile mb-20">
                Project Management
              </h3>
            </Row>
            <Row>
              <Image src="/icons/check-blanco.png" alt="Checked" />
              <h3 className="txt-destacados-alta-mobile destacado-item mb-15-mobile mb-20">
                Desktop Publishing
              </h3>
            </Row>
            <Row>
              <Image src="/icons/check-blanco.png" alt="Checked" />
              <h3 className="txt-destacados-alta-mobile destacado-item mb-15-mobile mb-20">
                Creative Visuals
              </h3>
            </Row>
            <Row>
              <Image src="/icons/check-blanco.png" alt="Checked" />
              <h3 className="txt-destacados-alta-mobile destacado-item mb-15-mobile mb-20">
                Content Creation
              </h3>
            </Row>
            <Row>
              <Image src="/icons/check-blanco.png" alt="Checked" />
              <h3 className="txt-destacados-alta-mobile destacado-item mb-40-mobile">
                E-learning and Video
              </h3>
            </Row>
          </Column>
        </RowDesktop>
        <BotonSecundario>Explore USH</BotonSecundario>
      </Container>
    </StyledContainer>
  );
}

export default MeetYourNeeds;
