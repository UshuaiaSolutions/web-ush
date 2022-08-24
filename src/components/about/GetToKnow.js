import React from "react";
import styled from "styled-components";
import Container from "../base/Container";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "../../styles/slider.css";
import { CorteDesktop, CorteMobile } from "../base/Cortes";

const StyledContainer = styled.div`
  padding: 40px 0;
  color: ${(props) => props.theme.textonegro};
  background: ${(props) => props.theme.fondo};
  display: flex;
  flex-direction: column;

  @media (min-width: 1500px) {
    padding: 0 0 100px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Card = styled.div`
  width: 136px;
  height: 136px;

  @media (min-width: 769px) {
    width: 240px;
    height: 240px;
  }
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
`;

const Row = styled.div`
  @media (min-width: 769px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 70px;
  }
`;

function GetToKnow() {
  return (
    <StyledContainer>
      <Container>
        <Row>
          <h2 className="h2-mobile h2-web mb-20-mobile">Get to know USH</h2>
          <p className="txt-destacados-alta-mobile destacado-medium mb-40-mobile w-50-desktop-grande w-50-desktop-chico">
            Our strongest trait is teamwork!
            <CorteMobile /> We encourage positive
            <CorteDesktop /> leadership to
            <CorteMobile /> motivate our talented professionals
            <CorteDesktop /> to work
            <CorteMobile /> together as one and achieve greater goals.
          </p>
        </Row>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={0}
          modules={[Pagination]}
          className="mySwiper member"
        >
          <SwiperSlide>
            <Column>
              <Card>
                <Icon src="/members/member.png" alt="icon" />
              </Card>
              <Card>
                <Icon src="/members/member.png" alt="icon" />
              </Card>
              <Card>
                <Icon src="/members/member.png" alt="icon" />
              </Card>
            </Column>
          </SwiperSlide>
          <SwiperSlide>
            <Column>
              <Card>
                <Icon src="/members/member.png" alt="icon" />
              </Card>
              <Card>
                <Icon src="/members/member.png" alt="icon" />
              </Card>
              <Card>
                <Icon src="/members/member.png" alt="icon" />
              </Card>
            </Column>
          </SwiperSlide>
          <SwiperSlide>
            <Column>
              <Card>
                <Icon src="/members/member.png" alt="icon" />
              </Card>
              <Card>
                <Icon src="/members/member.png" alt="icon" />
              </Card>
              <Card>
                <Icon src="/members/member.png" alt="icon" />
              </Card>
            </Column>
          </SwiperSlide>
          <SwiperSlide>
            <Column>
              <Card>
                <Icon src="/members/member.png" alt="icon" />
              </Card>
              <Card>
                <Icon src="/members/member.png" alt="icon" />
              </Card>
              <Card>
                <Icon src="/members/member.png" alt="icon" />
              </Card>
            </Column>
          </SwiperSlide>
          <SwiperSlide>
            <Column>
              <Card>
                <Icon src="/members/member.png" alt="icon" />
              </Card>
              <Card>
                <Icon src="/members/member.png" alt="icon" />
              </Card>
              <Card>
                <Icon src="/members/member.png" alt="icon" />
              </Card>
            </Column>
          </SwiperSlide>
        </Swiper>
      </Container>
    </StyledContainer>
  );
}

export default GetToKnow;
