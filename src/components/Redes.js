import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 50%;
  left: 64px;
  transform: translate(-0px, -50%);

  @media (max-width: 1024px) {
    display: none;
  }

  @media (min-width: 1500px) {
    left: 150px;
  }

  @media (min-width: 2000px) {
    left: 300px;
  }
`;

function Redes() {
  return (
    <Container>
      <a
        href="https://www.instagram.com/ushuaiasolutions/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="object-contain mb-35 h-34 w-34"
          src="/icons/Instagram.png"
          alt="instagram"
        />
      </a>
      <a
        href="https://www.facebook.com/UshuaiaSolutions"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="object-contain mb-35 h-34 w-34"
          src="/icons/Facebook.png"
          alt="facebook"
        />
      </a>
      <a
        href="https://www.linkedin.com/company/ushuaia-solutions/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="object-contain mb-35 h-34 w-34"
          src="/icons/LinkedIn.png"
          alt="linkedin"
        />
      </a>
      <a
        href="https://www.youtube.com/channel/UCexqpO701H7nI72dplSkjaw"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="object-contain h-34 w-34"
          src="/icons/YouTube.png"
          alt="youtube"
        />
      </a>
    </Container>
  );
}

export default Redes;
