import React from "react";
import Container from "../base/Container";
import { CorteDesktop } from "../base/Cortes";
import { StyledContainer } from "../services/HowWeCanComp";
import { Column, ContentDesktop, Row } from "./NeedsComp";
import IlustracionNeeds from "../../assets/Ilustracion-Needs";
import { Link } from "react-router-dom";
import BotonSecundario from "../base/BotonSecundario";

function Needs() {
  return (
    <StyledContainer>
      <Container>
        <ContentDesktop>
          <div>
            <h1 className="h3-mobile h2-web mb-16-mobile mb-32 text-center-mobile">
              We can meet your
              <CorteDesktop /> needs
            </h1>
            <p className="txt-regular-mobile destacado-regular mb-40-mobile mb-32 text-center-mobile">
              We offer a unique combination
              <CorteDesktop /> of technological innovation and professional
              <CorteDesktop /> expertise to help you solve multilingual
              <CorteDesktop /> challenges.
            </p>
            <IlustracionNeeds />
          </div>
          {/* <div className="desktop-chico-exacto">  */}
          <div className="">
            <Column>
              <h3 className="body-bold-mobile  h3-web mb-16-mobile mb-32">
                01/&ensp;&ensp;Language Services
              </h3>
              <Row>
                <p className="w-100 txt-regular-mobile destacado-regular mb-0-mobile mb-32">
                  Translation, localization,
                  <CorteDesktop /> transcreation, review and more.
                  <CorteDesktop />
                  We provide customized multilingual
                  <CorteDesktop /> solutions to help you reach
                  <CorteDesktop /> global audiences.
                </p>
              </Row>
              <Link to="/about">
                <BotonSecundario>See more</BotonSecundario>
              </Link>
            </Column>
            <Column>
              <h4 className="body-bold-mobile h3-web mb-16-mobile mb-32">
                02/&ensp;&ensp;Content Creation
              </h4>
              <Row>
                <p className="w-100 txt-regular-mobile destacado-regular mb-0-mobile mb-32">
                  Our creative team can help you boost
                  <CorteDesktop /> your marketing strategy. We can work
                  <CorteDesktop /> together with your staff to create
                  <CorteDesktop /> social media content, including
                  <CorteDesktop /> graphic design, copywriting
                  <CorteDesktop /> and video editing.
                </p>
              </Row>
              <Link to="/about">
                <BotonSecundario>See more</BotonSecundario>
              </Link>
            </Column>
            <Column>
              <h5 className="body-bold-mobile  h3-web mb-16-mobile mb-32">
                03/&ensp;&ensp;Project Management
              </h5>
              <Row>
                <p className="w-100 txt-regular-mobile destacado-regular mb-0-mobile mb-32">
                  You can trust our team to steer your
                  <CorteDesktop /> project from start to finish. Our
                  <CorteDesktop /> translators, designers and IT
                  <CorteDesktop /> professionals are trained to adapt
                  <CorteDesktop /> to any technology and respond
                  <CorteDesktop /> with best practices and industry
                  <CorteDesktop /> standards.
                </p>
              </Row>
              <Link to="/about">
                <BotonSecundario>See more</BotonSecundario>
              </Link>
            </Column>
          </div>
        </ContentDesktop>
      </Container>
    </StyledContainer>
  );
}

export default Needs;
