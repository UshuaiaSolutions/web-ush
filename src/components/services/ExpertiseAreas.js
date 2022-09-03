import React from "react";
import styled from "styled-components";
import Container from "../base/Container";
import { CorteDesktop, CorteMobile } from "../base/Cortes";

const StyledContainer = styled.div`
  padding: 40px 0;
  color: ${(props) => props.theme.textonegro};
  background: ${(props) => props.theme.fondo};
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    padding: 100px 0;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    flex-wrap: wrap;
    flex-direction: row;

    & div {
      width: 50%;
    }
  }
`;

const Row = styled.div`
  display: flex;

  @media (min-width: 769px) {
    margin-bottom: 40px;
  }
`;

const Image = styled.img`
  height: 14px;
  width: 14px;
  margin-right: 19px;
  margin-top: 2px;

  @media (min-width: 1125px) {
    width: 24px;
    height: 24px;
    margin-top: 5px;
  }
`;

const DesktopRow = styled.div`
  @media (min-width: 769px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 70px;

    .exacto-desktop {
      max-width: 400px;
      width: 50%;
    }
  }

  @media (min-width: 1125px) {
    .exacto-desktop {
      width: 541px;
      max-width: 541px;
    }
  }
`;

function ExpertiseAreas() {
  return (
    <StyledContainer>
      <Container>
        <DesktopRow>
          <h2 className="h2-mobile h2-web mb-20-mobile">
            <u>Expertise areas</u>
          </h2>
          <p className="txt-regular-mobile destacado-medium mb-40-mobile exacto-desktop">
            We've managed to select and train
            <CorteMobile />
            <CorteDesktop /> highly skilled professionals specialized
            <CorteMobile />
            <CorteDesktop /> in different fields.
          </p>
        </DesktopRow>
        <Column>
          <Row>
            <Image src="/icons/check.png" alt="Checked" />
            <h3 className="destacado-alta destacados-alta-mobile mb-15-mobile">
              Cloud Computing
            </h3>
          </Row>
          <Row>
            <Image src="/icons/check.png" alt="Checked" />
            <h3 className="destacado-alta destacados-alta-mobile mb-15-mobile">
              Finance, Business
              <CorteDesktop /> and Banking
            </h3>
          </Row>
          <Row>
            <Image src="/icons/check.png" alt="Checked" />
            <h3 className="destacado-alta destacados-alta-mobile mb-15-mobile">
              Artificial Intelligence
            </h3>
          </Row>
          <Row>
            <Image src="/icons/check.png" alt="Checked" />
            <h3 className="destacado-alta destacados-alta-mobile mb-15-mobile">
              Insurance and Legal
            </h3>
          </Row>
          <Row>
            <Image src="/icons/check.png" alt="Checked" />
            <h3 className="destacado-alta destacados-alta-mobile mb-15-mobile">
              Retail and e-Commerce
            </h3>
          </Row>
          <Row>
            <Image src="/icons/check.png" alt="Checked" />
            <h3 className="destacado-alta destacados-alta-mobile mb-15-mobile">
              Marketing and <CorteDesktop /> Human Resources
            </h3>
          </Row>
          <Row>
            <Image src="/icons/check.png" alt="Checked" />
            <h3 className="destacado-alta destacados-alta-mobile mb-15-mobile">
              Enterprise software
              <CorteDesktop /> (ERP, CMS, HCM)
            </h3>
          </Row>
          <Row>
            <Image src="/icons/check.png" alt="Checked" />
            <h3 className="destacado-alta destacados-alta-mobile mb-15-mobile">
              Tourism, Hotels and Leisure
            </h3>
          </Row>
          <Row>
            <Image src="/icons/check.png" alt="Checked" />
            <h3 className="destacado-alta destacados-alta-mobile mb-15-mobile">
              Industrial Automation
            </h3>
          </Row>
          <Row>
            <Image src="/icons/check.png" alt="Checked" />
            <h3 className="destacado-alta destacados-alta-mobile mb-15-mobile">
              Mechanical, Automotive
              <CorteDesktop /> and Heavy Machinery
            </h3>
          </Row>
          <Row>
            <Image src="/icons/check.png" alt="Checked" />
            <h3 className="destacado-alta destacados-alta-mobile mb-15-mobile">
              Healthcare and Life Sciences
            </h3>
          </Row>
          <Row>
            <Image src="/icons/check.png" alt="Checked" />
            <h3 className="destacado-alta destacados-alta-mobile mb-15-mobile">
              Fitness, Cosmetics and
              <CorteDesktop /> Beauty Products
            </h3>
          </Row>
          <Row>
            <Image src="/icons/check.png" alt="Checked" />
            <h3 className="destacado-alta destacados-alta-mobile mb-15-mobile">
              Industry and Logistics
            </h3>
          </Row>
          <Row>
            <Image src="/icons/check.png" alt="Checked" />
            <h3 className="destacado-alta destacados-alta-mobile mb-15-mobile">
              Arts and Design
            </h3>
          </Row>
        </Column>
      </Container>
    </StyledContainer>
  );
}

export default ExpertiseAreas;
