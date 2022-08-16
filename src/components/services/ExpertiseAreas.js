import React from "react";
import styled from "styled-components";
import Container from "../base/Container";

const StyledContainer = styled.div`
  padding: 40px 0;
  color: ${(props) => props.theme.textonegro};
  background: ${(props) => props.theme.fondo};
  display: flex;
  flex-direction: column;

  @media (min-width: 1025px) {
    padding: 200px 0 160px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;

  @media (min-width: 1025px) {
    flex-wrap: wrap;
    flex-direction: row;

    & div {
      width: 50%;
    }
  }
`;

const Row = styled.div`
  display: flex;

  @media (min-width: 1025px) {
    margin-bottom: 40px;
  }
`;

const Image = styled.img`
  height: 14px;
  width: 14px;
  margin-right: 19px;

  @media (min-width: 1025px) {
    width: 24px;
    height: 24px;
    margin-top: 5px;
  }
`;

const DesktopRow = styled.div`
  @media (min-width: 1025px) {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 100px;

    & p,
    & h2 {
      width: 40%;
    }
  }
`;

function ExpertiseAreas() {
  return (
    <StyledContainer>
      <Container>
        <DesktopRow>
          <h2 className="h2-mobile h2-web mb-20-mobile">Expertise areas</h2>
          <p className="txt-regular-mobile mb-40-mobile">
            With over 20 years' experience, we've managed to select and train
            highly skilled professionals specialized in different fields.
          </p>
        </DesktopRow>
        <Column>
          <Row>
            <Image src="/icons/check.png" alt="Checked" />
            <h3 className="txt-destacados-alta-mobile destacado-alta mb-15-mobile">
              Cloud Computing
            </h3>
          </Row>
          <Row>
            <Image src="/icons/check.png" alt="Checked" />
            <h3 className="txt-destacados-alta-mobile destacado-alta mb-15-mobile">
              Artificial Intelligence
            </h3>
          </Row>
          <Row>
            <Image src="/icons/check.png" alt="Checked" />
            <h3 className="txt-destacados-alta-mobile destacado-alta mb-15-mobile">
              Retail and e-Commerce
            </h3>
          </Row>
          <Row>
            <Image src="/icons/check.png" alt="Checked" />
            <h3 className="txt-destacados-alta-mobile destacado-alta mb-15-mobile">
              Enterprise software (ERP, CMS, HCM)
            </h3>
          </Row>
          <Row>
            <Image src="/icons/check.png" alt="Checked" />
            <h3 className="txt-destacados-alta-mobile destacado-alta mb-15-mobile">
              Industrial Automation
            </h3>
          </Row>
          <Row>
            <Image src="/icons/check.png" alt="Checked" />
            <h3 className="txt-destacados-alta-mobile destacado-alta mb-15-mobile">
              Healthcare and Life Sciences
            </h3>
          </Row>
          <Row>
            <Image src="/icons/check.png" alt="Checked" />
            <h3 className="txt-destacados-alta-mobile destacado-alta mb-15-mobile">
              Industry and Logistics
            </h3>
          </Row>
          <Row>
            <Image src="/icons/check.png" alt="Checked" />
            <h3 className="txt-destacados-alta-mobile destacado-alta mb-15-mobile">
              Finance, Business and Banking
            </h3>
          </Row>
          <Row>
            <Image src="/icons/check.png" alt="Checked" />
            <h3 className="txt-destacados-alta-mobile destacado-alta mb-15-mobile">
              Insurance and Legal
            </h3>
          </Row>
          <Row>
            <Image src="/icons/check.png" alt="Checked" />
            <h3 className="txt-destacados-alta-mobile destacado-alta mb-15-mobile">
              Marketing and Human Resources
            </h3>
          </Row>
          <Row>
            <Image src="/icons/check.png" alt="Checked" />
            <h3 className="txt-destacados-alta-mobile destacado-alta mb-15-mobile">
              Mechanical, Automotive and Heavy Machinery
            </h3>
          </Row>
          <Row>
            <Image src="/icons/check.png" alt="Checked" />
            <h3 className="txt-destacados-alta-mobile destacado-alta mb-15-mobile">
              Tourism, Hotels and Leisure
            </h3>
          </Row>
          <Row>
            <Image src="/icons/check.png" alt="Checked" />
            <h3 className="txt-destacados-alta-mobile destacado-alta mb-15-mobile">
              Fitness, Cosmetics and Beauty Products
            </h3>
          </Row>
          <Row>
            <Image src="/icons/check.png" alt="Checked" />
            <h3 className="txt-destacados-alta-mobile destacado-alta mb-15-mobile">
              Arts and Design
            </h3>
          </Row>
        </Column>
      </Container>
    </StyledContainer>
  );
}

export default ExpertiseAreas;
