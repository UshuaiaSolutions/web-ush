import React from "react";
import styled from "styled-components";
import GetToKnow from "../../components/about/GetToKnow";
import MeetYourLanguage from "../../components/about/MeetYourLanguage";
import MeetYourNeeds from "../../components/about/MeetYourNeeds";
import BookMeeting from "../../components/BookMeeting";
import Memberships from "../../components/Memberships";

const Background = styled.div`
  background-color: ${(props) => props.theme.fondo};
  color: ${(props) => props.theme.textonegro};
`;

const About = () => {
  return (
    <Background>
      <MeetYourLanguage />
      <GetToKnow />
      <MeetYourNeeds />
      <Memberships />
      <BookMeeting />
    </Background>
  );
};

export default About;
