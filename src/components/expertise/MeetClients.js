import React from "react";
import styled from "styled-components";
import { Pagination } from "swiper";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../styles/slider.css";
import Container from "../base/Container";
import { CorteDesktop, CorteMobile } from "../base/Cortes";

const StyledContainer = styled.div`
  padding: 30px 0 70px;
  color: ${(props) => props.theme.textonegro};
  background: ${(props) => props.theme.fondo};
  display: flex;
  flex-direction: column;

  @media (min-width: 1500px) {
    padding: 100px 0;
  }
`;

const ContainerSwiper = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: block;
    width: 100%;
  }
`;

const Card = styled.div`
  background: ${(props) => props.theme.fondo};
  border: 2px solid ${(props) => props.theme.textonegro};
  border-radius: 21px;
  padding: 32px 24px;
  width: calc(178px - 48px);
  height: auto;
  color: ${(props) => props.theme.textonegro};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1025px) {
    border: 3px solid ${(props) => props.theme.textonegro};
    border-radius: 32px;
    padding: 80px 30px;
    max-height: 435px;
    width: calc(533px - 60px - 6px);
  }
`;

const ContainerDesktop = styled.div`
  display: none;
  @media (min-width: 1025px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`;

const Column = styled.div`
  display: none;
  @media (min-width: 1025px) {
    display: block;
  }
`;

const Logo = styled.img`
  @media (min-width: 1025px) {
    height: auto;
    width: 232px;
  }
`;

function MeetClients() {
  return (
    <StyledContainer>
      <Container>
        <h1 className="h2-mobile h2-web mb-20-mobile mb-40 text-left-mobile text-center">
          Meet some of <u>our clients</u>
        </h1>
        <p className="destacados-mobile destacado-medium mb-40-mobile mb-70 text-left-mobile text-center">
          Many companies and LSPs have come to
          <CorteMobile /> rely on us as an extension of their
          <CorteDesktop /> in-house
          <CorteMobile /> teams. We can help you too!
        </p>
        <ContainerSwiper className="mb-40">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={0}
            modules={[Pagination]}
            className="mySwiper why"
          >
            <SwiperSlide>
              <Card>
                <img
                  className="mb-20-mobile"
                  src="/logos/Logo-client.png"
                  alt="Client"
                />
                <p className="txt-mobile">
                  The World Bank Group is one of the largest international
                  financial institutions. We've been working with the World Bank
                  Group for several years, helping them localize their content.
                </p>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <img
                  className="mb-20-mobile"
                  src="/logos/Logo-client.png"
                  alt="Client"
                />
                <p className="txt-mobile">
                  Ericsson is a Swedish multinational networking and
                  telecommunications company. For them, we have translated many
                  specialized documents.
                </p>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <img
                  className="mb-20-mobile"
                  src="/logos/Logo-client.png"
                  alt="Client"
                />
                <p className="txt-mobile">
                  Ericsson is a Swedish multinational networking and
                  telecommunications company. For them, we have translated many
                  specialized documents.
                </p>
              </Card>
            </SwiperSlide>
          </Swiper>
        </ContainerSwiper>
        <ContainerDesktop>
          <Column>
            <p className="punteo-desktop mb-15">The World Bank Group</p>
            <p className="punteo-desktop mb-15">Ericsson</p>
            <p className="punteo-desktop mb-15">Rockwell Automation, Inc</p>
            <p className="punteo-desktop mb-15">BID</p>
            <p className="punteo-desktop mb-15">Avaya</p>
            <p className="punteo-desktop mb-15">Agilent Technologies, Inc</p>
            <p className="punteo-desktop mb-15">NTT</p>
            <p className="punteo-desktop mb-15">Sanford Guide</p>
            <p className="punteo-desktop mb-15">Pacifictech</p>
            <p className="punteo-desktop mb-15">ORCI</p>
            <p className="punteo-desktop mb-15">The Sage Group</p>
            <p className="punteo-desktop mb-15">Pivotal</p>
            <p className="punteo-desktop">LivePerson</p>
          </Column>
          <div className="w-50-desktop-grande">
            <Card>
              <Logo
                className="mb-20-mobile mb-40"
                src="/logos/Logo-client.png"
                alt="Client"
              />
              <p className="txt-mobile text-left-mobile text-center">
                The World Bank Group is one of the largest international
                financial institutions. We've been working with the World Bank
                Group for several years, helping them localize their content.
              </p>
            </Card>
          </div>
        </ContainerDesktop>
      </Container>
    </StyledContainer>
  );
}

export default MeetClients;
