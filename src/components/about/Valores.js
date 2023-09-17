import React from "react";
import Container from "../base/Container";
import { Content, Card, StyledContainer } from "./ValoresComp";
import Innovation from "../../assets/Valores/Innovation";
import Reliability from "../../assets/Valores/Reliability";
import Learning from "../../assets/Valores/Learning";
import Teamwork from "../../assets/Valores/Teamwork";
import Empathy from "../../assets/Valores/Empathy";

function Valores() {
  return (
    <StyledContainer>
      <Container>
        <h2 className="h2-web h3-mobile text-center mb-80 mb-25-mobile">
          Our Values
        </h2>
        <Content>
          <Card>
            <Innovation />
            <span className="texto-regular mt-10 txt-mobile mt-5-mobile text-center">
              Innovation
            </span>
          </Card>
          <Card>
            <Reliability />
            <span className="texto-regular mt-10 txt-mobile mt-5-mobile text-center">
              Reliability
            </span>
          </Card>
          <Card>
            <Learning />
            <span className="texto-regular mt-10 txt-mobile mt-5-mobile text-center">
              Continuous
              <br /> Learning
            </span>
          </Card>
          <Card>
            <Teamwork />
            <span className="texto-regular mt-10 txt-mobile mt-5-mobile text-center">
              Teamwork
            </span>
          </Card>
          <Card>
            <Empathy />
            <span className="texto-regular mt-10 txt-mobile mt-5-mobile text-center">
              Empathy
            </span>
          </Card>
        </Content>
      </Container>
    </StyledContainer>
  );
}

export default Valores;
