import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  // MOBILE
  margin: 0 auto;
  width: 276px;

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 0 40px;
    width: calc(100% - 80px);
  }

  @media (min-width: 1025px) and (max-width: 1125px) {
    padding: 0 20px;
    width: calc(100% - 40px);
  }

  @media (min-width: 1126px) and (max-width: 1499px) {
    margin-left: 10vw;
    width: 1062px;
    padding: 0;
  }

  @media (min-width: 1500px) {
    margin: 0 auto;
    width: 1250px;
  }
`;

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
