import React from "react";
import styled from "styled-components";
import BotonSecundario from "../base/BotonSecundario";
import Container from "../base/Container";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "../../styles/slider.css";

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

  @media (min-width: 1025px) {
    height: auto;
    width: 450px;
    margin-top: 0px;
  }
`;

const Card = styled.div`
  background: ${(props) => props.theme.fondo};
  border: 3px solid ${(props) => props.theme.textonegro};
  border-radius: 32px;
  color: ${(props) => props.theme.textonegro};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 128px;
  height: 200px;
  padding: 40px 25px 0;
  position: relative;

  @media (min-width: 1025px) {
    width: calc(320px - 34px);
    height: auto;
    max-height: 370px;
    padding: 50px 32px;
  }
`;

const Circle = styled.div`
  position: absolute;
  border: 3px solid ${(props) => props.theme.textonegro};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.fondo};
  width: 56px;
  height: 56px;
  top: -30px;
  right: 60px;

  @media (min-width: 1025px) {
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
  @media (min-width: 1025px) {
    display: flex;
    margin-bottom: 70px;
    width: 100%;
    justify-content: space-between;
  }
`;

const ContainerDesktop = styled.div`
  display: none;
  @media (min-width: 1025px) {
    display: flex;

    width: 50%;

    & .mySwiperAbout {
    }
  }
`;

const ContainerMobile = styled.div`
  @media (min-width: 1025px) {
    display: none;
  }
`;

const Video = styled.img`
  @media (min-width: 1025px) {
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
              <br />
              <u>service partner</u>
            </h1>
            <p className="destacados-mobile destacado-regular mb-40-mobile mb-40">
              We deliver multilingual ISO certified solutions
              <br /> to help you face and solve your global <br />
              challenges. We can blend linguistic, <br />
              technical, marketing and cultural <br />
              requirements to offer an optimized <br />
              translation and localization solution.
              <br />
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
                  <h3 className="h3-web mb-20">Experience</h3>
                  <p className="texto-regular text-center">
                    We know what we do. With more than 20 years in the language
                    services industry, we have the capacity to build and
                    maintain on-site dedicated teams of highly skilled
                    professionals for your account.
                  </p>
                </Card>
              </SwiperSlide>
              <SwiperSlide data-hash="slide2">
                <Card>
                  <Circle>
                    <Icon src="/icons/needs-2.png" alt="icon" />
                  </Circle>
                  <h3 className="h3-web mb-20">Innovation</h3>
                  <p className="texto-regular text-center">
                    We're geeks! We strategically use the latest tech trends to
                    help you expand your possibilities. Plus, our flexibility
                    enables us to adapt to any technology, platform or process
                    you use.
                  </p>
                </Card>
              </SwiperSlide>
              <SwiperSlide data-hash="slide3">
                <Card>
                  <Circle>
                    <Icon src="/icons/needs-3.png" alt="icon" />
                  </Circle>
                  <h3 className="h3-web mb-20">Teamwork</h3>
                  <p className="texto-regular text-center">
                    Positive leadership, empathy and honesty are our core work
                    values. We strongly believe the collaborative effort of a
                    team to achieve a common goal leads to much more effective
                    and efficient solutions. Better together!
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
                  We know what we do. With more than 20 years in the language
                  services industry, we have the capacity to build and maintain
                  on-site dedicated teams of highly skilled professionals for
                  your account.
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
                  We're geeks! We strategically use the latest tech trends to
                  help you expand your possibilities. Plus, our flexibility
                  enables us to adapt to any technology, platform or process you
                  use.
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
                  Positive leadership, empathy and honesty are our core work
                  values. We strongly believe the collaborative effort of a team
                  to achieve a common goal leads to much more effective and
                  efficient solutions. Better together!
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
