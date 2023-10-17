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
            <ItemTitle
              onClick={() => toggleSideNav("language")}
              type="button"
              tabIndex={0}
              aria-label="Clickable icon of an arrow. Click on it to unfold the description of the service."
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === "") {
                  event.preventDefault();
                  toggleSideNav("language");
                }
              }}
            >
              <h3 className="body-bold-mobile h3-web">Language Solutions</h3>
              <BotonFlecha isServices={true} isOpen={open === "language"} />
            </ItemTitle>
            {open === "language" && (
              <p className="txt-mobile texto-regular mb-0-mobile mb-40">
                We provide translation, localization, and
                <CorteMobile /> transcreation services to help you reach a
                global
                <CorteMobile /> audience. Our team
                <CorteDesktop /> of carefully selected and
                <CorteMobile /> trained native linguists leverages the latest AI
                <CorteMobile /> and NMT technologies to offer the highest
                quality
                <CorteMobile />
                <CorteDesktop /> translation services.
              </p>
            )}
          </Item>
          <Item>
            <ItemTitle
              onClick={() => toggleSideNav("project")}
              type="button"
              tabIndex={0}
              aria-label="Clickable icon of an arrow. Click on it to unfold the description of the service."
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === "") {
                  event.preventDefault();
                  toggleSideNav("project");
                }
              }}
            >
              <h3 className="body-bold-mobile h3-web">Project Management</h3>
              <BotonFlecha isServices={true} isOpen={open === "project"} />
            </ItemTitle>
            {open === "project" && (
              <p className="txt-mobile texto-regular mb-0-mobile mb-40">
                We can steer your project from start to finish: from source
                evaluation, quoting, and planning to quality assurance.
                <CorteDesktop /> Our team relies on proven processes and best
                practices based on 20+ years
                <CorteMobile /> of experience.
              </p>
            )}
          </Item>
          <Item>
            <ItemTitle
              onClick={() => toggleSideNav("desktop")}
              type="button"
              tabIndex={0}
              aria-label="Clickable icon of an arrow. Click on it to unfold the description of the service."
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === "") {
                  event.preventDefault();
                  toggleSideNav("desktop");
                }
              }}
            >
              <h3 className="body-bold-mobile h3-web">
                Desktop Publishing
                <CorteMobile /> & Creative Visuals
              </h3>
              <BotonFlecha isServices={true} isOpen={open === "desktop"} />
            </ItemTitle>
            {open === "desktop" && (
              <p className="txt-mobile texto-regular mt-10-mobile mt-0-mobile mb-0-mobile mb-40">
                We can help you create and localize engaging
                <CorteMobile /> and visually appealing content to reach your
                <CorteMobile /> target audience. We offer
                <CorteDesktop /> a wide range of services,
                <CorteMobile /> including multilingual desktop publishing
                <CorteMobile /> and original design for your marketing
                campaigns.
              </p>
            )}
          </Item>
          <Item>
            <ItemTitle
              onClick={() => toggleSideNav("video")}
              type="button"
              tabIndex={0}
              aria-label="Clickable icon of an arrow. Click on it to unfold the description of the service."
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === "") {
                  event.preventDefault();
                  toggleSideNav("video");
                }
              }}
            >
              <h3 className="body-bold-mobile h3-web">E-Learning & Video</h3>
              <BotonFlecha isServices={true} isOpen={open === "video"} />
            </ItemTitle>
            {open === "video" && (
              <p className="txt-mobile texto-regular mb-0-mobile mb-40">
                We can prepare, format, and QA your e-learning
                <CorteMobile /> content, including copy, images, video, and
                audio.
                <CorteMobile /> Our team can help
                <CorteDesktop /> with the pre and post-
                <CorteMobile />
                processing stages: from transcription to translation
                <CorteMobile /> to timing, to subtitling or dubbing.
              </p>
            )}
          </Item>
          <Item>
            <ItemTitle
              onClick={() => toggleSideNav("content")}
              type="button"
              tabIndex={0}
              aria-label="Clickable icon of an arrow. Click on it to unfold the description of the service."
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === "") {
                  event.preventDefault();
                  toggleSideNav("content");
                }
              }}
            >
              <h3 className="body-bold-mobile h3-web">Content Creation</h3>
              <BotonFlecha isServices={true} isOpen={open === "content"} />
            </ItemTitle>
            {open === "content" && (
              <p className="txt-mobile texto-regular mb-0-mobile mb-40">
                We work closely with your marketing team
                <CorteMobile /> to create appealing content and deliver
                <CorteMobile /> a unified brand message.
                <CorteDesktop /> From campaign
                <CorteMobile /> conceptualization to design, we can steer
                <CorteMobile /> your content and visuals for corporate e-mail
                <CorteDesktop />
                <CorteMobile /> communications, newsletters, social media,
                <CorteMobile /> and merchandising.
              </p>
            )}
          </Item>
        </Dropdown>
      </Container>
    </StyledContainer>
  );
}

export default Explore;
