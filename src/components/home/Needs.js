import React from "react";
import { Pagination } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../styles/slider.css";
import Container from "../base/Container";
import BotonSecundario from "../base/BotonSecundario";
import { CorteDesktop, CorteMobile } from "../base/Cortes";
import {
  Card,
  Circle,
  ContainerDesktop,
  ContainerSwiper,
  Icon,
} from "../contacto/WhyUshComp";
import { StyledContainer, StyledLink } from "./NeedsComp";

function Needs() {
  return (
    <StyledContainer>
      <Container>
        <div className="d-flex flex-column align-center">
          <h2 className="h2-web h2-mobile">
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
                    <Icon
                      src="https://ushmultimedia.blob.core.windows.net/ushwebsite/LangIcon.png"
                      className="first"
                      alt="icon"
                    />
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
                    <Icon
                      src="https://ushmultimedia.blob.core.windows.net/ushwebsite/ContentIcon.png"
                      className="second"
                      alt="icon"
                    />
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
                    <Icon
                      src="https://ushmultimedia.blob.core.windows.net/ushwebsite/KnowHowIcon.png"
                      className="third"
                      alt="icon"
                    />
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
          <ContainerDesktop>
            <Card>
              <Circle>
                <Icon
                  src="https://ushmultimedia.blob.core.windows.net/ushwebsite/LangIcon.png"
                  className="first"
                  alt="icon"
                />
              </Circle>
              <h3 className="h3-web h3-mobile mb-30">Language services</h3>
              <p className="texto-regular txt-minimo-mobile">
                Translation, localization,
                <CorteDesktop /> transcreation, review and more.
                <CorteDesktop /> We provide customized multilingual
                <CorteDesktop /> solutions to help you reach
                <CorteDesktop /> global audiences.
              </p>
            </Card>
            <Card>
              <Circle>
                <Icon
                  src="https://ushmultimedia.blob.core.windows.net/ushwebsite/ContentIcon.png"
                  className="second"
                  alt="icon"
                />
              </Circle>
              <h3 className="h3-web h3-mobile mb-30">Content creation</h3>
              <p className="texto-regular txt-minimo-mobile">
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
                <Icon
                  src="https://ushmultimedia.blob.core.windows.net/ushwebsite/KnowHowIcon.png"
                  className="third"
                  alt="icon"
                />
              </Circle>
              <h3 className="h3-web h3-mobile mb-30">Know - how</h3>
              <p className="texto-regular txt-minimo-mobile">
                You can trust our team to steer
                <CorteDesktop /> your project from start to finish.
                <CorteDesktop /> Our translators, designers and IT
                <CorteDesktop /> professionals are trained to adapt
                <CorteDesktop /> to any technology and respond with
                <CorteDesktop /> best practices and industry standards.
              </p>
            </Card>
          </ContainerDesktop>
          <StyledLink to="/services">
            <BotonSecundario>Explore USH</BotonSecundario>
          </StyledLink>
        </div>
      </Container>
    </StyledContainer>
  );
}

export default Needs;
