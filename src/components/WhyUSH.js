import React from "react";
import styled from "styled-components";
import BotonSecundario from "./base/BotonSecundario";
import Container from "./base/Container";

const StyledContainer = styled.div`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.verdeush};

  @media (min-width: 1500px) {
    padding: 100px 0;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Content = styled.div`
  @media (min-width: 1025px) {
    display: flex;
    text-align: center;
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
        <h2 className="h2-web h2-mobile mb-40">Why USH?</h2>

        <Content>
          <Image src="/illustrations/high-five.png" alt="illustration" />

          <div>
            <Reverse>
              <Areas>
                <p className="extra-dest-mobile h3-mayus mb-20">Experience</p>
                <p className="extra-dest-mobile h3-mayus mb-20">Innovation</p>
                <p className="extra-dest-mobile h3-mayus mb-40">Team work</p>
              </Areas>

              <p className="texto-regular txt-regular-mobile mb-40">
                We offer a unique combination of technological innovation and
                professional expertise to help you solve multilingual
                challenges. But our strongest trait is teamwork! We encourage
                positive leadership to motivate our talented professionals to
                work together as one and achieve greater goals.
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
