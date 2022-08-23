import React, { useState } from "react";
import styled from "styled-components";
import Container from "../base/Container";
import { CorteDesktop, CorteMobile } from "../base/Cortes";

const StyledContainer = styled.div`
  padding: 60px 0;
  color: ${(props) => props.theme.textonegro};
  background: ${(props) => props.theme.verdeush};
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 60px 0;
  }

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

  @media (min-width: 769px) {
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

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 20px 30px;
    width: calc(100% - 135px);
  }

  @media (min-width: 1500px) {
    padding: 20px 80px;
    width: calc(1050px - 160px);
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
  @media (min-width: 769px) and (max-width: 1024px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }

  @media (min-width: 1025px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;
  }
`;

function Explore() {
  const [open, setOpen] = useState("none");

  const toggleSideNav = (id) => {
    if (open === id) {
      setOpen("none");
    } else {
      setOpen(id);
    }
  };

  return (
    <StyledContainer>
      <Container>
        <RowDesktop>
          <h2 className="h2-mobile h2-web mb-40-mobile">
            Explore how
            <CorteDesktop />
            <CorteMobile /> <u>we can help you</u>
          </h2>
          <p className="destacado-medium txt-regular-mobile d-none-mobile w-50-desktop-grande w-50-desktop-chico">
            We can blend linguistic, technical, marketing
            <CorteDesktop /> and cultural requirements to offer an optimized
            <CorteDesktop /> translation and localization solution.
          </p>
        </RowDesktop>
        <Dropdown>
          <Item>
            <ItemTitle>
              <h3 className="h3-mobile dropdown-title-web">
                LANGUAGE SOLUTIONS
              </h3>
              <IconToggle
                onClick={() => toggleSideNav("language")}
                isOpen={open === "language"}
                src="/icons/Toggle.png"
                alt="Show information"
              />
            </ItemTitle>
            {open === "language" && (
              <p className="txt-mobile texto-regular">
                Translation, Localization or Transcreation.
                <CorteMobile /> We specialize in software localization and
                <CorteMobile /> translation of
                <CorteDesktop /> corporate content. Specific
                <CorteMobile /> services include machine translation
                <CorteMobile /> post-editing, translation, review,
                <CorteDesktop /> proofreading
                <CorteMobile /> and language testing.
              </p>
            )}
          </Item>
          <Item>
            <ItemTitle>
              <h3 className="h3-mobile dropdown-title-web">
                PROJECT MANAGEMENT
              </h3>
              <IconToggle
                onClick={() => toggleSideNav("project")}
                isOpen={open === "project"}
                src="/icons/Toggle.png"
                alt="Show information"
              />
            </ItemTitle>
            {open === "project" && (
              <p className="txt-mobile texto-regular">
                You can trust our team to steer your project
                <CorteMobile /> from start to finish: from source evaluation,
                <CorteMobile /> quoting and
                <CorteDesktop /> planning to quality assurance,
                <CorteMobile /> our Team Leaders are ready to take good
                <CorteMobile /> care of projects of any size, from
                <CorteDesktop /> large turn-key
                <CorteMobile /> projects to agile language services.
              </p>
            )}
          </Item>
          <Item>
            <ItemTitle>
              <h3 className="h3-mobile dropdown-title-web">
                DESKTOP PUBLISHING AND CREATIVE VISUALS
              </h3>
              <IconToggle
                onClick={() => toggleSideNav("desktop")}
                isOpen={open === "desktop"}
                src="/icons/Toggle.png"
                alt="Show information"
              />
            </ItemTitle>
            {open === "desktop" && (
              <p className="txt-mobile texto-regular">
                We offer multilingual desktop publishing in
                <CorteMobile /> a wide range of suites, but also original
                <CorteMobile /> design for your
                <CorteDesktop /> campaigns, including
                <CorteMobile /> illustration, photography and infographics!
              </p>
            )}
          </Item>
          <Item>
            <ItemTitle>
              <h3 className="h3-mobile dropdown-title-web">
                E-LEARNING AND VIDEO
              </h3>
              <IconToggle
                onClick={() => toggleSideNav("video")}
                isOpen={open === "video"}
                src="/icons/Toggle.png"
                alt="Show information"
              />
            </ItemTitle>
            {open === "video" && (
              <p className="txt-mobile texto-regular">
                We can help prepare and format your
                <CorteMobile /> e-learning content and localize on-screen
                <CorteMobile /> text for your video
                <CorteDesktop /> content
              </p>
            )}
          </Item>
          <Item>
            <ItemTitle>
              <h3 className="h3-mobile dropdown-title-web">CONTENT CREATION</h3>
              <IconToggle
                onClick={() => toggleSideNav("content")}
                isOpen={open === "content"}
                src="/icons/Toggle.png"
                alt="Show information"
              />
            </ItemTitle>
            {open === "content" && (
              <p className="txt-mobile texto-regular">
                We work with our customers' marketing
                <CorteMobile /> team to create social media content in
                <CorteMobile /> Spanish and Portuguese
                <CorteDesktop /> and deliver a<CorteMobile /> unified brand
                message in Latin America, Europe
                <CorteMobile /> and the US!
              </p>
            )}
          </Item>
        </Dropdown>
      </Container>
    </StyledContainer>
  );
}

export default Explore;
