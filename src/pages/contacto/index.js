import React from "react";
import styled from "styled-components";
import BookMeeting from "../../components/BookMeeting";
import WhyUsh from "../../components/contacto/WhyUsh";

const Background = styled.div`
  background-color: ${(props) => props.theme.fondo};
  color: ${(props) => props.theme.textonegro};
`;

const Contacto = () => {
  return (
    <Background>
      <BookMeeting />
      <WhyUsh />
    </Background>
  );
};

export default Contacto;
