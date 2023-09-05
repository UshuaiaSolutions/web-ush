import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const StyledContainer = styled.div`
  padding: 40px 0;
  color: ${(props) => props.theme.textonegro};
  background: ${(props) => props.theme.fondoblanco};
  display: flex;
  flex-direction: column;

  ${breakpoints.min_tablet} {
    padding: 100px 0 50px;
  }
`;

export const ContainerIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  & img {
    width: 19px;
    height: 32px;
  }

  ${breakpoints.min_tablet} {
    & img {
      width: 31px;
      height: auto;
    }
  }

  ${breakpoints.min_desktop} {
    & img {
      width: 41px;
      height: 68px;
    }
  }
`;
