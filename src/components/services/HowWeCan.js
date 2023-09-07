import React from "react";
import Container from "../base/Container";
import { CorteDesktop, CorteMobile } from "../base/Cortes";
import { StyledContainer, Column, ContentDesktop } from "./HowWeCanComp";

function HowWeCan() {
  return (
    <StyledContainer>
      <Container>
        <ContentDesktop>
          <div>
            <h1 className="h2-mobile h2-web mb-40-mobile text-center-mobile">
              How we can
              <CorteMobile />
              <CorteDesktop /> <u>make it happen</u>
            </h1>
            {/* <Image
              src="https://ushmultimedia.blob.core.windows.net/ushwebsite/ServicesHeroSection.png"
              alt="Illustration"
            /> */}
          </div>
          <div className="desktop-chico-exacto">
            <Column>
              <h3 className="h3-mobile h3-web mb-10-mobile mb-20 resaltado resaltado-mobile">
                01&ensp;&ensp;You tell us what you need
              </h3>
              <p className="txt-regular-mobile texto-regular mb-40-mobile">
                Easier said than done? We can help you
                <CorteMobile /> reach your community
                <CorteDesktop /> with services
                <CorteMobile /> ranging from{" "}
                <span className="important-text destacados-semibold-mobile">
                  copywriting
                </span>
                ,{" "}
                <span className="important-text destacados-semibold-mobile">
                  translation
                </span>
                <CorteMobile /> and
                <CorteDesktop />{" "}
                <span className="important-text destacados-semibold-mobile">
                  transcreation
                </span>{" "}
                to{" "}
                <span className="important-text destacados-semibold-mobile">
                  multilingual
                </span>
                <CorteMobile /> customer service, engaging{" "}
                <span className="important-text destacados-semibold-mobile">
                  video
                </span>
                <CorteDesktop /> content
                <CorteMobile /> and{" "}
                <span className="important-text destacados-semibold-mobile">
                  e-learning
                </span>{" "}
                initiatives to cover
                <CorteMobile /> the language needs
                <CorteDesktop /> of your{" "}
                <span className="d-none-mobile">international</span> team.
              </p>
            </Column>
            <Column>
              <h3 className="h3-mobile h3-web mb-10-mobile mb-20 resaltado resaltado-mobile">
                02&ensp;&ensp;We make a work plan
              </h3>
              <p className="txt-regular-mobile texto-regular mb-40-mobile">
                Project-based, or on-going service,
                <CorteMobile />{" "}
                <span className="important-text destacados-semibold-mobile">
                  customized
                </span>{" "}
                and{" "}
                <span className="important-text destacados-semibold-mobile">
                  automated
                </span>
                <CorteDesktop /> as needed,
                <CorteMobile /> using the latest language and content
                <CorteMobile />{" "}
                <span className="important-text destacados-semibold-mobile">
                  technologies
                </span>
                ,
                <CorteDesktop /> we agree on what needs
                <CorteMobile /> to be done. Our{" "}
                <span className="important-text destacados-semibold-mobile">
                  multidisciplinary team
                </span>
                <CorteDesktop /> will
                <CorteMobile /> work closely with your own teams to provide
                <CorteMobile /> language and
                <CorteDesktop /> content services as you
                <CorteMobile /> need them.
              </p>
            </Column>
            <Column>
              <h3 className="h3-mobile h3-web mb-10-mobile mb-20 resaltado resaltado-mobile">
                03&ensp;&ensp;Delivery and follow-up
              </h3>
              <p className="txt-regular-mobile texto-regular mb-40-mobile">
                We ensure that our services meet high
                <CorteMobile /> quality standards and are
                <CorteDesktop /> delivered on time
                <CorteMobile /> at competitive rates. After initial delivery,
                <CorteMobile /> we
                <CorteDesktop /> work closely with your team to make sure
                <CorteMobile /> the content helps you
                <CorteDesktop /> reach your goals!
              </p>
            </Column>
          </div>
        </ContentDesktop>
      </Container>
    </StyledContainer>
  );
}

export default HowWeCan;
