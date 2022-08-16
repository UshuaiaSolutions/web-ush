import React from "react";
import styled from "styled-components";
import BookMeeting from "../../components/BookMeeting";
import Hero from "../../components/Hero";
import Memberships from "../../components/Memberships";
import Needs from "../../components/Needs";
import TeamingWithClients from "../../components/TeamingWithClients";
import WhyUSH from "../../components/WhyUSH";

const Background = styled.div`
  background-color: ${(props) => props.theme.fondo};
  color: ${(props) => props.theme.textonegro};
`;

const Home = () => {
  return (
    <Background>
      <Hero />
      <Needs />
      <TeamingWithClients />
      <WhyUSH />
      <Memberships />
      <BookMeeting />
    </Background>
  );
};

export default Home;
