import React from "react";
import styled from "styled-components";

const Fondo = styled.div`
  background: rgba(246, 243, 232, 0.9);
  width: 100vw;
  height: calc(100vh - 120px);
  position: absolute;
  top: 0;
  left: 0;
  padding: 60px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 20;
`;

const Logo = styled.div`
  background-size: cover;
  height: 46px;
  width: 169px;
  background: url(/logos/ush-mobile-open.png);
`;

function MenuMobile() {
  return (
    <Fondo>
      <Logo />
    </Fondo>
  );
}

export default MenuMobile;
