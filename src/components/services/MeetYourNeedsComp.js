import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const StyledContainer = styled.div`
  padding: 56px 0 0;
  color: ${(props) => props.theme.texto};
  background: ${(props) => props.theme.fondo};
  display: flex;
  flex-direction: column;
  transition: 0.2s;

  ${breakpoints.min_desktop} {
    padding: 144px 0 0;
    flex-direction: row;
    justify-content: space-between;
  }
`;
