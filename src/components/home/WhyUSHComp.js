import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const StyledContainer = styled.div`
  padding: 56px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.fondo};
  color: ${(props) => props.theme.texto};
  transition: 0.2s;

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
  height: calc(200px - (16px * 2));
  width: calc(226px - (8px * 2));
  padding: 16px 8px;
  flex-direction: column;
  align-items: center;

  ${breakpoints.min_desktop} {
    width: calc(348px - (32px * 2));
    height: calc(376px - (32px * 2));
    padding: 32px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  ${breakpoints.min_desktop} {
    margin-top: 0;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const SVGContainer = styled.div`
  width: calc(40px - 4px);
  height: calc(40px - 4px);
  border: 2px solid ${(props) => props.theme.texto};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;

  ${breakpoints.min_desktop} {
    border: 3px solid ${(props) => props.theme.texto};
    width: calc(80px - 6px);
    height: calc(80px - 6px);
  }

  & path {
    transition: 0.2s;
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

export const Experience = styled.svg`
  width: 21.656px;
  height: 21.667px;

  ${breakpoints.min_desktop} {
    width: 38.69px;
    height: 37.078px;
  }
`;
