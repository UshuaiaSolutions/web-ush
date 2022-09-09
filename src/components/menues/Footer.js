import React from "react";
import Redes from "./Redes";
import ScrollToTop from "react-scroll-to-top";
import { CorteDesktop, CorteMobile } from "../base/Cortes";
import {
  Relative,
  ContainerTop,
  Container,
  Content,
  ContainerText,
  ContainerRedesFooter,
  Red,
  Column,
  ColumnSecond,
  Logo,
  Iso,
  Arrow,
  ContainerRed,
  RedImage,
} from "./FooterComp";

function Footer() {
  return (
    <>
      <Redes />
      <Relative>
        <ContainerTop>
          <ScrollToTop
            smooth
            component={
              <>
                <Arrow src="/arrow-up.png" alt="arrow up" className="me-5" />
                <span className="underline-mobile">Back to top</span>
              </>
            }
          />
        </ContainerTop>
        <Container>
          <Content>
            <ContainerText>
              <p className="texto-regular txt-minimo-mobile text-center-mobile text-left mb-20-mobile">
                We're committed to protecting your privacy.
                <CorteMobile /> The information
                <CorteDesktop /> you provide will only be used
                <CorteMobile /> to respond to your inquiry.
                <br />
                <br />
                Ushuaia Solutions is an ISO certified language services
                <CorteMobile /> company
                <CorteDesktop /> with more than 20 years' experience.
                <CorteMobile /> We can be reached at our
                <CorteDesktop /> offices in Latin America and Europe.
              </p>
              <ContainerRedesFooter>
                <ContainerRed
                  href="https://www.instagram.com/ushuaiasolutions/"
                  target="_blank"
                >
                  <RedImage
                    className="object-scale me-5 me-0-mobile"
                    src="https://ushmultimedia.blob.core.windows.net/ushwebsite/Instagram.png"
                    alt="instagram"
                  />
                  <Red>Instagram</Red>
                </ContainerRed>
                <ContainerRed
                  href="https://www.linkedin.com/company/ushuaia-solutions/"
                  target="_blank"
                >
                  <RedImage
                    className="object-scale me-5 me-0-mobile"
                    src="https://ushmultimedia.blob.core.windows.net/ushwebsite/Linkedin.png"
                    alt="linkedin"
                  />
                  <Red>Linked In</Red>
                </ContainerRed>
                <ContainerRed
                  href="https://www.facebook.com/UshuaiaSolutions"
                  target="_blank"
                >
                  <RedImage
                    className="object-scale me-5 me-0-mobile"
                    src="https://ushmultimedia.blob.core.windows.net/ushwebsite/Facebook.png"
                    alt="facebook"
                  />
                  <Red>Facebook</Red>
                </ContainerRed>
                <ContainerRed
                  href="https://www.youtube.com/channel/UCexqpO701H7nI72dplSkjaw"
                  target="_blank"
                >
                  <RedImage
                    className="object-scale me-5 me-0-mobile"
                    src="https://ushmultimedia.blob.core.windows.net/ushwebsite/Youtube.png"
                    alt="youtube"
                  />
                  <Red>Youtube</Red>
                </ContainerRed>
              </ContainerRedesFooter>
            </ContainerText>
            <Column>
              <span className="texto-regular mb-30">HOME</span>
              <span className="texto-regular mb-30">ABOUT</span>
              <span className="texto-regular mb-30">SERVICES</span>
              <span className="texto-regular mb-30">EXPERTISE</span>
              <span className="texto-regular">GET IN TOUCH</span>
            </Column>
            <ColumnSecond>
              <Logo
                src="https://ushmultimedia.blob.core.windows.net/ushwebsite/LogoUSHBajadaWhite.png"
                alt="Logo ushuaia"
              />
              <Iso
                src="https://ushmultimedia.blob.core.windows.net/ushwebsite/LogoISO.png"
                alt="ISO"
              />
            </ColumnSecond>
          </Content>
        </Container>
      </Relative>
    </>
  );
}

export default Footer;
