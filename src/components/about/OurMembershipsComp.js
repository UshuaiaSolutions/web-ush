import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const StyledContainer = styled.div`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.fondo};
  background-color: ${(props) => props.theme.textonegro};

  ${breakpoints.min_xl} {
    padding: 100px 0;
  }
`;
