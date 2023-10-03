import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const StyledContainer = styled.div`
  padding: 40px 0 0;
  color: ${(props) => props.theme.texto};
  background: ${(props) => props.theme.fondo};
  display: flex;
  flex-direction: column;
  align-items: center;

  ${breakpoints.min_desktop} {
    padding: 144px 0 0;
  }
`;

export const Card = styled.div`
  display: flex;
  height: calc(248px - (16px * 2));
  width: calc(226px - (8px * 2));
  padding: 16px 8px;
  flex-direction: column;
  align-items: center;

  ${breakpoints.min_desktop} {
    width: calc(348px - (21px * 2));
    height: calc(396px - (32px + 8px));
    padding: 32px 21px 8px;
  }
`;

export const Circle = styled.div`
  position: absolute;
  border: 2px solid ${(props) => props.theme.texto};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.fondo};
  width: calc(56px - 4px);
  height: calc(56px - 4px);
  top: -30px;
  right: 56px;

  ${breakpoints.min_desktop} {
    border: 3px solid ${(props) => props.theme.texto};
    width: calc(56px - 6px);
    height: calc(56px - 6px);
    top: -30px;
    left: calc(50% - 56px / 2);
  }
`;

export const Partnership = styled.svg`
  width: 28.946px;
  height: 18.316px;

  ${breakpoints.min_desktop} {
    width: 57.892px;
    height: 36.63px;
  }
`;

export const Technology = styled.svg`
  width: 20.977px;
  height: 24.141px;

  ${breakpoints.min_desktop} {
    width: 41.954px;
    height: 48.281px;
  }
`;

export const Experience = styled.svg`
  width: 18.69px;
  height: 17.078px;

  ${breakpoints.min_desktop} {
    width: 38.69px;
    height: 37.078px;
  }
`;
