import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const StyledContainer = styled.div`
  padding: 16px 0 0;
  color: ${(props) => props.theme.textonegro};
  background: ${(props) => props.theme.fondoblanco};
  display: flex;
  flex-direction: column;

  ${breakpoints.min_desktop} {
    padding: 189px 0 483px;
    position: relative;
    z-index: 2;
  }
`;
