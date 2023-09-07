import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuMobile from "./MenuMobile";
import {
  // Container,
  Content,
  StyledLink,
  StyledBoton,
  ContainerMenu,
  Toggle,
  Row,
} from "./HeaderComp";
import Container from "../base/Container";
import Logo from "../../assets/USH-logo";

function Header() {
  const [openMobile, setOpenMobile] = useState(false);

  let location = useLocation();

  return (
    <Content>
      <Container>
        <Row>
          <Link to="/">
            <Logo />
          </Link>
          <ContainerMenu className="d-flex align-center">
            <StyledLink to="/about" selected={location.pathname === "/about"}>
              About us
            </StyledLink>
            <StyledLink
              to="/services"
              selected={location.pathname === "/services"}
            >
              Services
            </StyledLink>
            <StyledLink
              to="/expertise"
              selected={location.pathname === "/expertise"}
            >
              Expertise
            </StyledLink>
            <StyledLink
              to="/ush-blog"
              selected={location.pathname === "/ush-blog"}
            >
              USH Blog
            </StyledLink>
            <Link to="/contact">
              <StyledBoton>Get in touch</StyledBoton>
            </Link>
          </ContainerMenu>
          <Toggle
            isOpen={openMobile}
            onClick={() => setOpenMobile((prevOpenMobile) => !prevOpenMobile)}
          >
            <div>
              <span></span>
            </div>
            <div>
              <span></span>
            </div>
            <div>
              <span></span>
            </div>
          </Toggle>
        </Row>

        {openMobile && <MenuMobile func={setOpenMobile} />}
      </Container>
    </Content>
  );
}

export default Header;
