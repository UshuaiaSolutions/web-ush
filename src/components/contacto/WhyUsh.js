import React from "react";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "../../styles/slider.css";
import Container from "../base/Container";
import { CorteDesktop, CorteMobile } from "../base/Cortes";
import {
  StyledContainer,
  Card,
  Circle,
  Icon,
  ContainerSwiper,
  ContainerDesktop,
} from "./WhyUshComp";

function WhyUsh() {
  return (
    <StyledContainer>
      <Container>
        <h2 className="hero-section-alto-mobile h2-web text-left-mobile text-center">
          <u>Why USH?</u>
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
                  <Icon src="/icons/needs-4.png" alt="icon" />
                </Circle>
                <h3 className="h3-mobile mb-20-mobile mb-20">Scalability</h3>
                <p className="txt-minimo-mobile mb-20">
                  We have the capacity
                  <CorteMobile /> to build and maintain
                  <CorteMobile /> on-site dedicated teams
                  <CorteMobile /> for your account.
                </p>
                <p className="txt-minimo-mobile">
                  We specialize in mid
                  <CorteMobile /> to long-term programs
                  <CorteMobile /> that truly adapt to your
                  <CorteMobile /> needs
                </p>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <Circle>
                  <Icon src="/icons/needs-5.png" alt="icon" />
                </Circle>
                <h3 className="h3-mobile mb-20-mobile mb-20">Flexibility</h3>
                <p className="txt-minimo-mobile mb-20">
                  We can adapt to any
                  <CorteMobile />
                  technology, platform or
                  <CorteMobile />
                  process you already use.
                </p>
                <p className="txt-minimo-mobile">
                  Or, if you prefer, you
                  <CorteMobile /> can use our Customer
                  <CorteMobile /> Portal, upload the files
                  <CorteMobile /> and follow-up on the
                  <CorteMobile /> status and budget of
                  <CorteMobile /> your project with us!
                </p>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <Circle>
                  <Icon src="/icons/needs-6.png" alt="icon" />
                </Circle>
                <h3 className="h3-mobile mb-20-mobile mb-20">Experience</h3>
                <p className="txt-minimo-mobile">
                  With more than 20 years
                  <CorteMobile /> in the language services
                  <CorteMobile /> industry, we have
                  <CorteMobile /> carefully selected
                  <CorteMobile /> and trained translators,
                  <CorteMobile /> linguists, designers and
                  <CorteMobile /> IT staff to be able to
                  <CorteMobile /> respond
                  <CorteMobile /> with best practices
                  <CorteMobile /> and industry standards.
                </p>
              </Card>
            </SwiperSlide>
          </Swiper>
        </ContainerSwiper>
        <ContainerDesktop>
          <Card>
            <Circle>
              <Icon src="/icons/needs-4.png" alt="icon" />
            </Circle>
            <h3 className="h3-web h3-mobile mb-30">Scalability</h3>
            <p className="texto-regular txt-minimo-mobile mb-20">
              We have the capacity to build and
              <CorteDesktop /> maintain on-site dedicated teams
              <CorteDesktop /> for your account.
            </p>
            <p className="texto-regular txt-minimo-mobile">
              We specialize in mid to long-term
              <CorteDesktop /> programs that truly adapt to your
              <CorteDesktop /> needs
            </p>
          </Card>
          <Card>
            <Circle>
              <Icon src="/icons/needs-5.png" alt="icon" />
            </Circle>
            <h3 className="h3-web h3-mobile mb-30">Flexibility</h3>
            <p className="texto-regular txt-minimo-mobile mb-20">
              We can adapt to any technology,
              <CorteDesktop /> platform or process you already use.
            </p>
            <p className="texto-regular txt-minimo-mobile">
              Or, if you prefer, you can use our
              <CorteDesktop /> Customer Portal, upload the files and
              <CorteDesktop /> follow-up on the status and budget of
              <CorteDesktop /> your project with us!
            </p>
          </Card>
          <Card>
            <Circle>
              <Icon src="/icons/needs-6.png" alt="icon" />
            </Circle>
            <h3 className="h3-web h3-mobile mb-30">Experience</h3>
            <p className="texto-regular txt-minimo-mobile">
              With more than 20 years in the
              <CorteDesktop /> language services industry, we have
              <CorteDesktop /> carefully selected and trained
              <CorteDesktop /> translators, linguists, designers and IT
              <CorteDesktop /> staff to be able to respond
              <CorteDesktop /> with best practices and industry
              <CorteDesktop /> standards.
            </p>
          </Card>
        </ContainerDesktop>
      </Container>
    </StyledContainer>
  );
}

export default WhyUsh;
