import React from "react";
import styled from "styled-components";
import Container from "../../components/base/Container";

const Background = styled.div`
  background-color: ${(props) => props.theme.fondo};
  color: ${(props) => props.theme.textonegro};
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 90px 0;

  & div,
  & img {
    width: 45%;
  }
`;

const NoMatch = () => {
  return (
    <Background>
      <Container>
        <Content>
          <div>
            <h1 className="hero-section-titles-mobile h1-web">
              Oops!
              <br /> That page can't be found
            </h1>
          </div>
          <img src="/illustrations/high-five.png" alt="Not found" />
        </Content>
      </Container>
    </Background>
  );
};

export default NoMatch;
