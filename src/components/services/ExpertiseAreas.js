import React from "react";
import Container from "../base/Container";
import { CorteDesktop, CorteMobile } from "../base/Cortes";
import {
  StyledContainer,
  DesktopRow,
  Column,
  Row,
  Image,
} from "./ExpertiseAreasComp";

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
            <Image
              src="https://ushmultimedia.blob.core.windows.net/ushwebsite/checkmark.png"
              alt="Checked"
            />
            <h3 className="destacado-alta destacados-alta-mobile mb-15-mobile">
              Cloud Computing
            </h3>
          </Row>
          <Row>
            <Image
              src="https://ushmultimedia.blob.core.windows.net/ushwebsite/checkmark.png"
              alt="Checked"
            />
            <h3 className="destacado-alta destacados-alta-mobile mb-15-mobile">
              Finance, Business
              <CorteDesktop /> and Banking
            </h3>
          </Row>
          <Row>
            <Image
              src="https://ushmultimedia.blob.core.windows.net/ushwebsite/checkmark.png"
              alt="Checked"
            />
            <h3 className="destacado-alta destacados-alta-mobile mb-15-mobile">
              Artificial Intelligence
            </h3>
          </Row>
          <Row>
            <Image
              src="https://ushmultimedia.blob.core.windows.net/ushwebsite/checkmark.png"
              alt="Checked"
            />
            <h3 className="destacado-alta destacados-alta-mobile mb-15-mobile">
              Insurance and Legal
            </h3>
          </Row>
          <Row>
            <Image
              src="https://ushmultimedia.blob.core.windows.net/ushwebsite/checkmark.png"
              alt="Checked"
            />
            <h3 className="destacado-alta destacados-alta-mobile mb-15-mobile">
              Retail and e-Commerce
            </h3>
          </Row>
          <Row>
            <Image
              src="https://ushmultimedia.blob.core.windows.net/ushwebsite/checkmark.png"
              alt="Checked"
            />
            <h3 className="destacado-alta destacados-alta-mobile mb-15-mobile">
              Marketing and <CorteDesktop /> Human Resources
            </h3>
          </Row>
          <Row>
            <Image
              src="https://ushmultimedia.blob.core.windows.net/ushwebsite/checkmark.png"
              alt="Checked"
            />
            <h3 className="destacado-alta destacados-alta-mobile mb-15-mobile">
              Enterprise software
              <CorteDesktop /> (ERP, CMS, HCM)
            </h3>
          </Row>
          <Row>
            <Image
              src="https://ushmultimedia.blob.core.windows.net/ushwebsite/checkmark.png"
              alt="Checked"
            />
            <h3 className="destacado-alta destacados-alta-mobile mb-15-mobile">
              Tourism, Hotels and Leisure
            </h3>
          </Row>
          <Row>
            <Image
              src="https://ushmultimedia.blob.core.windows.net/ushwebsite/checkmark.png"
              alt="Checked"
            />
            <h3 className="destacado-alta destacados-alta-mobile mb-15-mobile">
              Industrial Automation
            </h3>
          </Row>
          <Row>
            <Image
              src="https://ushmultimedia.blob.core.windows.net/ushwebsite/checkmark.png"
              alt="Checked"
            />
            <h3 className="destacado-alta destacados-alta-mobile mb-15-mobile">
              Mechanical, Automotive
              <CorteDesktop /> and Heavy Machinery
            </h3>
          </Row>
          <Row>
            <Image
              src="https://ushmultimedia.blob.core.windows.net/ushwebsite/checkmark.png"
              alt="Checked"
            />
            <h3 className="destacado-alta destacados-alta-mobile mb-15-mobile">
              Healthcare and Life Sciences
            </h3>
          </Row>
          <Row>
            <Image
              src="https://ushmultimedia.blob.core.windows.net/ushwebsite/checkmark.png"
              alt="Checked"
            />
            <h3 className="destacado-alta destacados-alta-mobile mb-15-mobile">
              Fitness, Cosmetics and
              <CorteDesktop /> Beauty Products
            </h3>
          </Row>
          <Row>
            <Image
              src="https://ushmultimedia.blob.core.windows.net/ushwebsite/checkmark.png"
              alt="Checked"
            />
            <h3 className="destacado-alta destacados-alta-mobile mb-15-mobile">
              Industry and Logistics
            </h3>
          </Row>
          <Row>
            <Image
              src="https://ushmultimedia.blob.core.windows.net/ushwebsite/checkmark.png"
              alt="Checked"
            />
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
