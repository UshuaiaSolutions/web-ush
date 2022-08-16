import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 51px;

  @media (min-width: 769px) {
    margin-top: 100px;
  }
`;

function Layout({ children }) {
  return <Container>{children}</Container>;
}

export default Layout;
