import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BotonSecundario from "./BotonSecundario";
import MenuMobile from "./MenuMobile";

const Container = styled.div`
  padding: 0 19px;
  width: calc(100% - 38px);
  display: flex;
  justify-content: space-between;
  background: ${(props) => props.theme.fondo};
  color: ${(props) => props.theme.textonegro};
  filter: drop-shadow(0px 4px 4px rgba(57, 57, 57, 0.3));
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;
  height: 51px;

  @media (min-width: 769px) {
    height: 100px;
    width: calc(100% - 120px);
    padding: 0 60px;
  }
`;

const StyledLink = styled(Link)`
  padding: 2px 30px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
  color: ${(props) => props.theme.textonegro};
  opacity: 0.6;
`;

const StyledBoton = styled(BotonSecundario)`
  padding: 8px 40px;
`;

const ContainerMenu = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Logo = styled.div`
  background-size: cover;
  height: 16.900390625px;
  width: 78px;
  background: url(/logos/ush-mobile.png);

  @media (min-width: 769px) {
    background: url(/logos/ush.png);
    width: 138px;
    height: 34px;
  }
`;

const Toggle = styled.button`
  transition: none;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-around;
  height: 17px;
  width: 17px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0 16px;
  margin: 28px 0;
  z-index: 21;
  overflow: hidden;

  &:focus {
    outline: none;
  }

  div {
    border-radius: 10px;
    transition: width 200ms ease-out, height 0.3s linear, transform 0.3s linear,
      opacity 300ms linear;
    position: relative;
    transform-origin: 1px;
    min-height: 7px;

    span {
      background: ${(props) => props.theme.textonegro};
      height: 2px;
      display: block;
      margin: 2px 0;
      border-radius: 5px;
    }

    :first-child {
      transform: ${(props) => (props.isOpen ? "rotate(45deg)" : "rotate(0)")};
      width: ${(props) => (props.isOpen ? "22px" : "20px")};
    }

    :nth-child(2) {
      width: ${(props) => (props.isOpen ? "0" : "20px")};
    }

    :nth-child(3) {
      transform: ${(props) => (props.isOpen ? "rotate(-45deg)" : "rotate(0)")};
      width: ${(props) => (props.isOpen ? "22px" : "20px")};
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

function Header() {
  const [openMobile, setOpenMobile] = useState(false);

  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>
      <ContainerMenu className="d-flex align-center">
        <StyledLink to="/about">About us</StyledLink>
        <StyledLink to="/services">Services</StyledLink>
        <StyledLink to="/expertise">Expertise</StyledLink>
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
      {openMobile && <MenuMobile />}
    </Container>
  );
}

export default Header;
