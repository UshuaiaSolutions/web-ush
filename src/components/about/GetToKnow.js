import React from "react";
import styled from "styled-components";
import Container from "../base/Container";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "../../styles/slider.css";

const StyledContainer = styled.div`
  padding: 40px 0;
  color: ${(props) => props.theme.textonegro};
  background: ${(props) => props.theme.fondo};
  display: flex;
  flex-direction: column;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Card = styled.div`
  width: 136px;
  height: 136px;
`;

const Icon = styled.img`
  width: 100%;
  height: 100%;
`;

function GetToKnow() {
  return (
    <StyledContainer>
      <Container>
        <h2 className="h2-mobile mb-20-mobile">Get to know USH</h2>
        <p className="txt-destacados-alta-mobile mb-40-mobile">
          Our strongest trait is teamwork! We encourage positive leadership to
          motivate our talented professionals to work together as one and
          achieve greater goals.
        </p>
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
        </Swiper>
      </Container>
    </StyledContainer>
  );
}

export default GetToKnow;
