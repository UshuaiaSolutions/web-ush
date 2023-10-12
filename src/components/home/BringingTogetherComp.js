import styled from "styled-components";
import { breakpoints, colors } from "../base/breakpoints";

export const StyledContainer = styled.div`
  padding: 56px 0px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: ${(props) => props.theme.texto};
  transition: 0.2s;

  ${breakpoints.min_desktop} {
    padding: 144px 0px 0px;

    & .container-content {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  position: relative;
  transition: 0.2s;

  & p {
    position: absolute;
    top: 175px;
    background-color: ${colors.fondoblanco};
    width: 273px;
    transition: 0.2s;
  }

  ${breakpoints.min_desktop} {
    align-items: start;

    & p {
      transition: 0.2s;
      position: relative;
      top: 0;
      background-color: ${(props) => props.theme.fondo};
      width: 100%;
    }
  }
`;
