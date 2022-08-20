import React, { useState } from "react";
import styled from "styled-components";
import Container from "../base/Container";

const StyledContainer = styled.div`
  padding: 60px 0;
  color: ${(props) => props.theme.textonegro};
  background: ${(props) => props.theme.verdeush};
  display: flex;
  flex-direction: column;

  @media (min-width: 1025px) {
    padding: 125px 0;
  }

  @media (min-width: 1500px) {
    padding: 100px 0;
  }
`;

const Dropdown = styled.div`
  background: ${(props) => props.theme.fondo};
  border-radius: 32px;
  padding: 15px 0;

  @media (min-width: 1025px) {
    padding: 30px 0;
  }
`;

const Item = styled.div`
  padding: 10px 0;
  width: calc(100% - 36px);
  margin: 0 auto;
  border-bottom: 2px solid ${(props) => props.theme.textonegro};
  transition: all 0.3s linear;

  &:last-child {
    border-bottom: none;
  }

  @media (min-width: 1025px) {
    padding: 20px 50px;
    width: calc(100% - 150px);
  }
`;

const ItemTitle = styled.div`
  height: 36px;
  display: flex;
  justify-content: space-between;

  & h3 {
    width: 80%;
  }
`;

const IconToggle = styled.img`
  height: 16px;
  width: 16px;
  -moz-transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  transition: all 0.3s linear;
  -moz-transform: ${(props) => (props.isOpen ? "rotate(45deg)" : "")};
  -webkit-transform: ${(props) => (props.isOpen ? "rotate(45deg)" : "")};
  transform: ${(props) => (props.isOpen ? "rotate(45deg)" : "")};
`;

const RowDesktop = styled.div`
  @media (min-width: 1025px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;

    & p {
      width: 50%;
    }
  }
`;

function Explore() {
  const [open, setOpen] = useState(false);

  const toggleSideNav = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <StyledContainer>
      <Container>
        <RowDesktop>
          <h2 className="h2-mobile h2-web mb-40-mobile">
            Explore how
            <br />
            <u>we can help you</u>
          </h2>
          <p className="destacado-medium d-none-mobile">
            We can blend linguistic, technical, marketing and cultural
            requirements to offer an optimized translation and localization
            solution.
          </p>
        </RowDesktop>
        <Dropdown>
          <Item>
            <ItemTitle>
              <h3 className="h3-mobile">LANGUAGE SOLUTIONS</h3>
              <IconToggle
                onClick={() => toggleSideNav()}
                isOpen={open}
                src="/icons/Toggle.png"
                alt="Show information"
              />
            </ItemTitle>
            {open && (
              <p className="txt-mobile texto-regular">
                Translation, Localization or Transcreation. We specialize in
                software localization and translation of corporate content.
                Specific services include machine translation post-editing,
                translation, review, proofreading and language testing.
              </p>
            )}
          </Item>
          <Item>
            <ItemTitle>
              <h3 className="h3-mobile">PROJECT MANAGEMENT</h3>
              <IconToggle
                onClick={() => toggleSideNav()}
                isOpen={open}
                src="/icons/Toggle.png"
                alt="Show information"
              />
            </ItemTitle>
            {open && (
              <p className="txt-mobile texto-regular">
                You can trust our team to steer your project from start to
                finish: from source evaluation, quoting and planning to quality
                assurance, our Team Leaders are ready to take good care of
                projects of any size, from large turn-key projects to agile
                language services.
              </p>
            )}
          </Item>
          <Item>
            <ItemTitle>
              <h3 className="h3-mobile">
                DESKTOP PUBLISHING AND CREATIVE VISUALS
              </h3>
              <IconToggle
                onClick={() => toggleSideNav()}
                isOpen={open}
                src="/icons/Toggle.png"
                alt="Show information"
              />
            </ItemTitle>
            {open && (
              <p className="txt-mobile texto-regular">
                We offer multilingual desktop publishing in a wide range of
                suites, but also original design for your campaigns, including
                illustration, photography and infographics!
              </p>
            )}
          </Item>
          <Item>
            <ItemTitle>
              <h3 className="h3-mobile">E-LEARNING AND VIDEO</h3>
              <IconToggle
                onClick={() => toggleSideNav()}
                isOpen={open}
                src="/icons/Toggle.png"
                alt="Show information"
              />
            </ItemTitle>
            {open && (
              <p className="txt-mobile texto-regular">
                We can help prepare and format your e-learning content and
                localize on-screen text for your video content
              </p>
            )}
          </Item>
          <Item>
            <ItemTitle>
              <h3 className="h3-mobile">CONTENT CREATION</h3>
              <IconToggle
                onClick={() => toggleSideNav()}
                isOpen={open}
                src="/icons/Toggle.png"
                alt="Show information"
              />
            </ItemTitle>
            {open && (
              <p className="txt-mobile texto-regular">
                We work with our customers' marketing team to create social
                media content in Spanish and Portuguese and deliver a unified
                brand message in Brazil and the rest of Latin America and the
                US!
              </p>
            )}
          </Item>
        </Dropdown>
      </Container>
    </StyledContainer>
  );
}

export default Explore;
