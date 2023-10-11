import React from "react";
import styled from "styled-components";
import WeCanHelp from "../../components/about/WeCanHelp";
import MeetYourLanguage from "../../components/about/MeetYourLanguage";
import BookMeeting from "../../components/compartidos/BookMeeting";
import Valores from "../../components/about/Valores";

const Background = styled.div`
  background-color: ${(props) => props.theme.fondo};
  color: ${(props) => props.theme.texto};
  transition: 0.2s;
`;

const About = () => {
  return (
    <Background>
      <MeetYourLanguage />
      <WeCanHelp />
      <Valores />
      <BookMeeting />
    </Background>
  );
};

export default About;
