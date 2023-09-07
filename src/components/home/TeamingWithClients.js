import React from "react";
// import { Autoplay } from "swiper";
// import "swiper/css";
// import { Swiper, SwiperSlide } from "swiper/react";
import "../../styles/slider.css";
import Container from "../base/Container";
import BotonSecundario from "../base/BotonSecundario";
import { CorteDesktop, CorteMobile } from "../base/Cortes";
import { Link } from "react-router-dom";
import { StyledContainer, Content } from "./TeamingWithClientsComp";
import Mundo from "../../assets/Mundo";

function TeamingWithClients() {
  return (
    <StyledContainer>
      <Container>
        <div className="container-content">
          <Content>
            <h2 className="h3-mobile h2-web mb-16-mobile mb-32 text-center-mobile">
              Bringing together Latin
              <CorteDesktop /> America and Europe
            </h2>

            {/* MOBILE */}
            {/* <Swiper
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
                    <img className="clients" src={e.image_white} alt={e.name} />
                  </SwiperSlide>
                );
              })}
            </Swiper> */}

            <p className="txt-regular-mobile destacado-medium mb-16-mobile mb-32 text-center-mobile">
              We're where you need us, when you need us.
              <CorteMobile />
              <CorteDesktop />
              With a unified localization team across the
              <CorteMobile /> globe,
              <CorteDesktop /> we can help you unlock your business
              <CorteMobile /> potential in
              <CorteDesktop /> America, Europe
              <CorteMobile /> and the whole world.
            </p>
            <Link to="/expertise">
              <BotonSecundario>Learn more about us</BotonSecundario>
            </Link>
          </Content>
          <Mundo />
          {/* <Swiper
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
                      <img
                        className="clients"
                        src={x.image_white}
                        alt={x.name}
                      />
                    ))}
                  </SwiperSlide>
                );
              })}
            </Swiper> */}
        </div>
      </Container>
    </StyledContainer>
  );
}

export default TeamingWithClients;
