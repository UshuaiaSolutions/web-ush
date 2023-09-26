import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../styles/slider.css";

import { StyledContainer, Desktop, ContainerSwiper } from "./SomethingComp";
import { CorteMobile } from "../base/Cortes";

import Tercero from "../../assets/Blog/Tercero";
import Segundo from "../../assets/Blog/Segundo";
import Primero from "../../assets/Blog/Primero";

function Something() {
  return (
    <StyledContainer>
      <h3 className="text-center h3-mobile h3-web mb-32 mb-16-mobile">
        While you wait,
        <CorteMobile /> follow us on social media
      </h3>
      <a
        href="https://www.instagram.com/ushuaiasolutions/"
        target="_blank"
        rel="noreferrer"
      >
        <ContainerSwiper>
          <Swiper
            spaceBetween={16}
            slidesPerView={1.3}
            className="mySwiper teaming-with-clients"
          >
            <SwiperSlide>
              <Primero />
            </SwiperSlide>
            <SwiperSlide>
              <Segundo />
            </SwiperSlide>
            <SwiperSlide>
              <Tercero />
            </SwiperSlide>
          </Swiper>
        </ContainerSwiper>
        <Desktop>
          <Primero />
          <Segundo />
          <Tercero />
        </Desktop>
      </a>
    </StyledContainer>
  );
}

export default Something;
