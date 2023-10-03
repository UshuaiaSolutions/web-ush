import React, { useState } from "react";
import Container from "../base/Container";
import { CorteDesktop, CorteMobile } from "../base/Cortes";
import {
  StyledContainer,
  Dropdown,
  Item,
  ItemTitle,
  RowDesktop,
} from "./ExploreComp";
import BotonFlecha from "../../assets/BotonFlecha";

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
        <RowDesktop className="mb-40 mb-10-mobile">
          <h2 className="h3-mobile h2-web text-center-mobile mb-16-mobile">
            Explore how
            <CorteDesktop />
            <CorteMobile /> we can help you
          </h2>
          <p className="destacado-regular txt-regular-mobile text-center-mobile">
            We can blend linguistic, technical,
            <CorteDesktop />
            <CorteMobile /> marketing and cultural requirements
            <CorteDesktop />
            <CorteMobile /> to offer an optimized translation
            <CorteDesktop /> and
            <CorteMobile /> localization solution.
          </p>
        </RowDesktop>
        <Dropdown>
          <Item>
            <ItemTitle onClick={() => toggleSideNav("language")}>
              <h3 className="body-bold-mobile h3-web">Language Solutions</h3>
              <BotonFlecha isServices={true} isOpen={open === "language"} />
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
              <h3 className="body-bold-mobile h3-web">Project Management</h3>
              <BotonFlecha isServices={true} isOpen={open === "project"} />
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
              <h3 className="body-bold-mobile h3-web">
                Desktop Publishing
                <CorteMobile /> & Creative Visuals
              </h3>
              <BotonFlecha isServices={true} isOpen={open === "desktop"} />
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
              <h3 className="body-bold-mobile h3-web">E-Learning & Video</h3>
              <BotonFlecha isServices={true} isOpen={open === "video"} />
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
              <h3 className="body-bold-mobile h3-web">Content Creation</h3>
              <BotonFlecha isServices={true} isOpen={open === "content"} />
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
