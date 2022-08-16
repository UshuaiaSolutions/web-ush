import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 64px;
  transform: translate(-0px, -50%);

  @media (max-width: 768px) {
    display: none;
  }
`;

function Redes() {
  return (
    <Container>
      <img
        className="object-contain mb-35 h-34 w-34"
        src="/icons/Instagram.png"
        alt="instagram"
      />
      <img
        className="object-contain mb-35 h-34 w-34"
        src="/icons/Facebook.png"
        alt="facebook"
      />
      <img
        className="object-contain mb-35 h-34 w-34"
        src="/icons/LinkedIn.png"
        alt="linkedin"
      />
      <img
        className="object-contain h-34 w-34"
        src="/icons/YouTube.png"
        alt="youtube"
      />
    </Container>
  );
}

export default Redes;
