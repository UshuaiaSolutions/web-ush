import React from "react";
import styled from "styled-components";
import { breakpoints } from "./breakpoints";

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 273px;

  // PC
  ${breakpoints.min_desktop} {
    margin: 0 auto;
    width: 1076px;
  }
`;

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
