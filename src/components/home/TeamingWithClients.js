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
import { clients, group } from "../expertise/Clients";

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
              {clients?.map((e) => {
                return (
                  <SwiperSlide>
                    <img className="clients" src={e.image_white} alt={e.name} />
                  </SwiperSlide>
                );
              })}
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
            </Swiper>
          </div>
        </div>
      </Container>
    </StyledContainer>
  );
}

export default TeamingWithClients;
