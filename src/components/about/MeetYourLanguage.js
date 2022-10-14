import React from "react";
import { HashLink } from "react-router-hash-link";
import BotonSecundario from "../base/BotonSecundario";
import Container from "../base/Container";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "../../styles/slider.css";
import { CorteDesktop, CorteMobile } from "../base/Cortes";
import {
  StyledContainer,
  Column,
  Image,
  ContainerDesktop,
  ContainerMobile,
  Card,
  Circle,
  Icon,
} from "./MeetYourLanguageComp";

function MeetYourLanguage() {
  return (
    <StyledContainer>
      <Container>
        <Column>
          <div className="text">
            <h1 className="hero-section-titles-mobile h1-web mb-20-mobile mb-40">
              Meet your language
              <CorteDesktop />
              <CorteMobile /> <u>service partner</u>
            </h1>
            <p className="txt-regular-mobile destacado-regular mb-40-mobile mb-40 corte-exacto-desktop-chico">
              We deliver multilingual ISO certified solutions
              <CorteMobile /> to
              <CorteDesktop /> help you face and solve your global
              <CorteMobile /> challenges.
              <CorteDesktop /> We can blend linguistic,
              <CorteMobile /> technical, marketing and
              <CorteDesktop /> cultural
              <CorteMobile /> requirements to offer{" "}
              <span className="destacado-bold destacados-semibold-mobile">
                an optimized
                <CorteMobile />
                <CorteDesktop /> translation and localization solution.
              </span>
            </p>
            <HashLink smooth to="/about#contact">
              <BotonSecundario>Get in touch</BotonSecundario>
            </HashLink>
          </div>
          <Image
            src="https://ushmultimedia.blob.core.windows.net/ushwebsite/AboutHS.png"
            alt="hero illustration"
          />
        </Column>
        <Column>
          {/* <Video src="/illustration-why.png" alt="hero illustration" /> */}
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
                <Card>
                  <Circle>
                    <Icon
                      src="https://ushmultimedia.blob.core.windows.net/ushwebsite/ExpIcon.png"
                      className="first"
                      alt="icon"
                    />
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
                    <Icon
                      src="https://ushmultimedia.blob.core.windows.net/ushwebsite/InnovationIcon.png"
                      className="second"
                      alt="icon"
                    />
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
                    <Icon
                      src="https://ushmultimedia.blob.core.windows.net/ushwebsite/TeamWorkIcon.png"
                      className="third"
                      alt="icon"
                    />
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
      </Container>
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
                <Icon
                  src="https://ushmultimedia.blob.core.windows.net/ushwebsite/ExpIcon.png"
                  className="first"
                  alt="icon"
                />
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
                <Icon
                  src="https://ushmultimedia.blob.core.windows.net/ushwebsite/InnovationIcon.png"
                  className="second"
                  alt="icon"
                />
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
                <Icon
                  src="https://ushmultimedia.blob.core.windows.net/ushwebsite/TeamWorkIcon.png"
                  className="third"
                  alt="icon"
                />
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
    </StyledContainer>
  );
}

export default MeetYourLanguage;
