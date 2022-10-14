import React from "react";
import Container from "../base/Container";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "../../styles/slider.css";
import { StyledContainer } from "./WorkWithUsComp";
import BotonSecundario from "../base/BotonSecundario";

function WorkWithUs() {
  return (
    <StyledContainer>
      <Swiper
        style={{
          "--swiper-navigation-color": "#393939",
        }}
        loop={true}
        slidesPerView={1.8}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={0}
        navigation={true}
        hashNavigation={{
          watchState: true,
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper work-with-us work-mobile"
      >
        <SwiperSlide>
          <img
            src="https://ushmultimedia.blob.core.windows.net/fotosushteam/IMG_9132.jpg"
            alt="USH members"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://ushmultimedia.blob.core.windows.net/fotosushteam/IMG_9129.jpeg"
            alt="USH members"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://ushmultimedia.blob.core.windows.net/fotosushteam/IMG_4352.jpg"
            alt="USH members"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://ushmultimedia.blob.core.windows.net/fotosushteam/BA%202022%2007%2015%20(1).jpg"
            alt="USH members"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://ushmultimedia.blob.core.windows.net/fotosushteam/BA%202022%2007%2015.jpg"
            alt="USH members"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://ushmultimedia.blob.core.windows.net/fotosushteam/ROS%202022%2006%2010%20(2).jpg"
            alt="USH members"
          />
        </SwiperSlide>
      </Swiper>

      <Container>
        <div className="d-flex flex-column align-center">
          <Swiper
            style={{
              "--swiper-navigation-color": "#393939",
            }}
            loop={true}
            slidesPerView={4.2}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={0}
            navigation={true}
            hashNavigation={{
              watchState: true,
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper work-with-us work-desktop"
          >
            <SwiperSlide>
              <img
                src="https://ushmultimedia.blob.core.windows.net/fotosushteam/IMG_9132.jpg"
                alt="USH members"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://ushmultimedia.blob.core.windows.net/fotosushteam/IMG_9129.jpeg"
                alt="USH members"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://ushmultimedia.blob.core.windows.net/fotosushteam/IMG_4352.jpg"
                alt="USH members"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://ushmultimedia.blob.core.windows.net/fotosushteam/BA%202022%2007%2015%20(1).jpg"
                alt="USH members"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://ushmultimedia.blob.core.windows.net/fotosushteam/BA%202022%2007%2015.jpg"
                alt="USH members"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://ushmultimedia.blob.core.windows.net/fotosushteam/ROS%202022%2006%2010%20(2).jpg"
                alt="USH members"
              />
            </SwiperSlide>
          </Swiper>
          <a
            href="https://cloud.protemos.com/vendor-app/create?token=2883715efa8d9747213570c8257c0ec3"
            className="mt-70 mt-40-mobile mb-40-mobile"
            target="_blank"
            rel="noreferrer"
          >
            <BotonSecundario>Work with us</BotonSecundario>
          </a>
        </div>
      </Container>
    </StyledContainer>
  );
}

export default WorkWithUs;
