import React, { useContext } from "react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../styles/slider.css";
import Container from "../base/Container";
import { StyledContainer } from "./MeetClientsComp";
import {
  Cliente1,
  Cliente2,
  Cliente3,
  Cliente4,
  Cliente5,
  Cliente6,
  Cliente7,
  Cliente8,
  Cliente9,
  Cliente10,
  Cliente11,
  Cliente12,
} from "../../assets/Clientes";
import { TranslationContext } from "../../assets/Translations/TranslationsProvider";
import Translator from "../../assets/Translations/Translator";

function MeetClients() {
  const { text } = useContext(TranslationContext);

  return (
    <StyledContainer>
      <Container>
        <h1 className="h3-mobile h2-web mb-16-mobile mb-40 text-center-mobile text-center">
          <Translator text={text.HOME.TEAMING.TITLE} />
        </h1>
        <p className="txt-regular-mobile destacado-regular mb-25-mobile mb-70 text-center-mobile text-center">
          <Translator text={text.HOME.TEAMING.BAJADA} />
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
