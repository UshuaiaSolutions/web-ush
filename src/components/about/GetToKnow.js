import React from "react";
import Container from "../base/Container";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "../../styles/slider.css";
import { CorteDesktop, CorteMobile } from "../base/Cortes";
import { StyledContainer, Row, Column, Card, Icon } from "./GetToKnowComp";

function GetToKnow() {
  return (
    <StyledContainer>
      <Container>
        <Row>
          <h2 className="h2-mobile h2-web mb-20-mobile">Get to know USH</h2>
          <p className="destacados-semibold-mobile destacado-medium mb-40-mobile w-50-desktop-grande w-50-desktop-chico">
            Our strongest trait is teamwork!
            <CorteMobile />
            <CorteDesktop /> We encourage positive leadership to
            <CorteMobile />
            <CorteDesktop /> motivate our talented professionals to work
            <CorteMobile />
            <CorteDesktop /> together as one and achieve greater goals.
          </p>
        </Row>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={0}
          modules={[Pagination]}
          className="mySwiper member d-none-mobile"
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
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={0}
        modules={[Pagination]}
        className="mySwiper member position-mobile d-none-desktop"
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
    </StyledContainer>
  );
}

export default GetToKnow;
