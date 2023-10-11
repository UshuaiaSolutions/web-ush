import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const StyledContainer = styled.div`
  padding: 56px 0 0;
  color: ${(props) => props.theme.texto};
  background: ${(props) => props.theme.fondo};
  display: flex;
  flex-direction: column;
  transition: 0.2s;

  & path {
    transition: 0.2s;
  }

  ${breakpoints.min_desktop} {
    padding: 144px 0 0;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const SVG = styled.svg`
  width: 19.995px;
  height: 20px;
  padding: 0;

  ${breakpoints.min_desktop} {
    width: 59.131px;
    height: 59.145px;
    padding: 21px;
  }
`;
