import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const StyledContainer = styled.div`
  padding: 16px 0 0;
  color: ${(props) => props.theme.texto};
  background: ${(props) => props.theme.fondo};
  display: flex;
  flex-direction: column;
  transition: 0.2s;

  ${breakpoints.min_desktop} {
    padding: 189px 0 483px;
    position: relative;
    z-index: 2;
  }
`;
