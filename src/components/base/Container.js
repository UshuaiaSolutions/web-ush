import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 0 25px;
  width: calc(100% - 50px);

  @media (min-width: 1025px) {
    padding: 0 64px 0 174px;
    width: calc(100% - 64px - 174px);
  }
`;

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
