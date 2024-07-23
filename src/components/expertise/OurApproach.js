import React from "react";
import Container from "../base/Container";
import { CorteDesktop } from "../base/Cortes";
import {
  StyledContainer,
  Content,
  EstrellaVioleta,
  ContentContainer,
  StyledBoton,
} from "./OurApproachComp";

import { useTheme } from "styled-components";
import { colors } from "../base/breakpoints";

function OurApproach() {
  const theme = useTheme();

  const handleDownload = (file, download) => {
    // Define la ruta a tu archivo PDF en la carpeta public
    const filePath = file;
    const link = document.createElement("a");
    link.href = filePath;
    link.download = download; // Nombre con el que se descargará el archivo
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <StyledContainer>
        <Container>
          <div style={{ zIndex: "2", position: "relative" }}>
            <h1 className="h3-mobile h2-web mb-16-mobile mb-40 text-center">
              Our Approach to Excellence
            </h1>
            <p className="txt-regular-mobile destacado-regular text-center">
              Sustainability, accessibility, and high quality are the pillars of
              our work.
              <CorteDesktop /> Our professional localization services are{" "}
              <b>
                certified to meet ISO 17100:2015
                <CorteDesktop /> quality standards,
              </b>{" "}
              as confirmed by our successful annual external audits.
            </p>
          </div>
          <ContentContainer>
            <Content>
              <p className="txt-regular-mobile destacado-regular text-left text-center-mobile mb-16-mobile">
                We express our commitment to excellence
                <CorteDesktop /> with a <b>quality policy</b> that focuses on
                <CorteDesktop /> continuous improvement, client satisfaction,
                <CorteDesktop /> and confidentiality.
              </p>
              <div>
                <StyledBoton
                  className="mb-32 mb-16-mobile"
                  onClick={() =>
                    handleDownload(
                      "/pdf/Quality_Policy.pdf",
                      "Quality_Policy.pdf"
                    )
                  }
                >
                  Read our Quality Policy
                </StyledBoton>
              </div>
            </Content>
            <EstrellaVioleta
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="65"
              viewBox="0 0 64 65"
              fill="none"
            >
              <path
                d="M0 32.6103C17.05 28.292 27.6751 17.6561 32.0257 0.594971C36.3393 17.6693 46.9922 28.2389 64 32.6126C46.9749 36.9516 36.3688 47.5379 32.0205 64.595C27.6705 47.5593 17.0788 36.9245 0 32.6103Z"
                fill={
                  theme.nombre === "light" ? colors.lilaush : colors.amarillo
                }
              />
            </EstrellaVioleta>
            <Content>
              <p className="txt-regular-mobile destacado-regular text-left text-center-mobile mb-16-mobile">
                We are committed to conducting our
                <CorteDesktop /> business in a socially responsible manner.
                <CorteDesktop /> Our Manifesto outlines our approach to
                <CorteDesktop /> <b>sustainability</b>, diversity, ethics, and
                <CorteDesktop /> community engagement.
              </p>
              <div>
                <StyledBoton
                  className="mb-32 mb-16-mobile"
                  onClick={() =>
                    handleDownload(
                      "/pdf/Ushuaia_Solutions-ESG_Manifesto.pdf",
                      "Ushuaia_Solutions-ESG_Manifesto.pdf"
                    )
                  }
                >
                  Read our ESG Manifesto
                </StyledBoton>
              </div>
            </Content>
            <EstrellaVioleta
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="65"
              viewBox="0 0 64 65"
              fill="none"
            >
              <path
                d="M0 32.6103C17.05 28.292 27.6751 17.6561 32.0257 0.594971C36.3393 17.6693 46.9922 28.2389 64 32.6126C46.9749 36.9516 36.3688 47.5379 32.0205 64.595C27.6705 47.5593 17.0788 36.9245 0 32.6103Z"
                fill={
                  theme.nombre === "light" ? colors.lilaush : colors.amarillo
                }
              />
            </EstrellaVioleta>
            <Content>
              <p className="txt-regular-mobile destacado-regular text-left text-center-mobile mb-16-mobile">
                We believe that localization involves
                <CorteDesktop /> not only translating content but also
                <CorteDesktop /> ensuring it is <b>accessible</b> to everyone,
                <CorteDesktop /> regardless of their abilities.
              </p>
              <div>
                <StyledBoton
                  className="mb-32 mb-16-mobile"
                  onClick={() =>
                    handleDownload(
                      "/pdf/Websites_Accessibility_Statement.pdf",
                      "Websites_Accessibility_Statement.pdf"
                    )
                  }
                >
                  Website’s Accessibility Statement
                </StyledBoton>
              </div>
            </Content>
          </ContentContainer>
        </Container>
      </StyledContainer>
    </>
  );
}

export default OurApproach;
