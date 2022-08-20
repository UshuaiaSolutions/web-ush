import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 0 25px;
  width: calc(100% - 50px);

  @media (min-width: 1025px) {
    padding: 0 64px 0 174px;
    width: calc(100% - 64px - 174px);
  }

  @media (min-width: 1500px) {
    padding: 0 154px 0 274px;
    width: calc(100% - 154px - 274px);
    max-width: 1500px;
    margin: 0 auto;
  }
`;

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
