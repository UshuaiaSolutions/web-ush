import React from "react";
import styled from "styled-components";
import WeCanHelp from "../../components/about/WeCanHelp";
import MeetYourLanguage from "../../components/about/MeetYourLanguage";
import MeetYourNeeds from "../../components/about/MeetYourNeeds";
import OurMemberships from "../../components/about/OurMemerships";
import WorkWithUs from "../../components/about/WorkWithUs";
import BookMeeting from "../../components/compartidos/BookMeeting";

const Background = styled.div`
  background-color: ${(props) => props.theme.fondoblanco};
  color: ${(props) => props.theme.textonegro};
`;

const About = () => {
  return (
    <Background>
      <MeetYourLanguage />
      <WeCanHelp />
      {/* <WorkWithUs /> */}
      <MeetYourNeeds />
      {/* <OurMemberships /> */}
      <BookMeeting />
    </Background>
  );
};

export default About;
