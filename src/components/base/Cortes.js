import styled from "styled-components";
import { breakpoints } from "./breakpoints";

export const CorteDesktop = styled.br`
  display: none;

  ${breakpoints.min_tablet} {
    display: block;
  }
`;

export const CorteMobile = styled.br`
  ${breakpoints.min_tablet} {
    display: none;
  }
`;
