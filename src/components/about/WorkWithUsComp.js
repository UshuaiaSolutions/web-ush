import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const StyledContainer = styled.div`
  padding: 40px 0;
  color: ${(props) => props.theme.textonegro};
  background: ${(props) => props.theme.fondoblanco};
  display: flex;
  flex-direction: column;

  & .position-mobile {
    margin-left: calc((100% - 276px) / 2);
    width: calc(100% - ((100% - 276px) / 2));
  }

  ${breakpoints.min_xl} {
    padding: 0 0 100px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  width: 136px;
  height: 136px;

  ${breakpoints.min_tablet} {
    width: 240px;
    height: 240px;
  }
`;

export const Icon = styled.img`
  width: 100%;
  height: 100%;
`;

export const Row = styled.div`
  ${breakpoints.min_tablet} {
    display: flex;
    justify-content: space-between;
    margin-bottom: 70px;
  }
`;

export const StyledLink = styled.a`
  width: 100%;

  ${breakpoints.min_tablet} {
    width: auto;
  }
`;
