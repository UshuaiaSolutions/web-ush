import React from "react";
import styled from "styled-components";
import { Pagination } from "swiper";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../styles/slider.css";
import Container from "../base/Container";

const StyledContainer = styled.div`
  padding: 70px 0;
  color: ${(props) => props.theme.textonegro};
  background: ${(props) => props.theme.verdeush};
  display: flex;
  flex-direction: column;
`;

const ContainerSwiper = styled.div`
  display: none;

  @media (max-width: 1100px) {
    display: block;
    width: 100%;
  }
`;

const Card = styled.div`
  background: ${(props) => props.theme.fondo};
  border: 2px solid ${(props) => props.theme.textonegro};
  border-radius: 21px;
  padding: 32px 24px;
  width: calc(178px - 48px);
  height: auto;
  color: ${(props) => props.theme.textonegro};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    border: 3px solid ${(props) => props.theme.textonegro};
    border-radius: 32px;
    padding-top: 40px;
    width: 334px;
    height: 294px;
  }
`;

function MeetClients() {
  return (
    <StyledContainer>
      <Container>
        <h1 className="h2-mobile mb-20-mobile">
          Meet some of <br />
          <u>our clients</u>
        </h1>
        <p className="destacados-mobile mb-40-mobile">
          Many companies and LSPs have come to <br />
          rely on us as an extension of their in-house <br />
          teams. We can help you too!
        </p>
        <ContainerSwiper className="mb-40">
          <Swiper
            slidesPerView={"auto"}
            spaceBetween={0}
            modules={[Pagination]}
            className="mySwiper why"
          >
            <SwiperSlide>
              <Card>
                <img
                  className="mb-20-mobile"
                  src="/logos/Logo-client.png"
                  alt="Client"
                />
                <p className="txt-mobile">
                  The World Bank Group is one of the largest international
                  financial institutions. We've been working with the World Bank
                  Group for several years, helping them localize their content.
                </p>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <img
                  className="mb-20-mobile"
                  src="/logos/Logo-client.png"
                  alt="Client"
                />
                <p className="txt-mobile">
                  Ericsson is a Swedish multinational networking and
                  telecommunications company. For them, we have translated many
                  specialized documents.
                </p>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <img
                  className="mb-20-mobile"
                  src="/logos/Logo-client.png"
                  alt="Client"
                />
                <p className="txt-mobile">
                  Ericsson is a Swedish multinational networking and
                  telecommunications company. For them, we have translated many
                  specialized documents.
                </p>
              </Card>
            </SwiperSlide>
          </Swiper>
        </ContainerSwiper>
      </Container>
    </StyledContainer>
  );
}

export default MeetClients;
