import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const StyledContainer = styled.div`
  padding: 56px 0 0;
  color: ${(props) => props.theme.texto};
  background: ${(props) => props.theme.fondo};
  display: flex;
  flex-direction: column;
  text-align: center;

  ${breakpoints.min_desktop} {
    padding: 144px 0 0;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  height: 142px;
  width: 136.5px;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  & ul {
    list-style: none;

    & li::after {
      content: " /";
    }

    & li:last-child::after {
      content: "";
    }
  }

  ${breakpoints.min_desktop} {
    width: 337px;
    margin: 0 32px 32px 0;
    height: 320px;

    & ul {
      text-align: start;
      list-style: disc;

      & li::after {
        content: "";
      }
    }

    &:last-child {
      margin: 0;
    }

    &:nth-child(4) {
      margin: 0 32px 0 0;
    }

    &:nth-child(3) {
      margin: 0 0 32px 0;
    }
  }
`;

export const Icon = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(40px - 4px);
  height: calc(40px - 4px);
  border: 2px solid ${(props) => props.theme.texto};

  ${breakpoints.min_desktop} {
    width: calc(80px - 6px);
    height: calc(80px - 6px);
    border: 3px solid ${(props) => props.theme.texto};
  }
`;
