import React from "react";
import styled from "styled-components";
import { breakpoints } from "./breakpoints";

const Container = styled.div`
  margin-top: 73px;
  background: ${(props) => props.theme.fondo};

  ${breakpoints.min_desktop} {
    margin-top: 100px;
  }
`;

function Layout({ children }) {
  return <Container>{children}</Container>;
}

export default Layout;
