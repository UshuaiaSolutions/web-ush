import React from "react";
import styled from "styled-components";
import { breakpoints } from "./breakpoints";

const StyledContainer = styled.div`
  // MOBILE
  margin: 0 auto;
  width: 276px;

  // TABLET
  ${breakpoints.only_tablet} {
    min-width: 680px;
    width: 80%;
    max-width: 1089px;
  }

  // PC
  ${breakpoints.min_desktop} {
    margin: 0 auto;
    width: 1089px;
  }
`;

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
