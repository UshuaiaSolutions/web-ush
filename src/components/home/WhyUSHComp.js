import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const StyledContainer = styled.div`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.textonegro};
  color: ${(props) => props.theme.fondo};

  ${breakpoints.min_xl} {
    padding: 100px 0;
  }
`;

export const ImageDesktop = styled.img`
  display: none;

  ${breakpoints.min_tablet} {
    width: 509px;
    display: block;
  }
`;

export const ImageMobile = styled.img`
  width: 100%;
  height: auto;

  ${breakpoints.min_tablet} {
    display: none;
  }
`;

export const Content = styled.div`
  ${breakpoints.min_tablet} {
    display: flex;
    text-align: center;
    justify-content: space-between;
  }
  ${breakpoints.min_tablet} {
    & .corte-exacto-desktop-medio {
      min-width: fit-content;
    }
  }
`;

export const Reverse = styled.div`
  ${breakpoints.min_tablet} {
    display: flex;
    flex-direction: column-reverse;
    margin-top: 40px;
  }
`;

export const Areas = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;

  ${breakpoints.min_tablet} {
    margin-top: 0px;
    flex-wrap: wrap;
    justify-content: center;

    & p {
      margin-bottom: 30px;
      width: 50%;
    }
  }
`;
