import React from "react";
import styled from "styled-components";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "../../styles/slider.css";
import Container from "../base/Container";
import { CorteDesktop, CorteMobile } from "../base/Cortes";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.fondo};
  width: 100%;
  color: ${(props) => props.theme.textonegro};
  padding: 50px 0px;

  @media (min-width: 1025px) {
    padding: 90px 0;
  }

  @media (min-width: 1500px) {
    padding: 100px 0;
  }
`;

const Card = styled.div`
  background: ${(props) => props.theme.fondo};
  border: 2px solid ${(props) => props.theme.textonegro};
  border-radius: 32px;
  color: ${(props) => props.theme.textonegro};
  text-align: center;
  width: calc(178px - 4px);
  height: 200px;
  padding: 40px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (min-width: 769px) and (max-width: 1024px) {
    border: 3px solid ${(props) => props.theme.textonegro};
    border-radius: 32px;
    height: calc(404px - 75px - 6px);
    width: calc(232px - 20px - 8px);
    padding: 75px 10px 0;
  }

  @media (min-width: 1025px) {
    border: 3px solid ${(props) => props.theme.textonegro};
    border-radius: 32px;
    height: calc(404px - 95px - 6px);
    width: calc(342px - 6px);
    padding: 95px 0 0;
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

  @media (max-width: 768px) {
    width: calc(56px - 4px);
    height: calc(56px - 4px);
    top: -30px;
    right: 60px;
    border: 2px solid ${(props) => props.theme.textonegro};
  }

  @media (min-width: 769px) and (max-width: 1025px) {
    top: -60px;
    right: 50px;
  }
`;

const Icon = styled.img`
  width: 68px;
  height: 68px;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const ContainerSwiper = styled.div`
  display: none;

  @media (max-width: 1215px) {
    display: block;
    width: 100%;
  }
`;

const ContainerDesktop = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 125px;

  @media (max-width: 1215px) {
    display: none;
  }
`;

function WhyUsh() {
  return (
    <StyledContainer>
      <Container>
        <h2 className="hero-section-alto-mobile h2-web text-left-mobile text-center mb-60">
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
                <h3 className="h3-mobile mb-20-mobile">Scalability</h3>
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
                <h3 className="h3-mobile mb-20-mobile">Flexibility</h3>
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
                <h3 className="h3-mobile mb-20-mobile">Experience</h3>
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
            <h3 className="h3-web mb-30">Scalability</h3>
            <p className="texto-regular mb-20">
              We have the capacity to build and
              <CorteDesktop /> maintain on-site dedicated teams
              <CorteDesktop /> for your account.
            </p>
            <p className="texto-regular">
              We specialize in mid to long-term
              <CorteDesktop /> programs that truly adapt to your
              <CorteDesktop /> needs
            </p>
          </Card>
          <Card>
            <Circle>
              <Icon src="/icons/needs-5.png" alt="icon" />
            </Circle>
            <h3 className="h3-web mb-30">Flexibility</h3>
            <p className="texto-regular mb-20">
              We can adapt to any technology,
              <CorteDesktop /> platform or process you already use.
            </p>
            <p className="texto-regular">
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
            <h3 className="h3-web mb-30">Experience</h3>
            <p className="texto-regular">
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
