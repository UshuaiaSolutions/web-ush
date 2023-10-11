import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const StyledContainer = styled.div`
  color: ${(props) => props.theme.texto};
  background: ${(props) => props.theme.fondo};
  padding: 56px 0 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-bottom: none;
  transition: 0.2s;

  ${breakpoints.min_desktop} {
    padding: 144px 0 0;
    border-bottom: 2px solid rgba(57, 57, 57, 0.3);
  }
`;

export const Column = styled.div`
  ${breakpoints.min_desktop} {
    display: flex;
    justify-content: space-between;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${breakpoints.min_desktop} {
    align-items: end;
    text-align: end;
  }
`;
