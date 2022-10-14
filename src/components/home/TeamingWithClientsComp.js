import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const StyledContainer = styled.div`
  padding: 30px 0px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: ${(props) => props.theme.fondo};

  ${breakpoints.min_xl} {
    padding: 0 0 100px;
  }

  ${breakpoints.min_tablet} {
    & .container-content {
      display: flex;
      justify-content: space-between;

      .second-col {
        width: 50%;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  ${breakpoints.min_tablet} {
    & .mySwiper {
      width: 50%;
    }
  }
`;
