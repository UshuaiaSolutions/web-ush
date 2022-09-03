import React from "react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../styles/slider.css";
import Container from "../base/Container";
import { CorteDesktop, CorteMobile } from "../base/Cortes";
import { StyledContainer } from "./MeetClientsComp";

function MeetClients() {
  return (
    <StyledContainer>
      <Container>
        <h1 className="h2-mobile h2-web mb-20-mobile mb-40 text-left-mobile text-center">
          Meet some of
          <CorteMobile /> <u>our clients</u>
        </h1>
        <p className="destacados-semibold-mobile destacado-medium mb-40-mobile mb-70 text-left-mobile text-center">
          Many companies and LSPs have come to
          <CorteMobile /> rely on us as an extension of their
          <CorteDesktop /> in-house
          <CorteMobile /> teams. We can help you too!
        </p>
        <>
          {/* <ContainerSwiper className="mb-40">
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
        </ContainerSwiper> */}
          {/* <ContainerDesktop>
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
           <div>
            <Card>
              <Logo
                className="mb-20-mobile mb-40"
                src="/logos/Logo-client.png"
                alt="Client"
              />
              <p className="txt-mobile texto-regular text-left-mobile text-center">
                The World Bank Group is one of the largest international
                financial institutions. We've been working with the World Bank
                Group for several years, helping them localize their content.
              </p>
            </Card>
          </div> 
        </ContainerDesktop>*/}
        </>

        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img className="clients" src="/slider/primero.png" alt="brands" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="clients" src="/slider/primero.png" alt="brands" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="clients" src="/slider/primero.png" alt="brands" />
          </SwiperSlide>
        </Swiper>
      </Container>
    </StyledContainer>
  );
}

export default MeetClients;
