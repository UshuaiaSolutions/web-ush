import React from "react";
import styled from "styled-components";
import Redes from "../Redes";
import ScrollToTop from "react-scroll-to-top";
import { CorteDesktop, CorteMobile } from "./Cortes";

const Relative = styled.div`
  z-index: 11;

  @media (min-width: 769px) {
    position: relative;
  }
`;

const ContainerTop = styled.div`
  width: calc(100% - 40px);
  padding: 20px;
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.textonegro};
  background: ${(props) => props.theme.fondo};
  align-items: center;
`;

const Container = styled.div`
  width: calc(100% - 120px);
  padding: 67px 60px;
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.textonegro};
  color: ${(props) => props.theme.fondo};
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 55px 19px;
    width: calc(100% - 38px);
  }

  @media (min-width: 1500px) {
    padding: 55px 150px;
    width: calc(100% - 300px);
  }
`;

const Content = styled.div`
  @media (min-width: 769px) and (max-width: 1499px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  @media (min-width: 1500px) {
    width: 100%;
    max-width: 1700px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
`;

const ContainerText = styled.div`
  max-width: 517px;

  @media (max-width: 1024px) {
    max-width: 500px;
    text-align: center;
    width: fit-content;
    flex-direction: column-reverse;
    display: flex;
  }
`;

const ContainerRedesFooter = styled.div`
  display: flex;
  margin-top: 45px;

  @media (max-width: 1024px) {
    margin-top: 0;
    margin-bottom: 30px;
    justify-content: space-evenly;
  }
`;

const Red = styled.p`
  margin-right: 20px;
  text-decoration: underline;

  @media (max-width: 1024px) {
    font-size: 10px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0em;
    margin-right: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const ColumnSecond = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 1024px) {
    align-items: center;
  }
`;

const Logo = styled.img`
  width: 270px;
  height: 190px;
  object-fit: cover;

  @media (max-width: 1024px) {
    height: auto;
    width: 158px;
  }
`;

const Iso = styled.img`
  width: 126px;
  height: 60px;

  @media (max-width: 1024px) {
    height: auto;
    width: 46px;
  }
`;

const Arrow = styled.img`
  height: 18px;

  @media (max-width: 1024px) {
    height: auto;
    width: 7px;
    image-rendering: pixelated;
  }
`;

const ContainerRed = styled.a`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.fondo};
  text-decoration: none;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const RedImage = styled.img`
  width: 30px;
  height: 30px;

  @media (max-width: 1024px) {
    width: 18px;
    height: 18px;
    margin-bottom: 5px;
  }
`;

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
                <span>Back to top</span>
              </>
            }
          />
        </ContainerTop>
        <Container>
          <Content>
            <ContainerText>
              <p className="texto-regular txt-minimo-mobile text-center-mobile mb-20-mobile">
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
                    src="/icons/instagram-blanco.png"
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
                    src="/icons/linkedin-blanco.png"
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
                    src="/icons/facebook-blanco.png"
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
                    src="/icons/youtube-blanco.png"
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
              <span className="texto-regular mb-30">GET IN TOUCH</span>
              <span className="texto-regular">USH PEOPLE</span>
            </Column>
            <ColumnSecond>
              <Logo src="/logo-footer.png" alt="Logo ushuaia" />
              <Iso src="/iso-footer.png" alt="ISO" />
            </ColumnSecond>
          </Content>
        </Container>
      </Relative>
    </>
  );
}

export default Footer;
