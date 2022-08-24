import React from "react";
import styled from "styled-components";
import BotonSecundario from "../base/BotonSecundario";
import Container from "../base/Container";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "../../styles/slider.css";
import { CorteDesktop, CorteMobile } from "../base/Cortes";

const StyledContainer = styled.div`
  padding: 40px 0;
  color: ${(props) => props.theme.textonegro};
  background: ${(props) => props.theme.fondo};
  display: flex;
  flex-direction: column;

  @media (min-width: 1025px) {
    padding: 80px 0 40px;
  }

  @media (min-width: 1500px) {
    padding: 100px 0;
  }
`;

const Image = styled.img`
  margin-top: 40px;
  width: 100%;
  height: 334px;
  object-fit: cover;

  @media (min-width: 769px) and (max-width: 1024px) {
    width: 303px;
  }

  @media (min-width: 1025px) {
    height: auto;
    width: 300px;
    margin-top: 0px;
  }
`;

const Card = styled.div`
  background: ${(props) => props.theme.fondo};
  border: 2px solid ${(props) => props.theme.textonegro};
  border-radius: 32px;
  color: ${(props) => props.theme.textonegro};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(178px - 4px);
  padding: 40px 0;
  position: relative;

  @media (min-width: 769px) and (max-width: 1024px) {
    width: calc(321px - 6px);
    height: calc(270px - 6px);
    padding: 0;
    justify-content: inherit;
    border: 3px solid ${(props) => props.theme.textonegro};
  }

  @media (min-width: 1025px) {
    width: calc(421px - 6px);
    height: calc(370px - 6px);
    padding: 0;
    justify-content: inherit;
    border: 3px solid ${(props) => props.theme.textonegro};
  }
`;

const Circle = styled.div`
  position: absolute;
  border: 2px solid ${(props) => props.theme.textonegro};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.fondo};
  width: calc(56px - 4px);
  height: calc(56px - 4px);
  top: -30px;
  right: 56px;

  @media (min-width: 769px) and (max-width: 1024px) {
    border: 3px solid ${(props) => props.theme.textonegro};
    width: calc(80px - 6px);
    top: -40px;
    left: 120px;
    height: calc(80px - 6px);
  }

  @media (min-width: 1025px) {
    border: 3px solid ${(props) => props.theme.textonegro};
    width: calc(100px - 6px);
    top: -55px;
    left: 125px;
    height: calc(100px - 6px);
  }
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;

  @media (min-width: 1025px) {
    width: 55px;
    height: 55px;
  }
`;

const Column = styled.div`
  @media (min-width: 769px) and (max-width: 1024px) {
    display: flex;
    justify-content: space-between;

    & .corte-exacto-desktop-chico {
      width: 373px;
    }
  }

  @media (min-width: 1025px) {
    display: flex;
    margin-bottom: 70px;
    width: 100%;
    justify-content: space-between;
  }
`;

const ContainerDesktop = styled.div`
  display: none;
  @media (min-width: 769px) and (max-width: 1024px) {
    display: flex;
    width: 425px;
    height: 400px;
  }

  @media (min-width: 1025px) {
    display: flex;
    width: 50%;
  }
`;

const ContainerMobile = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;

const Video = styled.img`
  width: 100%;

  @media (min-width: 769px) {
    width: 45%;
  }
`;

function MeetYourLanguage() {
  return (
    <StyledContainer>
      <Container>
        <Column>
          <div>
            <h1 className="hero-section-titles-mobile h1-web mb-20-mobile mb-40">
              Meet your language
              <CorteDesktop />
              <CorteMobile /> <u>service partner</u>
            </h1>
            <p className="destacados-mobile destacado-regular mb-40-mobile mb-40 corte-exacto-desktop-chico">
              We deliver multilingual ISO certified solutions
              <CorteMobile /> to help you face
              <CorteDesktop /> and solve your global
              <CorteMobile /> challenges. We can blend linguistic,
              <CorteDesktop />
              <CorteMobile /> technical, marketing and cultural
              <CorteMobile /> requirements to offer{" "}
              <span className="destacado-bold">
                an
                <CorteDesktop /> optimized
                <CorteMobile /> translation and localization solution.
              </span>
            </p>
            <BotonSecundario>Get in touch</BotonSecundario>
          </div>
          <Image src="/illustration-why.png" alt="hero illustration" />
        </Column>
        <Column>
          <Video src="/illustration-why.png" alt="hero illustration" />
          <ContainerDesktop>
            <Swiper
              spaceBetween={30}
              hashNavigation={{
                watchState: true,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiperAbout"
            >
              <SwiperSlide data-hash="slide1">
                {" "}
                <Card>
                  <Circle>
                    <Icon src="/icons/needs-1.png" alt="icon" />
                  </Circle>
                  <h3 className="h3-web h3-mobile mb-20">Experience</h3>
                  <p className="texto-regular txt-minimo-mobile text-center">
                    We know what we do. With more than 20
                    <CorteDesktop /> years in the language services industry,
                    <CorteDesktop /> we have the capacity to build and maintain
                    <CorteDesktop /> on-site dedicated teams of highly skilled
                    <CorteDesktop /> professionals for your account.
                  </p>
                </Card>
              </SwiperSlide>
              <SwiperSlide data-hash="slide2">
                <Card>
                  <Circle>
                    <Icon src="/icons/needs-2.png" alt="icon" />
                  </Circle>
                  <h3 className="h3-web h3-mobile mb-20">Innovation</h3>
                  <p className="texto-regular txt-minimo-mobile text-center">
                    We're geeks! We strategically use the latest
                    <CorteDesktop /> tech trends to help you expand your
                    <CorteDesktop /> possibilities. Plus, our flexibility
                    enables us
                    <CorteDesktop /> to adapt to any technology, platform or
                    <CorteDesktop /> process you use.
                  </p>
                </Card>
              </SwiperSlide>
              <SwiperSlide data-hash="slide3">
                <Card>
                  <Circle>
                    <Icon src="/icons/needs-3.png" alt="icon" />
                  </Circle>
                  <h3 className="h3-web h3-mobile mb-20">Teamwork</h3>
                  <p className="texto-regular txt-minimo-mobile text-center">
                    Positive leadership, empathy and honesty
                    <CorteDesktop /> are our core work values. We strongly
                    believe
                    <CorteDesktop /> the collaborative effort of a team to
                    achieve
                    <CorteDesktop /> a common goal leads to much more
                    <CorteDesktop /> effective and efficient solutions.
                    <CorteDesktop /> Better together!
                  </p>
                </Card>
              </SwiperSlide>
            </Swiper>
          </ContainerDesktop>
        </Column>
        <ContainerMobile className="pt-40-mobile">
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
                <h3 className="h3-mobile mb-10-mobile">Experience</h3>
                <p className="txt-minimo-mobile text-center">
                  We know what we do.
                  <CorteMobile /> With more than 20 years
                  <CorteMobile /> in the language services
                  <CorteMobile /> industry, we have the
                  <CorteMobile /> capacity to build and
                  <CorteMobile /> maintain on-site
                  <CorteMobile /> dedicated teams of
                  <CorteMobile /> highly skilled
                  <CorteMobile /> professionals for
                  <CorteMobile /> your account.
                </p>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <Circle>
                  <Icon src="/icons/needs-2.png" alt="icon" />
                </Circle>
                <h3 className="h3-mobile mb-10-mobile">Innovation</h3>
                <p className="txt-minimo-mobile text-center">
                  We're geeks! We
                  <CorteMobile /> strategically use the
                  <CorteMobile /> latest tech trends to help
                  <CorteMobile /> you expand your
                  <CorteMobile /> possibilities. Plus, our
                  <CorteMobile /> flexibility enables us to
                  <CorteMobile /> adapt to any technology,
                  <CorteMobile /> platform or process you use.
                </p>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <Circle>
                  <Icon src="/icons/needs-3.png" alt="icon" />
                </Circle>
                <h3 className="h3-mobile mb-10-mobile">Teamwork</h3>
                <p className="txt-minimo-mobile text-center">
                  Positive leadership,
                  <CorteMobile /> empathy and honesty are
                  <CorteMobile /> our core work values.
                  <CorteMobile /> We strongly believe the
                  <CorteMobile /> collaborative effort of
                  <CorteMobile /> a team to achieve
                  <CorteMobile /> a common goal leads to
                  <CorteMobile /> much more effective and
                  <CorteMobile /> efficient solutions.
                  <CorteMobile /> Better together!
                </p>
              </Card>
            </SwiperSlide>
          </Swiper>
        </ContainerMobile>
      </Container>
    </StyledContainer>
  );
}

export default MeetYourLanguage;
