import React, { useState } from "react";
import Container from "../base/Container";
import { CorteDesktop, CorteMobile } from "../base/Cortes";
import {
  StyledContainer,
  Dropdown,
  Item,
  ItemTitle,
  IconToggle,
  RowDesktop,
} from "./ExploreComp";

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
          <h2 className="h2-mobile h2-web mb-20-mobile mb-40-mobile">
            Explore how
            <CorteDesktop />
            <CorteMobile /> <u>we can help you</u>
          </h2>
          <p className="destacado-medium txt-regular-mobile d-none-mobile ancho-exacto">
            We can blend linguistic, technical,
            <CorteDesktop /> marketing and cultural requirements
            <CorteDesktop /> to offer an optimized translation
            <CorteDesktop /> and localization solution.
          </p>
        </RowDesktop>
        <Dropdown>
          <Item>
            <ItemTitle onClick={() => toggleSideNav("language")}>
              <h3 className="h3-mobile dropdown-title-web">
                LANGUAGE SOLUTIONS
              </h3>
              <IconToggle
                isOpen={open === "language"}
                src="/icons/Toggle.png"
                alt="Show information"
              />
            </ItemTitle>
            {open === "language" && (
              <p className="txt-mobile texto-regular mb-20-mobile mb-40">
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
            <ItemTitle onClick={() => toggleSideNav("project")}>
              <h3 className="h3-mobile dropdown-title-web">
                PROJECT MANAGEMENT
              </h3>
              <IconToggle
                isOpen={open === "project"}
                src="/icons/Toggle.png"
                alt="Show information"
              />
            </ItemTitle>
            {open === "project" && (
              <p className="txt-mobile texto-regular mb-20-mobile mb-40">
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
            <ItemTitle onClick={() => toggleSideNav("desktop")}>
              <h3 className="h3-mobile dropdown-title-web">
                DESKTOP PUBLISHING AND CREATIVE VISUALS
              </h3>
              <IconToggle
                isOpen={open === "desktop"}
                src="/icons/Toggle.png"
                alt="Show information"
              />
            </ItemTitle>
            {open === "desktop" && (
              <p className="txt-mobile texto-regular mb-20-mobile mb-40">
                We offer multilingual desktop publishing in
                <CorteMobile /> a wide range of suites, but also original
                <CorteMobile /> design for your
                <CorteDesktop /> campaigns, including
                <CorteMobile /> illustration, photography and infographics!
              </p>
            )}
          </Item>
          <Item>
            <ItemTitle onClick={() => toggleSideNav("video")}>
              <h3 className="h3-mobile dropdown-title-web">
                E-LEARNING AND VIDEO
              </h3>
              <IconToggle
                isOpen={open === "video"}
                src="/icons/Toggle.png"
                alt="Show information"
              />
            </ItemTitle>
            {open === "video" && (
              <p className="txt-mobile texto-regular mb-20-mobile mb-40">
                We can help prepare and format your
                <CorteMobile /> e-learning content and localize on-screen
                <CorteMobile /> text for your video
                <CorteDesktop /> content
              </p>
            )}
          </Item>
          <Item>
            <ItemTitle onClick={() => toggleSideNav("content")}>
              <h3 className="h3-mobile dropdown-title-web">CONTENT CREATION</h3>
              <IconToggle
                isOpen={open === "content"}
                src="/icons/Toggle.png"
                alt="Show information"
              />
            </ItemTitle>
            {open === "content" && (
              <p className="txt-mobile texto-regular mb-20-mobile mb-40">
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
