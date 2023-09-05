import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const StyledContainer = styled.div`
  padding: 0 0 40px;
  color: ${(props) => props.theme.textonegro};
  background: ${(props) => props.theme.fondoblanco};
  display: flex;
  flex-direction: column;

  ${breakpoints.min_tablet} {
    padding: 0 0 100px;
  }
`;

export const Image = styled.img`
  height: 197px;
  width: 227px;
  object-fit: cover;
  margin-bottom: 35px;
  display: block;
  margin-left: auto;
  margin-right: auto;

  ${breakpoints.min_tablet} {
    margin-top: 35px;
    height: auto;
    width: 265px;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
  }

  ${breakpoints.min_desktop} {
    height: 336px;
    width: 387px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;

  ${breakpoints.min_tablet} {
    margin-bottom: 30px;
  }
`;

export const ContentDesktop = styled.div`
  ${breakpoints.min_tablet} {
    display: flex;
    justify-content: space-between;

    & .desktop-chico-exacto {
      min-width: 400px;
      width: 50%;
    }
  }

  ${breakpoints.min_desktop} {
    & .desktop-chico-exacto {
      width: 531px;
    }
  }
`;
