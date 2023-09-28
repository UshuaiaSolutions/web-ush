import React from "react";
import Container from "../base/Container";
import { CorteDesktop, CorteMobile } from "../base/Cortes";
import { StyledContainer } from "../services/HowWeCanComp";
import { Column, ContentDesktop, Row } from "./NeedsComp";
import IlustracionNeeds from "../../assets/Ilustracion-Needs";
import BotonFlecha from "../../assets/BotonFlecha";

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
              <CorteDesktop />
              <CorteMobile />
              of technological innovation
              <CorteMobile /> and professional
              <CorteDesktop /> expertise to help
              <CorteMobile /> you solve multilingual
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
                  <CorteMobile />
                  <CorteDesktop /> transcreation, review and more.
                  <CorteDesktop />
                  <CorteMobile />
                  We provide customized multilingual
                  <CorteMobile />
                  <CorteDesktop /> solutions to help you reach
                  <CorteMobile />
                  <CorteDesktop />
                  global audiences.
                </p>
                <BotonFlecha isServices={false} />
              </Row>
            </Column>
            <Column>
              <h3 className="body-bold-mobile h3-web mb-16-mobile mb-32">
                02/&ensp;&ensp;Content Creation
              </h3>
              <Row>
                <p className="w-100 txt-regular-mobile destacado-regular mb-0-mobile mb-32">
                  Our creative team can help you
                  <CorteMobile /> boost
                  <CorteDesktop /> your marketing strategy.
                  <CorteMobile /> We can work
                  <CorteDesktop /> together with your
                  <CorteMobile /> staff to create
                  <CorteDesktop /> social media content,
                  <CorteMobile /> including
                  <CorteDesktop /> graphic design,
                  <CorteMobile /> copywriting
                  <CorteDesktop /> and video editing.
                </p>
                <BotonFlecha isServices={false} />
              </Row>
            </Column>
            <Column>
              <h3 className="body-bold-mobile  h3-web mb-16-mobile mb-32">
                03/&ensp;&ensp;Project Management
              </h3>
              <Row>
                <p className="w-100 txt-regular-mobile destacado-regular mb-0-mobile mb-32">
                  You can trust our team to steer
                  <CorteMobile /> your
                  <CorteDesktop /> project from start to finish.
                  <CorteMobile /> Our
                  <CorteDesktop /> translators, designers
                  <CorteMobile /> and IT
                  <CorteDesktop /> professionals are trained
                  <CorteMobile /> to adapt
                  <CorteDesktop />
                  to any technology and
                  <CorteMobile /> respond
                  <CorteDesktop />
                  with best practices and
                  <CorteMobile /> industry
                  <CorteDesktop /> standards.
                </p>
                <BotonFlecha isServices={false} />
              </Row>
            </Column>
          </div>
        </ContentDesktop>
      </Container>
    </StyledContainer>
  );
}

export default Needs;
