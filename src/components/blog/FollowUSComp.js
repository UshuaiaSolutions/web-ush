import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const Container = styled.div`
  background-color: ${(props) => props.theme.fondo};
  color: ${(props) => props.theme.texto};
  padding: 56px 0 0;

  ${breakpoints.min_desktop} {
    padding: 144px 0 0;
    display: flex;
    justify-content: space-between;
  }
`;
