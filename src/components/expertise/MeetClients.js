import React from "react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../styles/slider.css";
import Container from "../base/Container";
import { CorteDesktop, CorteMobile } from "../base/Cortes";
import { StyledContainer } from "./MeetClientsComp";
import {
  Cliente1,
  Cliente10,
  Cliente11,
  Cliente12,
  Cliente2,
  Cliente3,
  Cliente4,
  Cliente5,
  Cliente6,
  Cliente7,
  Cliente8,
  Cliente9,
} from "../../assets/Clientes";

function MeetClients() {
  return (
    <StyledContainer>
      <Container>
        <h1 className="h3-mobile h2-web mb-16-mobile mb-40 text-center">
          Meet some of our clients
        </h1>
        <p className="txt-regular-mobile destacado-regular mb-16-mobile mb-80 text-center">
          Many companies and LSPs have come to
          <CorteMobile /> rely on us as an extension
          <CorteDesktop /> of their in-house
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
          {[
            <Cliente1 />,
            <Cliente2 />,
            <Cliente3 />,
            <Cliente4 />,
            <Cliente5 />,
            <Cliente6 />,
            <Cliente7 />,
            <Cliente8 />,
            <Cliente9 />,
            <Cliente10 />,
            <Cliente11 />,
            <Cliente12 />,
          ].map((e, i) => {
            return <SwiperSlide key={i}>{e}</SwiperSlide>;
          })}
        </Swiper>
      </Container>
    </StyledContainer>
  );
}

export default MeetClients;
