import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  // MOBILE
  margin: 0 auto;
  width: 276px;

  // TABLET
  @media (min-width: 769px) and (max-width: 1124px) {
    padding: 0 40px;
    width: calc(100% - 80px);
  }

  // PC
  @media (min-width: 1125px) {
    margin: 0 auto;
    width: 1089px;
  }
`;

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
