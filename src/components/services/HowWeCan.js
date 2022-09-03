import React from "react";
import Container from "../base/Container";
import { CorteDesktop, CorteMobile } from "../base/Cortes";
import { StyledContainer, Image, Column, ContentDesktop } from "./HowWeCanComp";

function HowWeCan() {
  return (
    <StyledContainer>
      <Container>
        <ContentDesktop>
          <div>
            <h1 className="h2-mobile h2-web mb-40-mobile text-center-mobile">
              How we can
              <CorteMobile />
              <CorteDesktop /> <u>make it happen</u>
            </h1>
            <Image src="/illustration-why.png" alt="Illustration" />
          </div>
          <div className="desktop-chico-exacto">
            <Column>
              <h3 className="h3-mobile h3-web mb-10-mobile mb-20 resaltado resaltado-mobile">
                01&ensp;&ensp;You tell us what you need
              </h3>
              <p className="txt-regular-mobile texto-regular mb-40-mobile">
                We can discuss together your goals, target audiences, scope of
                <CorteDesktop /> the project, software needed, and more. We can
                adapt to any
                <CorteDesktop /> technology, platform or process you already
                use.
              </p>
            </Column>
            <Column>
              <h3 className="h3-mobile h3-web mb-10-mobile mb-20 resaltado resaltado-mobile">
                02&ensp;&ensp;We manage your project
              </h3>
              <p className="txt-regular-mobile texto-regular mb-40-mobile">
                We have the capacity to build and maintain
                <CorteMobile /> on-site dedicated teams for your content
                <CorteMobile /> types and required tools. We can handle
                <CorteMobile /> projects of any size thanks to the committed
                <CorteMobile /> work of our project managers.
              </p>
            </Column>
            <Column>
              <h3 className="h3-mobile h3-web mb-10-mobile mb-20 resaltado resaltado-mobile">
                03&ensp;&ensp;Your project is ready
              </h3>
              <p className="txt-regular-mobile texto-regular mb-40-mobile">
                As an ISO certified language service
                <CorteMobile /> company, we ensure that our services meet
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
