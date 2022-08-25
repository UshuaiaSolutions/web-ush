import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BotonSecundario from "../base/BotonSecundario";
import Container from "../base/Container";
import { CorteDesktop, CorteMobile } from "../base/Cortes";

const StyledContainer = styled.div`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.fondo};

  @media (min-width: 1500px) {
    padding: 100px 0;
  }
`;

const ImageDesktop = styled.img`
  display: none;

  @media (min-width: 769px) {
    width: 647px;
    max-width: 50%;
    display: block;
  }
`;

const ImageMobile = styled.img`
  width: 100%;
  height: auto;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Content = styled.div`
  @media (min-width: 769px) {
    display: flex;
    text-align: center;
    justify-content: space-between;
  }
  @media (min-width: 1025px) and (max-width: 1499px) {
    & .corte-exacto-desktop-medio {
      min-width: 526px;
    }
  }
`;

const Reverse = styled.div`
  @media (min-width: 769px) {
    display: flex;
    flex-direction: column-reverse;
    margin-top: 40px;
  }
`;

const Areas = styled.div`
  @media (min-width: 769px) and (max-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    & p {
      margin: 0 50px 30px;
    }
  }

  @media (min-width: 1025px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    & p {
      margin: 0 20px 30px;
    }
  }

  @media (min-width: 1500px) {
    & p {
      margin: 0 40px 30px;
    }
  }
`;

function WhyUSH() {
  return (
    <StyledContainer>
      <Container>
        <Content>
          <ImageDesktop src="/illustrations/high-five.png" alt="illustration" />

          <div className="w-50-desktop-grande w-50-desktop-medio corte-exacto-desktop-medio">
            <h2 className="h2-web h2-mobile mb-40 mb-0-mobile underline-mobile">
              Why USH?
            </h2>

            <ImageMobile
              src="/illustrations/high-five.png"
              alt="illustration"
            />

            <Reverse>
              <Areas>
                <p className="extra-dest-mobile h3-mayus resaltado-underline mb-20">
                  Experience
                </p>
                <p className="extra-dest-mobile h3-mayus resaltado-underline mb-20">
                  Innovation
                </p>
                <p className="extra-dest-mobile h3-mayus resaltado-underline mb-40">
                  Team work
                </p>
              </Areas>

              <p className="txt-regular-mobile destacado-regular mb-40">
                We offer a unique combination of
                <CorteDesktop />
                <CorteMobile /> technological innovation and professional
                <CorteDesktop />
                <CorteMobile /> expertise to help you solve multilingual
                <CorteDesktop />
                <CorteMobile /> challenges. But our strongest trait is
                <CorteDesktop />
                <CorteMobile /> teamwork! We encourage positive
                <CorteDesktop />
                <CorteMobile /> leadership to motivate our talented
                <CorteDesktop />
                <CorteMobile /> professionals to work together as one
                <CorteDesktop /> and
                <CorteMobile /> achieve greater goals.
              </p>
            </Reverse>

            <Link to="/about">
              <BotonSecundario>Meet USH team</BotonSecundario>
            </Link>
          </div>
        </Content>
      </Container>
    </StyledContainer>
  );
}

export default WhyUSH;
