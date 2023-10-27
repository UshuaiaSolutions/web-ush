import React from "react";

import Container from "../../components/base/Container";
import { Content } from "../../components/nomatch/StyledComponents";
import { CorteDesktop } from "../../components/base/Cortes";

const NoMatch = () => {
  return (
    <Container>
      <Content>
        <h1 className="h3-mobile h1-web mb-32 mb-16-mobile text-center">
          Oops, something went wrong!
        </h1>
        <p className="destacado-regular txt-regular-mobile text-center">
          The page you're looking for can't be found.
          <CorteDesktop /> Please go back to homepage.
        </p>
      </Content>
    </Container>
  );
};

export default NoMatch;
