import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const Content = styled.div`
  padding: 0 24px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${breakpoints.min_desktop} {
    justify-content: space-between;
    padding: 0 106px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 22.5px 24px 0;

  &:last-child {
    margin: 0;
  }

  &:nth-child(3) {
    margin: 0 0 24px 0;
  }

  &:nth-child(4) {
    margin: 0 22.5px 0 0;
  }

  ${breakpoints.min_desktop} {
    margin: 0;

    &:last-child,
    &:nth-child(3),
    &:nth-child(4) {
      margin: 0;
    }
  }
`;

export const StyledContainer = styled.div`
  padding: 56px 0 0;

  ${breakpoints.min_desktop} {
    padding: 144px 0 0;
  }
`;
