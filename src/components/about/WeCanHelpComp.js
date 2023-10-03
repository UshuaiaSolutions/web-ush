import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const StyledContainer = styled.div`
  padding: 56px 0 0;
  color: ${(props) => props.theme.textonegro};
  background: ${(props) => props.theme.fondoblanco};
  display: flex;
  flex-direction: column;

  ${breakpoints.min_desktop} {
    padding: 144px 0 0;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 78px;

  ${breakpoints.min_desktop} {
    width: auto;
  }
`;

export const IconContainer = styled.div`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(40px - 4px);
  height: calc(40px - 4px);
  border: 2px solid ${(props) => props.theme.textonegro};

  ${breakpoints.min_desktop} {
    width: calc(80px - 6px);
    height: calc(80px - 6px);
    border: 3px solid ${(props) => props.theme.textonegro};
  }
`;

export const Row = styled.div`
  width: 100%;

  ${breakpoints.min_desktop} {
    display: flex;
    justify-content: space-between;
    margin-bottom: 80px;

    & h2,
    & p {
      width: 50%;
    }
  }
`;

export const RowIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  ${breakpoints.min_desktop} {
    margin-bottom: 80px;

    & h2,
    & p {
      width: 50%;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Language = styled.svg`
  width: 24.633px;
  height: 19.36px;

  ${breakpoints.min_desktop} {
    width: 49.41px;
    height: 38.72px;
  }
`;

export const Project = styled.svg`
  width: 25px;
  height: 30px;

  ${breakpoints.min_desktop} {
    width: 47px;
    height: 54px;
  }
`;

export const Desktop = styled.svg`
  width: 26.964px;
  height: 24.899px;

  ${breakpoints.min_desktop} {
    width: 53.928px;
    height: 49.798px;
  }
`;

export const Creative = styled.svg`
  width: 25.852px;
  height: 22.756px;

  ${breakpoints.min_desktop} {
    width: 51.705px;
    height: 45.513px;
  }
`;

export const Creation = styled.svg`
  width: 22.52px;
  height: 22.306px;

  ${breakpoints.min_desktop} {
    width: 45.041px;
    height: 44.611px;
  }
`;

export const Learning = styled.svg`
  width: 30px;
  height: 52px;

  ${breakpoints.min_desktop} {
    width: 62px;
    height: 52px;
  }
`;
