import styled from "styled-components";
import { breakpoints } from "../base/breakpoints";

export const StyledContainer = styled.div`
  padding: 56px 0px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: ${(props) => props.theme.texto};

  ${breakpoints.min_desktop} {
    padding: 144px 0px 0px;

    & .container-content {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;

  ${breakpoints.min_desktop} {
    align-items: start;
  }
`;
