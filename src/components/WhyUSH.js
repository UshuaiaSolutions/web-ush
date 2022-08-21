import React from "react";
import styled from "styled-components";
import BotonSecundario from "./base/BotonSecundario";
import Container from "./base/Container";
import { CorteDesktop, CorteMobile } from "./base/Cortes";

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

const Image = styled.img`
  width: 647px;
  max-width: 50%;
`;

const Content = styled.div`
  @media (min-width: 1025px) {
    display: flex;
    text-align: center;
    justify-content: space-between;
  }
`;

const Reverse = styled.div`
  @media (min-width: 1025px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const Areas = styled.div`
  @media (min-width: 1025px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

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
          <Image src="/illustrations/high-five.png" alt="illustration" />

          <div className="w-50">
            <h2 className="h2-web h2-mobile mb-40">Why USH?</h2>

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

            <BotonSecundario>Meet USH team</BotonSecundario>
          </div>
        </Content>
      </Container>
    </StyledContainer>
  );
}

export default WhyUSH;
