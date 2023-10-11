import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const StyledContainer = styled.div`
  padding: 56px 0 0;
  color: ${(props) => props.theme.texto};
  background: ${(props) => props.theme.fondo};
  display: flex;
  flex-direction: column;

  ${breakpoints.min_desktop} {
    padding: 100px 0 0;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  & h3 {
    display: inline;
    margin: 0 0 0 10px;
  }

  & svg {
    align-self: flex-end;
  }

  & span {
    padding: 0 0 0 24px;
  }

  &:nth-child(2),
  &:last-child {
    align-items: end;
    text-align: end;

    & span {
      padding: 0 24px 0 0;
    }

    & h3 {
      margin: 0 10px 0 0;
    }
  }

  ${breakpoints.min_desktop} {
    & h3 {
      margin: 0 0 0 32px;
    }

    & span {
      padding: 0 0 0 72px;
    }

    &:nth-child(2),
    &:last-child {
      & h3 {
        margin: 0 32px 0 0;
      }

      & span {
        padding: 0 72px 0 0;
      }
    }
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
  align-items: center;

  & .width-tres {
    max-width: 205px;

    ${breakpoints.min_desktop} {
      max-width: 600px;
    }
  }
`;

export const RowContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  &:nth-child(2),
  &:last-child {
    flex-direction: column-reverse;
  }

  ${breakpoints.min_desktop} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &:nth-child(2),
    &:last-child {
      flex-direction: row;
    }
  }
`;
