import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: -1;
  background-color: ${(props) => props.theme.fondo};
  color: ${(props) => props.theme.texto};
  align-items: center;
  width: 100vw;
  height: 100vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  &.show {
    opacity: 1;
    z-index: 22;
  }
`;

export const SVG = styled.svg`
  height: 48px;
  width: 48px;
  margin-bottom: 25px;

  ${breakpoints.min_desktop} {
    width: 80px;
    height: 80px;
    margin-bottom: 32px;
  }
`;
