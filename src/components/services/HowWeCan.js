import React from "react";
import styled from "styled-components";
import Container from "../base/Container";

const StyledContainer = styled.div`
  padding: 20px 0 40px;
  color: ${(props) => props.theme.textonegro};
  background: ${(props) => props.theme.fondo};
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  height: 232px;
  width: 100%;
  object-fit: cover;
  margin-bottom: 35px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1025px) {
    margin-bottom: 30px;
  }
`;

const ContentDesktop = styled.div`
  @media (min-width: 1025px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;

    & > div:first-child {
      width: 35%;
    }

    & > div:last-child {
      width: 55%;
    }
  }
`;

function HowWeCan() {
  return (
    <StyledContainer>
      <Container>
        <ContentDesktop>
          <div>
            <h1 className="h2-mobile mb-40-mobile">
              How we can <u>make it happen</u>
            </h1>
            <Image src="/illustration-why.png" alt="Illustration" />
          </div>
          <div>
            <Column>
              <h3 className="h3-mobile mb-10-mobile">
                01&ensp;&ensp;You tell us what you need
              </h3>
              <p className="txt-regular-mobile mb-40-mobile">
                We can discuss together your goals, scope of the project,
                software needed, and more. We can adapt to any technology,
                platform or process you already use.
              </p>
            </Column>
            <Column>
              <h3 className="h3-mobile mb-10-mobile">
                02&ensp;&ensp;We manage your project
              </h3>
              <p className="txt-regular-mobile mb-40-mobile">
                We have the capacity to build and maintain on-site dedicated
                teams for your content types and required tools. We can handle
                projects of any size thanks to the committed work of our project
                managers.
              </p>
            </Column>
            <Column>
              <h3 className="h3-mobile mb-10-mobile">
                03&ensp;&ensp;Your project is ready
              </h3>
              <p className="txt-regular-mobile mb-40-mobile">
                As an ISO certified language service company, we ensure that our
                services meet high quality standards and are delivered on time
                at competitive rates.
              </p>
            </Column>
          </div>
        </ContentDesktop>
      </Container>
    </StyledContainer>
  );
}

export default HowWeCan;
