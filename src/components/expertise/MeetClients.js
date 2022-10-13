import React from "react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../styles/slider.css";
import Container from "../base/Container";
import { CorteDesktop, CorteMobile } from "../base/Cortes";
import { clients, group } from "./Clients";
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

        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper teaming-with-clients"
        >
          {group(clients, 2).map((children) => {
            return (
              <SwiperSlide>
                {children.map((x, i) => (
                  <img className="clients" src={x.image_grey} alt={x.name} />
                ))}
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* MOBILE */}
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper teaming-with-clients-mobile"
        >
          {clients?.map((e) => {
            return (
              <SwiperSlide>
                <img className="clients" src={e.image_grey} alt={e.name} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </StyledContainer>
  );
}

export default MeetClients;
