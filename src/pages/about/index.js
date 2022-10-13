import React from "react";
import styled from "styled-components";
import GetToKnow from "../../components/about/GetToKnow";
import MeetYourLanguage from "../../components/about/MeetYourLanguage";
import MeetYourNeeds from "../../components/about/MeetYourNeeds";
import WorkWithUs from "../../components/about/WorkWithUs";
import BookMeeting from "../../components/compartidos/BookMeeting";
import Memberships from "../../components/compartidos/Memberships";

const Background = styled.div`
  background-color: ${(props) => props.theme.fondo};
  color: ${(props) => props.theme.textonegro};
`;

const About = () => {
  return (
    <Background>
      <MeetYourLanguage />
      <GetToKnow />
      <WorkWithUs />
      <MeetYourNeeds />
      <Memberships />
      <BookMeeting />
    </Background>
  );
};

export default About;
