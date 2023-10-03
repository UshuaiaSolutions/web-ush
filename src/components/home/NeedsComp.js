import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  & a,
  & svg {
    align-self: flex-end;
  }

  ${breakpoints.min_desktop} {
    padding-bottom: 32px;
    margin-bottom: 0;

    & span {
      padding-left: 72px;
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
  border-bottom: 1px solid #b6b6b6;
  padding-bottom: 16px;

  ${breakpoints.min_desktop} {
    flex-direction: column;
    padding-bottom: 32px;
  }
`;
