import styled from "styled-components";
import { breakpoints } from "./breakpoints";

export const CorteDesktop = styled.br`
  display: none;

  ${breakpoints.min_desktop} {
    display: block;
  }
`;

export const CorteMobile = styled.br`
  ${breakpoints.min_desktop} {
    display: none;
  }
`;
