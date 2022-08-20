import React from "react";
import styled from "styled-components";
import { Pagination } from "swiper";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "../styles/slider.css";
import Container from "./base/Container";
import BotonSecundario from "./base/BotonSecundario";

const StyledContainer = styled.div`
  padding: 100px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.lilaush};
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
  padding: 40px 24px 30px;
  width: calc(178px - 48px - 4px);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1025px) {
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

  @media (max-width: 1100px) {
    width: 56px;
    height: 56px;
    top: -30px;
    right: 60px;
  }
`;

const Icon = styled.img`
  width: 68px;
  height: 68px;

  @media (max-width: 1100px) {
    width: 40px;
    height: 40px;
  }
`;

const ContainerSwiper = styled.div`
  margin: 40px 0;
  display: block;
  width: 100%;

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
                  <h3 className="h3-web h3-mobile mb-30 mb-20-mobile">
                    Language services
                  </h3>
                  <p className="texto-regular txt-minimo-mobile">
                    Translation, localization, transcreation, review and more.
                    We provide customized multilingual solutions to help you
                    reach global audiences.
                  </p>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card>
                  <Circle>
                    <Icon src="/icons/needs-2.png" alt="icon" />
                  </Circle>
                  <h3 className="h3-web h3-mobile mb-30 mb-20-mobile">
                    Content creation
                  </h3>
                  <p className="texto-regular txt-minimo-mobile">
                    Our creative team can help you boost your marketing
                    strategy. We can work together with your staff to create
                    social media content, including graphic design, copywriting
                    and video editing.
                  </p>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card>
                  <Circle>
                    <Icon src="/icons/needs-3.png" alt="icon" />
                  </Circle>
                  <h3 className="h3-web h3-mobile mb-30 mb-20-mobile">
                    Know - how
                  </h3>
                  <p className="texto-regular txt-minimo-mobile">
                    You can trust our team to steer your project from start to
                    finish. Our translators, designers and IT professionals are
                    trained to adapt to any technology and respond with best
                    practices and industry standards.
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
              <h3 className="h3-web mb-30">Language services</h3>
              <p className="texto-regular px-15">
                Translation, localization, transcreation, review and more. We
                provide customized multilingual solutions to help you reach
                global audiences.
              </p>
            </Card>
            <Card>
              <Circle>
                <Icon src="/icons/needs-2.png" alt="icon" />
              </Circle>
              <h3 className="h3-web mb-30">Content creation</h3>
              <p className="texto-regular px-15">
                Our creative team can help you boost your marketing strategy. We
                can work together with your staff to create social media
                content, including graphic design, copywriting and video
                editing.
              </p>
            </Card>
            <Card>
              <Circle>
                <Icon src="/icons/needs-3.png" alt="icon" />
              </Circle>
              <h3 className="h3-web mb-30">Know - how</h3>
              <p className="texto-regular px-15">
                You can trust our team to steer your project from start to
                finish. Our translators, designers and IT professionals are
                trained to adapt to any technology and respond with best
                practices and industry standards.
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
