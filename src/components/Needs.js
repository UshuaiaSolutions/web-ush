import React from "react";
import styled from "styled-components";
import { Pagination } from "swiper";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/slider.css";
import Container from "./base/Container";
import BotonSecundario from "./base/BotonSecundario";
import { CorteDesktop, CorteMobile } from "./base/Cortes";

const StyledContainer = styled.div`
  padding: 100px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.textonegro};
  width: 100%;
  color: ${(props) => props.theme.fondo};

  @media (max-width: 768px) {
    padding: 30px 0px;
    width: 100%;
  }
`;

const Card = styled.div`
  position: relative;
  background: ${(props) => props.theme.fondo};
  border: 2px solid ${(props) => props.theme.textonegro};
  border-radius: 32px;
  color: ${(props) => props.theme.textonegro};
  text-align: center;
  padding: 40px 0 30px;
  width: calc(178px - 4px);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 769px) and (max-width: 1024px) {
    border: 3px solid ${(props) => props.theme.textonegro};
    border-radius: 32px;
    width: calc(232px - 20px - 8px);
    padding: 55px 10px 75px;
  }

  @media (min-width: 1025px) and (max-width: 1499px) {
    height: calc(384px - 96px);
    width: 316px;
    border: 3px solid ${(props) => props.theme.textonegro};
    padding: 96px 0 0;

    & p {
      padding-right: 5px;
      padding-left: 5px;
    }
  }

  @media (min-width: 1500px) {
    height: calc(384px - 96px);
    width: 336px;
    border: 3px solid ${(props) => props.theme.textonegro};
    padding: 96px 0 0;
  }
`;

const Circle = styled.div`
  top: -60px;
  right: 110px;
  position: absolute;
  width: 114px;
  height: 114px;
  border: 3px solid ${(props) => props.theme.textonegro};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.fondo};

  @media (min-width: 769px) and (max-width: 1024px) {
    top: -30px;
    right: 80px;
    width: calc(56px - 4px);
    height: calc(56px - 4px);
  }

  @media (max-width: 768px) {
    width: calc(56px - 4px);
    height: calc(56px - 4px);
    top: -30px;
    right: 55px;
  }
`;

const Icon = styled.img`
  width: 68px;
  height: 68px;

  @media (max-width: 1024px) {
    width: 40px;
    height: 40px;
  }
`;

const ContainerSwiper = styled.div`
  margin: 0px 0 20px;
  display: block;
  width: 100%;

  @media (min-width: 769px) and (max-width: 1024px) {
    height: 300px;
  }

  @media (min-width: 1025px) {
    display: none;
  }
`;

const ContentDesktop = styled.div`
  display: none;

  @media (min-width: 1025px) {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    margin: 64px 0;
  }
`;

function Needs() {
  return (
    <StyledContainer>
      <Container>
        <div className="d-flex flex-column align-center">
          <h2 className="h2-web h2-mobile mb-60 mb-20-mobile">
            We can meet <u>your needs</u>
          </h2>
          <ContainerSwiper>
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={0}
              modules={[Pagination]}
              className="mySwiper why"
            >
              <SwiperSlide>
                <Card>
                  <Circle>
                    <Icon src="/icons/needs-1.png" alt="icon" />
                  </Circle>
                  <h3 className="h3-mobile mb-20-mobile">Language services</h3>
                  <p className="txt-minimo-mobile">
                    Translation, localization,
                    <CorteMobile /> transcreation, review and
                    <CorteMobile /> more. We provide
                    <CorteMobile /> customized multilingual
                    <CorteMobile /> solutions to help you
                    <CorteMobile /> reach global audiences.
                  </p>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card>
                  <Circle>
                    <Icon src="/icons/needs-2.png" alt="icon" />
                  </Circle>
                  <h3 className="h3-mobile mb-20-mobile">Content creation</h3>
                  <p className="txt-minimo-mobile">
                    Our creative team can
                    <CorteMobile /> help you boost your
                    <CorteMobile /> marketing strategy. We
                    <CorteMobile /> can work together with
                    <CorteMobile /> your staff to create social
                    <CorteMobile /> media content, including
                    <CorteMobile /> graphic design,
                    <CorteMobile /> copywriting and video editing.
                  </p>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card>
                  <Circle>
                    <Icon src="/icons/needs-3.png" alt="icon" />
                  </Circle>
                  <h3 className="h3-mobile mb-20-mobile">Know - how</h3>
                  <p className="txt-minimo-mobile">
                    You can trust our team
                    <CorteMobile /> to steer your project from
                    <CorteMobile /> start to finish.
                    <CorteMobile /> Our translators, designers
                    <CorteMobile /> and IT professionals are
                    <CorteMobile /> trained to adapt to any
                    <CorteMobile /> technology and respond with
                    <CorteMobile /> best practices and
                    <CorteMobile /> industry standards.
                  </p>
                </Card>
              </SwiperSlide>
            </Swiper>
          </ContainerSwiper>
          <ContentDesktop>
            <Card>
              <Circle>
                <Icon src="/icons/needs-1.png" alt="icon" />
              </Circle>
              <h3 className="h3-web h3-mobile mb-30">Language services</h3>
              <p className="texto-regular txt-minimo-mobile px-15">
                Translation, localization,
                <CorteDesktop /> transcreation, review and more.
                <CorteDesktop /> We provide customized multilingual
                <CorteDesktop /> solutions to help you reach
                <CorteDesktop /> global audiences.
              </p>
            </Card>
            <Card>
              <Circle>
                <Icon src="/icons/needs-2.png" alt="icon" />
              </Circle>
              <h3 className="h3-web h3-mobile mb-30">Content creation</h3>
              <p className="texto-regular txt-minimo-mobile px-15">
                Our creative team can help
                <CorteDesktop /> you boost your marketing strategy.
                <CorteDesktop /> We can work together with your staff
                <CorteDesktop /> to create social media content,
                <CorteDesktop /> including graphic design,
                <CorteDesktop /> copywriting and video editing.
              </p>
            </Card>
            <Card>
              <Circle>
                <Icon src="/icons/needs-3.png" alt="icon" />
              </Circle>
              <h3 className="h3-web h3-mobile mb-30">Know - how</h3>
              <p className="texto-regular txt-minimo-mobile px-15">
                You can trust our team to steer
                <CorteDesktop /> your project from start to finish.
                <CorteDesktop /> Our translators, designers and IT
                <CorteDesktop /> professionals are trained to adapt
                <CorteDesktop /> to any technology and respond with
                <CorteDesktop /> best practices and industry standards.
              </p>
            </Card>
          </ContentDesktop>
          <BotonSecundario>Explore USH</BotonSecundario>
        </div>
      </Container>
    </StyledContainer>
  );
}

export default Needs;