import React from "react";
import styled from "styled-components";
import Container from "../base/Container";
import { CorteDesktop, CorteMobile } from "../base/Cortes";

const StyledContainer = styled.div`
  padding: 20px 0 40px;
  color: ${(props) => props.theme.textonegro};
  background: ${(props) => props.theme.fondo};
  display: flex;
  flex-direction: column;

  @media (min-width: 1500px) {
    padding: 0 0 100px;
  }
`;

const Image = styled.img`
  height: 232px;
  width: 100%;
  object-fit: cover;
  margin-bottom: 35px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    margin-bottom: 30px;
  }
`;

const ContentDesktop = styled.div`
  @media (min-width: 769px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    margin-bottom: 0px;

    & .desktop-chico-exacto {
      max-width: 515px;
      width: 50%;
    }
  }

  @media (min-width: 1025px) and (max-width: 1499px) {
    margin-bottom: 0px;

    & .desktop-chico-exacto {
      max-width: 580px;
      width: 50%;
    }
  }
`;

function HowWeCan() {
  return (
    <StyledContainer>
      <Container>
        <ContentDesktop>
          <div>
            <h1 className="h2-mobile h2-web mb-40-mobile">
              How we can
              <CorteMobile />
              <CorteDesktop /> <u>make it happen</u>
            </h1>
            <Image src="/illustration-why.png" alt="Illustration" />
          </div>
          <div className="w-50-desktop-grande desktop-chico-exacto">
            <Column>
              <h3 className="h3-mobile h3-web mb-10-mobile mb-20 resaltado">
                01&ensp;&ensp;You tell us what you need
              </h3>
              <p className="txt-regular-mobile texto-regular mb-40-mobile">
                We can discuss together your goals, scope
                <CorteMobile /> of the project, software
                <CorteDesktop /> needed, and more.
                <CorteMobile /> We can adapt to any technology, platform or
                <CorteDesktop />
                <CorteMobile /> process you already use.
              </p>
            </Column>
            <Column>
              <h3 className="h3-mobile h3-web mb-10-mobile mb-20 resaltado">
                02&ensp;&ensp;We manage your project
              </h3>
              <p className="txt-regular-mobile texto-regular mb-40-mobile">
                We have the capacity to build and maintain
                <CorteMobile /> on-site dedicated teams for
                <CorteDesktop /> your content
                <CorteMobile /> types and required tools. We can handle
                <CorteMobile /> projects of any size
                <CorteDesktop /> thanks to the committed
                <CorteMobile /> work of our project managers.
              </p>
            </Column>
            <Column>
              <h3 className="h3-mobile h3-web mb-10-mobile mb-20 resaltado">
                03&ensp;&ensp;Your project is ready
              </h3>
              <p className="txt-regular-mobile texto-regular mb-40-mobile">
                As an ISO certified language service
                <CorteMobile /> company, we ensure that our services
                <CorteDesktop /> meet
                <CorteMobile /> high quality standards and are delivered on
                <CorteMobile /> time at competitive rates.
              </p>
            </Column>
          </div>
        </ContentDesktop>
      </Container>
    </StyledContainer>
  );
}

export default HowWeCan;
