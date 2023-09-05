import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuMobile from "./MenuMobile";
import {
  Container,
  Content,
  StyledLink,
  StyledBoton,
  ContainerMenu,
  Toggle,
} from "./HeaderComp";
import Logo from "../../assets/USH-logo";

function Header() {
  const [openMobile, setOpenMobile] = useState(false);

  let location = useLocation();

  return (
    <Container>
      <Content>
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
      </Content>
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

      {openMobile && <MenuMobile func={setOpenMobile} />}
    </Container>
  );
}

export default Header;
