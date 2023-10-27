import React from "react";
import "../../styles/slider.css";
import Container from "../base/Container";
import BotonSecundario from "../base/BotonSecundario";
import { CorteDesktop } from "../base/Cortes";
import { Link } from "react-router-dom";
import { StyledContainer, Content } from "./BringingTogetherComp";
import Mundo from "../../assets/Mundo";
import MundoMB from "../../assets/MundoMB";

function BringingTogether() {
  return (
    <StyledContainer>
      <Container>
        <div className="container-content">
          <Content>
            <h2 className="h3-mobile h2-web mb-16-mobile mb-32 text-center-mobile">
              Bringing together Latin
              <CorteDesktop /> America and Europe
            </h2>
            <MundoMB />
            <p className="txt-regular-mobile destacado-regular mb-16-mobile mb-32 text-center-mobile">
              We're where you need us, when you need us.
              <CorteDesktop /> With a unified localization team across the
              globe,
              <CorteDesktop /> we can help you unlock your business potential in
              <CorteDesktop /> America, Europe and the whole world.
            </p>
            <Link to="/expertise">
              <BotonSecundario>Learn more about us</BotonSecundario>
            </Link>
          </Content>
          <Mundo />
        </div>
      </Container>
    </StyledContainer>
  );
}

export default BringingTogether;
