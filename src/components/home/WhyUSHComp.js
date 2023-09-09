import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const StyledContainer = styled.div`
  padding: 56px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.fondoblanco};
  color: ${(props) => props.theme.textonegro};

  ${breakpoints.min_desktop} {
    padding: 144px 0 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Card = styled.div`
  display: flex;
  height: 200px;
  width: calc(226px - (16px * 2));
  padding: 16px;
  flex-direction: column;
  align-items: center;

  ${breakpoints.min_desktop} {
    width: calc(348px - (32px * 2));
    height: calc(376px - (32px * 2));
    padding: 32px;
  }
`;

export const CardContainer = styled.div`
  display: none;

  ${breakpoints.min_desktop} {
    display: flex;
    justify-content: space-between;
  }
`;

export const SVGContainer = styled.div`
  width: 40px;
  height: 40px;
  border: 2px solid ${(props) => props.theme.textonegro};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${breakpoints.min_desktop} {
    border: 3px solid ${(props) => props.theme.textonegro};
    width: 80px;
    height: 80px;
  }
`;

export const Scalability = styled.svg`
  width: 16.539px;
  height: 19.334px;

  ${breakpoints.min_desktop} {
    width: 33.057px;
    height: 38.668px;
  }
`;

export const Quality = styled.svg`
  width: 21.656px;
  height: 21.667px;

  ${breakpoints.min_desktop} {
    width: 43.313px;
    height: 43.335px;
  }
`;
