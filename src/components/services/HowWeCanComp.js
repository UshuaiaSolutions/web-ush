import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const StyledContainer = styled.div`
  padding: 51px 0 0;
  color: ${(props) => props.theme.textonegro};
  background: ${(props) => props.theme.fondoblanco};
  display: flex;
  flex-direction: column;

  ${breakpoints.min_desktop} {
    padding: 144px 0 0;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #b6b6b6;
  margin: 16px 0 0;
  padding-bottom: 16px;

  &:last-child {
    border-bottom: none;
  }

  &:first-child {
    margin: 0;
  }

  ${breakpoints.min_desktop} {
    margin: 32px 0 0;
    padding-bottom: 32px;
  }
`;

export const ContentDesktop = styled.div`
  ${breakpoints.min_desktop} {
    display: flex;
    justify-content: space-between;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: end;

  ${breakpoints.min_desktop} {
    flex-direction: column;
  }
`;
