import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const Container = styled.div`
  background-color: ${(props) => props.theme.fondoblanco};
  color: ${(props) => props.theme.textonegro};
  padding: 56px 0 0;

  ${breakpoints.min_desktop} {
    padding: 144px 0 0;
    display: flex;
    justify-content: space-between;
  }
`;
