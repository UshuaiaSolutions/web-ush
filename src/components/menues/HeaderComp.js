import styled from "styled-components";
import BotonSecundario from "../base/BotonSecundario";
import { Link } from "react-router-dom";

export const Container = styled.div`
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
    height: calc(100px - 50px);
    padding: 25px;
    width: calc(100% - 50px);
  }

  @media (min-width: 1125px) {
    padding: 25px 65px;
    width: calc(100% - 130px);
  }
`;

export const Content = styled.div`
  @media (min-width: 769px) {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  @media (min-width: 1500px) {
    margin: 0 auto;
    width: 1314px;
  }

  @media (min-width: 1800px) {
    margin: 0 auto;
    width: 1514px;
  }
`;

export const StyledLink = styled(Link)`
  height: calc(28px - 2px * 2);
  width: calc(105px - 2px * 2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
  color: ${(props) => props.theme.textonegro};
  opacity: ${(props) => (props.selected ? "1" : "0.6")};
  border: ${(props) =>
    props.selected
      ? `2px solid ${props.theme.textonegro}`
      : `2px solid ${props.theme.fondo}`};
  border-radius: 60px;
  margin-right: 10px;
  transition: all 0.3s linear;

  &:hover {
    background: ${(props) => props.theme.rosaush};
    border: ${(props) =>
      props.selected
        ? `2px solid ${props.theme.textonegro}`
        : `2px solid ${props.theme.rosaush}`};
    opacity: 1;
  }
`;

export const StyledBoton = styled(BotonSecundario)`
  padding: calc(8px - 3px) calc(40px - 3px);
  width: fit-content;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: ${(props) => props.theme.textonegro};
  background-color: ${(props) => props.theme.rosaush};
  border: 3px solid ${(props) => props.theme.rosaush};
  transition: all 0.3s linear;

  &:hover {
    background-color: ${(props) => props.theme.fondo};
    border: 3px solid ${(props) => props.theme.textonegro};
  }
`;

export const ContainerMenu = styled.div`
  display: none;

  @media (min-width: 769px) {
    display: flex;
  }
`;

export const Logo = styled.div`
  background-size: cover;
  height: 17px;
  width: 74px;
  background: url(https://ushmultimedia.blob.core.windows.net/ushwebsite/LogoNav.png);
  background-size: contain;

  @media (min-width: 769px) {
    background: url(https://ushmultimedia.blob.core.windows.net/ushwebsite/LogoNav.png);
    height: 28px;
    width: 123px;
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
