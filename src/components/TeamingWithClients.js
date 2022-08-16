import React from "react";
import styled from "styled-components";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/slider.css";
import Container from "./base/Container";
import BotonSecundario from "./base/BotonSecundario";

const StyledContainer = styled.div`
  padding: 30px 0px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.lilaush};
  width: 100%;
  color: ${(props) => props.theme.fondo};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1025px) {
    flex-direction: row-reverse;
    align-items: center;
  }
`;

function TeamingWithClients() {
  return (
    <StyledContainer>
      <Container>
        <h2 className="h2-mobile h2-web mb-40-mobile">
          Teaming with <u>clients worldwide</u>
        </h2>
        <Content>
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
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
          <div>
            <p className="txt-mobile mb-40-mobile mb-40">
              Our highly esteemed client list includes partner LSPs as well as
              B2B customers who have come to rely on us as an extension of their
              in-house teams. Let us help you too!
            </p>
            <BotonSecundario>View study cases</BotonSecundario>
          </div>
        </Content>
      </Container>
    </StyledContainer>
  );
}

export default TeamingWithClients;
