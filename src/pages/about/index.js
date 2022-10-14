import React from "react";
import styled from "styled-components";
import GetToKnow from "../../components/about/GetToKnow";
import MeetYourLanguage from "../../components/about/MeetYourLanguage";
import MeetYourNeeds from "../../components/about/MeetYourNeeds";
import OurMemberships from "../../components/about/OurMemerships";
import WorkWithUs from "../../components/about/WorkWithUs";
import BookMeeting from "../../components/compartidos/BookMeeting";

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
      <OurMemberships />
      <BookMeeting />
    </Background>
  );
};

export default About;
