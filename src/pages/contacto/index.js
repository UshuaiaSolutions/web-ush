import React from "react";
import styled from "styled-components";
import BookMeeting from "../../components/compartidos/BookMeeting";

const Background = styled.div`
  background-color: ${(props) => props.theme.fondoblanco};
  color: ${(props) => props.theme.textonegro};
`;

const Contacto = () => {
  return (
    <Background>
      <BookMeeting />
    </Background>
  );
};

export default Contacto;
