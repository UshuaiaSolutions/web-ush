import styled from "styled-components";
import { breakpoints, colors } from "../base/breakpoints";

export const StyledContainer = styled.div`
  padding: 56px 0 0;
  color: ${(props) => props.theme.texto};
  background: ${(props) => props.theme.fondo};
  display: flex;
  flex-direction: column;
  transition: 0.2s;

  ${breakpoints.min_desktop} {
    padding: 189px 0 100px;
    position: relative;
    z-index: 2;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  flex-direction: column;

  & .abs {
    width: max-content;
  }

  ${breakpoints.min_desktop} {
    justify-content: space-between;
    flex-direction: row;
    align-items: end;

    & .abs {
      width: auto;
      position: absolute;
      right: -70px;
      top: 50%;
      transform: translateY(-50%);
      padding: 13.5px 31.5px;
    }

    & div {
      width: 50%;
      text-align: center;
    }
  }
`;

export const EstrellaVioleta = styled.svg`
  width: 20px;
  height: 20px;
  margin: 20px auto;

  & path {
    transition: 0.2s;
  }

  ${breakpoints.min_desktop} {
    width: 40px;
    height: 40px;
    margin: 50px auto;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0 0;

  ${breakpoints.min_desktop} {
    margin: 60px 0 0;
  }
`;

export const StyledBoton = styled.button`
  padding: 8px 24px;
  background-color: ${colors.fondoblanco};
  color: ${colors.textonegro};
  transition: all 0.3s ease-in-out;
  width: fit-content;
  border: 2px solid ${(props) => props.theme.texto};
  border-radius: 60px;
  text-decoration: none;
  cursor: pointer;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  transition: 0.2s;

  &:hover {
    border: 2px solid ${(props) => props.theme.contacto};
    background-color: ${(props) => props.theme.contacto};
    color: ${(props) => props.theme.fondo};
  }

  ${breakpoints.min_desktop} {
    padding: 13.5px 51.5px;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border: 3px solid ${(props) => props.theme.texto};

    &:hover {
      border: 3px solid ${(props) => props.theme.contacto};
    }
  }
`;
