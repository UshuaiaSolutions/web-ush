import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const StyledContainer = styled.div`
  padding: 56px 0 0;
  background-color: ${(props) => props.theme.fondoblanco};
  color: ${(props) => props.theme.textonegro};

  ${breakpoints.min_desktop} {
    padding: 144px 0 0;
  }
`;

export const Desktop = styled.div`
  display: none;

  ${breakpoints.min_desktop} {
    display: block;
  }
`;

export const ContainerSwiper = styled.div`
  display: flex;
  width: 273px;

  ${breakpoints.min_desktop} {
    display: none;
  }
`;
