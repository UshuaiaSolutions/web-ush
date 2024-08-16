import React, { useContext, useState } from "react";
import Container from "../base/Container";
import {
  StyledContainer,
  Dropdown,
  Item,
  ItemTitle,
  RowDesktop,
} from "./ExploreComp";
import BotonFlecha from "../../assets/BotonFlecha";
import { TranslationContext } from "../../assets/Translations/TranslationsProvider";
import Translator from "../../assets/Translations/Translator";

function Explore() {
  const [open, setOpen] = useState("none");

  const toggleSideNav = (id) => {
    if (open === id) {
      setOpen("none");
    } else {
      setOpen(id);
    }
  };

  const { text } = useContext(TranslationContext);

  return (
    <StyledContainer>
      <Container>
        <RowDesktop className="mb-40 mb-10-mobile">
          <h2 className="h3-mobile h2-web text-center-mobile mb-16-mobile">
            <Translator text={text.SERVICES.EXPLORE.TITLE} />
          </h2>
          <p className="destacado-regular txt-regular-mobile text-center-mobile">
            <Translator text={text.SERVICES.EXPLORE.BAJADA} />
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
              <h3 className="body-bold-mobile h3-web">
                {text.SERVICES.EXPLORE.FIRST.TITLE}
              </h3>
              <BotonFlecha isServices={true} isOpen={open === "language"} />
            </ItemTitle>
            {open === "language" && (
              <p className="txt-mobile texto-regular mb-0-mobile mb-40">
                <Translator text={text.SERVICES.EXPLORE.FIRST.BAJADA} />
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
              <h3 className="body-bold-mobile h3-web">
                {text.SERVICES.EXPLORE.SECOND.TITLE}
              </h3>
              <BotonFlecha isServices={true} isOpen={open === "project"} />
            </ItemTitle>
            {open === "project" && (
              <p className="txt-mobile texto-regular mb-0-mobile mb-40">
                <Translator text={text.SERVICES.EXPLORE.SECOND.BAJADA} />
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
                <Translator text={text.SERVICES.EXPLORE.THIRD.TITLE} />
              </h3>
              <BotonFlecha isServices={true} isOpen={open === "desktop"} />
            </ItemTitle>
            {open === "desktop" && (
              <p className="txt-mobile texto-regular mt-10-mobile mt-0-mobile mb-0-mobile mb-40">
                <Translator text={text.SERVICES.EXPLORE.THIRD.BAJADA} />
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
              <h3 className="body-bold-mobile h3-web">
                {text.SERVICES.EXPLORE.FOURTH.TITLE}
              </h3>
              <BotonFlecha isServices={true} isOpen={open === "video"} />
            </ItemTitle>
            {open === "video" && (
              <p className="txt-mobile texto-regular mb-0-mobile mb-40">
                <Translator text={text.SERVICES.EXPLORE.FOURTH.BAJADA} />
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
              <h3 className="body-bold-mobile h3-web">
                {text.SERVICES.EXPLORE.FIFTH.TITLE}
              </h3>
              <BotonFlecha isServices={true} isOpen={open === "content"} />
            </ItemTitle>
            {open === "content" && (
              <p className="txt-mobile texto-regular mb-0-mobile mb-40">
                <Translator text={text.SERVICES.EXPLORE.FIFTH.BAJADA} />
              </p>
            )}
          </Item>
        </Dropdown>
      </Container>
    </StyledContainer>
  );
}

export default Explore;
