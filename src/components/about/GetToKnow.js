import React from "react";
import Container from "../base/Container";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "../../styles/slider.css";
import { CorteDesktop, CorteMobile } from "../base/Cortes";
import {
  StyledContainer,
  Row,
  Column,
  Card,
  Icon,
  ColumnDesktop,
} from "./GetToKnowComp";
import { group, members } from "./Members";

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

        {group(members, 4).map((children) => {
          return (
            <ColumnDesktop>
              {children.map((x, i) => (
                <Card>
                  <div className="info">
                    <span className="punteo-desktop">{x.country}</span>
                    <span className="destacado-bold">
                      {x.name}
                      <br />
                      {x.lastname}
                    </span>
                    <span className="texto-regular-bold">
                      {x.job}
                      {x?.job_last ? (
                        <>
                          <br />
                          {x?.job_last}
                        </>
                      ) : (
                        <>
                          <br />
                          <br />
                        </>
                      )}
                    </span>
                  </div>
                  <Icon src={x.image} alt="icon" />
                </Card>
              ))}
            </ColumnDesktop>
          );
        })}
      </Container>

      {/* mobile */}
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={0}
        modules={[Pagination]}
        className="mySwiper member position-mobile d-none-desktop"
      >
        {group(members, 3).map((children) => {
          return (
            <SwiperSlide>
              <Column>
                {children.map((x, i) => (
                  <Card>
                    <div className="info">
                      <span className="destacados-mobile text-center-mobile">
                        {x.country}
                      </span>
                      <span className="h3-mobile text-center-mobile">
                        {x.name}
                        <br />
                        {x.lastname}
                      </span>
                      <span className="txt-mobile text-center-mobile">
                        {x.job}
                        {x?.job_last ? (
                          <>
                            <br />
                            {x?.job_last}
                          </>
                        ) : (
                          <>
                            <br />
                            <br />
                          </>
                        )}
                      </span>
                    </div>
                    <Icon src={x.image} alt="icon" />
                  </Card>
                ))}
              </Column>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StyledContainer>
  );
}

export default GetToKnow;
