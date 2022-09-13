import React from "react";
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../styles/slider.css";
import Container from "../base/Container";
import BotonSecundario from "../base/BotonSecundario";
import { CorteDesktop, CorteMobile } from "../base/Cortes";
import { Link } from "react-router-dom";
import { StyledContainer, Content } from "./TeamingWithClientsComp";

function TeamingWithClients() {
  return (
    <StyledContainer>
      <Container>
        <div className="container-content">
          <Content>
            <h2 className="h2-mobile h2-web mb-40-mobile">
              Teaming with
              <CorteDesktop />
              <CorteMobile /> <u>clients worldwide</u>
            </h2>

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
              <SwiperSlide>
                <img
                  className="clients"
                  src="https://ushmultimedia.blob.core.windows.net/ushwebsite/AgilentWhite.png"
                  alt="brands"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="clients"
                  src="https://ushmultimedia.blob.core.windows.net/ushwebsite/AvayaWhite.png"
                  alt="brands"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="clients"
                  src="https://ushmultimedia.blob.core.windows.net/ushwebsite/BIDWhite.png"
                  alt="brands"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="clients"
                  src="https://ushmultimedia.blob.core.windows.net/ushwebsite/EliaWhite.png"
                  alt="brands"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="clients"
                  src="https://ushmultimedia.blob.core.windows.net/ushwebsite/PacifictechWhite.png"
                  alt="brands"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="clients"
                  src="https://ushmultimedia.blob.core.windows.net/ushwebsite/RockwellWhite.png"
                  alt="brands"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="clients"
                  src="https://ushmultimedia.blob.core.windows.net/ushwebsite/SageWhite.png"
                  alt="brands"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="clients"
                  src="https://ushmultimedia.blob.core.windows.net/ushwebsite/StanfordWhite.png"
                  alt="brands"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="clients"
                  src="https://ushmultimedia.blob.core.windows.net/ushwebsite/WorldBankWhite.png"
                  alt="brands"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="clients"
                  src="https://ushmultimedia.blob.core.windows.net/ushwebsite/NTTWhite.png"
                  alt="brands"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="clients"
                  src="https://ushmultimedia.blob.core.windows.net/ushwebsite/EricssonWhite.png"
                  alt="brands"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="clients"
                  src="https://ushmultimedia.blob.core.windows.net/ushwebsite/OrciWhite.png"
                  alt="brands"
                />
              </SwiperSlide>
            </Swiper>

            <div className="mt-40">
              <p className="txt-minimo-mobile destacado-medium mb-40-mobile mb-40">
                Our highly esteemed client list includes
                <CorteDesktop /> partner
                <CorteMobile /> LSPs as well as B2B customers who
                <CorteDesktop /> have come
                <CorteMobile /> to rely on us as an extension
                <CorteDesktop /> of their in-house
                <CorteMobile /> teams. Let us help you too!
              </p>
              <Link to="/expertise">
                <BotonSecundario>View study cases</BotonSecundario>
              </Link>
            </div>
          </Content>
          <div className="second-col">
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
              <SwiperSlide>
                <img
                  className="clients"
                  src="https://ushmultimedia.blob.core.windows.net/ushwebsite/AgilentWhite.png"
                  alt="brands"
                />
                <img
                  className="clients"
                  src="https://ushmultimedia.blob.core.windows.net/ushwebsite/AvayaWhite.png"
                  alt="brands"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="clients"
                  src="https://ushmultimedia.blob.core.windows.net/ushwebsite/BIDWhite.png"
                  alt="brands"
                />
                <img
                  className="clients"
                  src="https://ushmultimedia.blob.core.windows.net/ushwebsite/EliaWhite.png"
                  alt="brands"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="clients"
                  src="https://ushmultimedia.blob.core.windows.net/ushwebsite/PacifictechWhite.png"
                  alt="brands"
                />
                <img
                  className="clients"
                  src="https://ushmultimedia.blob.core.windows.net/ushwebsite/RockwellWhite.png"
                  alt="brands"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="clients"
                  src="https://ushmultimedia.blob.core.windows.net/ushwebsite/SageWhite.png"
                  alt="brands"
                />
                <img
                  className="clients"
                  src="https://ushmultimedia.blob.core.windows.net/ushwebsite/StanfordWhite.png"
                  alt="brands"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="clients"
                  src="https://ushmultimedia.blob.core.windows.net/ushwebsite/WorldBankWhite.png"
                  alt="brands"
                />
                <img
                  className="clients"
                  src="https://ushmultimedia.blob.core.windows.net/ushwebsite/NTTWhite.png"
                  alt="brands"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="clients"
                  src="https://ushmultimedia.blob.core.windows.net/ushwebsite/EricssonWhite.png"
                  alt="brands"
                />
                <img
                  className="clients"
                  src="https://ushmultimedia.blob.core.windows.net/ushwebsite/OrciWhite.png"
                  alt="brands"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </Container>
    </StyledContainer>
  );
}

export default TeamingWithClients;
