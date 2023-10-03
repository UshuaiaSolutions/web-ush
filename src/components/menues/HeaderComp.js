import styled from "styled-components";
import BotonSecundario from "../base/BotonSecundario";
import { Link } from "react-router-dom";
import { breakpoints } from "../base/breakpoints";

export const Content = styled.div`
  background: ${(props) => props.theme.fondo};
  color: ${(props) => props.theme.texto};
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  width: 100%;

  ${breakpoints.min_desktop} {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 32px 0;
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  padding: 6px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration: none;
  color: ${(props) => props.theme.texto};
  border: ${(props) =>
    props.selected
      ? `2px solid ${props.theme.texto}`
      : `2px solid ${props.theme.fondo}`};
  border-radius: 60px;
  margin-right: 10px;
  transition: all 0.3s linear;

  &:hover {
    border: ${(props) => `2px solid ${props.theme.texto}`};
  }
`;

export const StyledBoton = styled(BotonSecundario)`
  padding: 5.5px 38px;
  width: fit-content;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: ${(props) => props.theme.texto};
  background-color: ${(props) => props.theme.verdeush};
  border: 2px solid ${(props) => props.theme.verdeush};
  transition: all 0.3s linear;

  &:hover {
    border: 2px solid ${(props) => props.theme.texto};
  }
`;

export const ContainerMenu = styled.div`
  display: none;

  ${breakpoints.min_desktop} {
    display: flex;
  }
`;

export const Logo = styled.div`
  background-size: cover;
  height: 17px;
  width: 74px;
  background: url(https://ushmultimedia.blob.core.windows.net/ushwebsite/LogoNav.png);
  background-size: contain;

  ${breakpoints.min_desktop} {
    background: url(https://ushmultimedia.blob.core.windows.net/ushwebsite/LogoNav.png);
    height: 28px;
    width: 124px;
  }
`;

export const Toggle = styled.button`
  transition: none;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-around;
  height: 17px;
  width: 17px;
  background: transparent;
  border: none;
  cursor: pointer;
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

    span {
      background: ${(props) => props.theme.texto};
      height: 2px;
      display: block;
      border-radius: 5px;
    }

    :first-child {
      transform: ${(props) => (props.isOpen ? "rotate(45deg)" : "rotate(0)")};
      width: ${(props) => (props.isOpen ? "18px" : "17px")};
    }

    :nth-child(2) {
      width: ${(props) => (props.isOpen ? "0" : "17px")};
    }

    :nth-child(3) {
      transform: ${(props) => (props.isOpen ? "rotate(-45deg)" : "rotate(0)")};
      width: ${(props) => (props.isOpen ? "18px" : "20px")};
    }
  }

  ${breakpoints.min_desktop} {
    display: none;
  }
`;
