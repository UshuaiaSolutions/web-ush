import React from "react";
import styled from "styled-components";
import BotonSecundario from "./base/BotonSecundario";
import Container from "./base/Container";

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 60px 0;

  @media (min-width: 1025px) {
    flex-direction: row;
    padding: 20px 0 50px;
  }

  @media (min-width: 1500px) {
    padding: 100px 0;
  }
`;

const Image = styled.img`
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

function Hero() {
  return (
    <Container>
      <Content>
        <div className="mb-20-mobile">
          <h1 className="h1-web hero-section-titles-mobile mb-40">
            Expand your <u>global potential</u>
          </h1>
          <p className="destacado-regular h1-mobile mb-40 mb-20-mobile">
            Specialized professionals empowered by the latest technology{" "}
            <span className="destacado-bold h1-mobile">
              to help you succeed in international markets.
            </span>
          </p>
          <BotonSecundario>Get in touch</BotonSecundario>
        </div>
        <Image src="/hero-image.png" alt="hero illustration" />
      </Content>
    </Container>
  );
}

export default Hero;
