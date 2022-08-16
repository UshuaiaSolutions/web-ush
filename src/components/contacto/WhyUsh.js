import React from "react";
import styled from "styled-components";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "../../styles/slider.css";
import Container from "../base/Container";

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
`;

const Card = styled.div`
  background: ${(props) => props.theme.fondo};
  border: 2px solid ${(props) => props.theme.textonegro};
  border-radius: 32px;
  color: ${(props) => props.theme.textonegro};
  text-align: center;
  width: calc(178px - 48px - 4px);
  height: 200px;
  padding: 40px 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (min-width: 1025px) {
    border: 3px solid ${(props) => props.theme.textonegro};
    border-radius: 32px;
    height: calc(404px - 95px - 6px);
    width: calc(342px - 60px - 8px);
    padding: 95px 30px 0;
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

  @media (max-width: 1024px) {
    width: 56px;
    height: 56px;
    top: -30px;
    right: 60px;
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
  display: none;

  @media (max-width: 1024px) {
    display: block;
    width: 100%;
  }
`;

const ContainerDesktop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 125px;

  @media (max-width: 1024px) {
    display: none;
    width: 100%;
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
                <h3 className="h3-web h3-mobile mb-30 mb-20-mobile">
                  Scalability
                </h3>
                <p className="texto-regular txt-minimo-mobile mb-20">
                  We have the capacity to build and maintain on-site dedicated
                  teams for your account.
                </p>
                <p className="texto-regular txt-minimo-mobile">
                  We specialize in mid to long-term programs that truly adapt to
                  your needs
                </p>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <Circle>
                  <Icon src="/icons/needs-5.png" alt="icon" />
                </Circle>
                <h3 className="h3-web h3-mobile mb-30 mb-20-mobile">
                  Flexibility
                </h3>
                <p className="texto-regular txt-minimo-mobile mb-20">
                  We can adapt to any technology, platform or process you
                  already use.
                </p>
                <p className="texto-regular txt-minimo-mobile">
                  Or, if you prefer, you can use our Customer Portal, upload the
                  files and follow-up on the status and budget of your project
                  with us!
                </p>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <Circle>
                  <Icon src="/icons/needs-6.png" alt="icon" />
                </Circle>
                <h3 className="h3-web h3-mobile mb-30 mb-20-mobile">
                  Experience
                </h3>
                <p className="texto-regular txt-minimo-mobile">
                  With more than 20 years in the language services industry, we
                  have carefully selected and trained translators, linguists,
                  designers and IT staff to be able to respond with best
                  practices and industry standards.
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
            <h3 className="h3-web h3-mobile mb-30 mb-20-mobile">Scalability</h3>
            <p className="texto-regular txt-minimo-mobile mb-20">
              We have the capacity to build and maintain on-site dedicated teams
              for your account.
            </p>
            <p className="texto-regular txt-minimo-mobile">
              We specialize in mid to long-term programs that truly adapt to
              your needs
            </p>
          </Card>
          <Card>
            <Circle>
              <Icon src="/icons/needs-5.png" alt="icon" />
            </Circle>
            <h3 className="h3-web h3-mobile mb-30 mb-20-mobile">Flexibility</h3>
            <p className="texto-regular txt-minimo-mobile mb-20">
              We can adapt to any technology, platform or process you already
              use.
            </p>
            <p className="texto-regular txt-minimo-mobile">
              Or, if you prefer, you can use our Customer Portal, upload the
              files and follow-up on the status and budget of your project with
              us!
            </p>
          </Card>
          <Card>
            <Circle>
              <Icon src="/icons/needs-6.png" alt="icon" />
            </Circle>
            <h3 className="h3-web h3-mobile mb-30 mb-20-mobile">Experience</h3>
            <p className="texto-regular txt-minimo-mobile">
              With more than 20 years in the language services industry, we have
              carefully selected and trained translators, linguists, designers
              and IT staff to be able to respond with best practices and
              industry standards.
            </p>
          </Card>
        </ContainerDesktop>
      </Container>
    </StyledContainer>
  );
}

export default WhyUsh;
