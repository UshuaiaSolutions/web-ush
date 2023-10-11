import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const StyledContainer = styled.div`
  padding: 56px 0 0;
  background-color: ${(props) => props.theme.fondo};
  color: ${(props) => props.theme.texto};
  transition: 0.2s;

  ${breakpoints.min_desktop} {
    padding: 144px 0 0;
  }
`;

export const ImgDesktop = styled.img`
  display: none;

  & path {
    transition: 0.2s;
  }

  ${breakpoints.min_desktop} {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export const ImgMobile = styled.img`
  display: block;
  width: 100%;
  height: auto;

  & path {
    transition: 0.2s;
  }

  ${breakpoints.min_desktop} {
    display: none;
  }
`;
