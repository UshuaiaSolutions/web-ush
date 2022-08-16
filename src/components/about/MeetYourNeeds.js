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
`;

function MeetYourNeeds() {
  return (
    <StyledContainer>
      <Container>
        <h2 className="h2-mobile mb-20-mobile">
          We can meet <u>your needs.</u>
        </h2>
        <p className="txt-regular-mobile mb-40-mobile">
          We offer a wide variety of multilingual solutions, from translation
          and localization to content creation and video editing. We have
          dedicated translators on staff for the major European languages and
          their varieties. Our core competence involves English, German,
          Spanish, Catalan and Portuguese in any direction and combination.
        </p>
        <Column>
          <Row>
            <Image src="/icons/check-blanco.png" alt="Checked" />
            <h3 className="txt-destacados-alta-mobile mb-15-mobile">
              Language Solutions
            </h3>
          </Row>
          <Row>
            <Image src="/icons/check-blanco.png" alt="Checked" />
            <h3 className="txt-destacados-alta-mobile mb-15-mobile">
              Project Management
            </h3>
          </Row>
          <Row>
            <Image src="/icons/check-blanco.png" alt="Checked" />
            <h3 className="txt-destacados-alta-mobile mb-15-mobile">
              Desktop Publishing And Creative Visuals
            </h3>
          </Row>
          <Row>
            <Image src="/icons/check-blanco.png" alt="Checked" />
            <h3 className="txt-destacados-alta-mobile mb-15-mobile">
              Creative Visuals
            </h3>
          </Row>
          <Row>
            <Image src="/icons/check-blanco.png" alt="Checked" />
            <h3 className="txt-destacados-alta-mobile mb-15-mobile">
              Content Creation
            </h3>
          </Row>
          <Row>
            <Image src="/icons/check-blanco.png" alt="Checked" />
            <h3 className="txt-destacados-alta-mobile mb-40-mobile">
              E-learning and Video
            </h3>
          </Row>
        </Column>
        <BotonSecundario>Explore USH</BotonSecundario>
      </Container>
    </StyledContainer>
  );
}

export default MeetYourNeeds;
