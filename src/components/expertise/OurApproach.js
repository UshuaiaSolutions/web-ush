import React, { useContext } from "react";
import Container from "../base/Container";
import {
  StyledContainer,
  Content,
  EstrellaVioleta,
  ContentContainer,
  StyledBoton,
} from "./OurApproachComp";

import { useTheme } from "styled-components";
import { colors } from "../base/breakpoints";
import { TranslationContext } from "../../assets/Translations/TranslationsProvider";
import Translator from "../../assets/Translations/Translator";

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

  const { text } = useContext(TranslationContext);

  return (
    <>
      <StyledContainer>
        <Container>
          <div style={{ zIndex: "2", position: "relative" }}>
            <h1 className="h3-mobile h2-web mb-16-mobile mb-40 text-center">
              {text.EXPERTISE.EXCELLENCE.TITLE}
            </h1>
            <p className="txt-regular-mobile destacado-regular text-center">
              <Translator text={text.EXPERTISE.EXCELLENCE.BAJADA} />
            </p>
          </div>
          <ContentContainer>
            <Content>
              <p className="txt-regular-mobile destacado-regular text-left text-center-mobile mb-16-mobile w-50-desktop">
                <Translator text={text.EXPERTISE.EXCELLENCE.FIRST.BAJADA} />
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
                  {text.EXPERTISE.EXCELLENCE.FIRST.BUTTON}
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
              <p className="txt-regular-mobile destacado-regular text-left text-center-mobile mb-16-mobile w-50-desktop">
                <Translator text={text.EXPERTISE.EXCELLENCE.SECOND.BAJADA} />
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
                  {text.EXPERTISE.EXCELLENCE.SECOND.BUTTON}
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
              <p className="txt-regular-mobile destacado-regular text-left text-center-mobile mb-16-mobile w-50-desktop">
                <Translator text={text.EXPERTISE.EXCELLENCE.THIRD.BAJADA} />
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
                  <Translator text={text.EXPERTISE.EXCELLENCE.THIRD.BUTTON} />
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
