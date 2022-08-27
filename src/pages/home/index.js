import React from "react";
import styled from "styled-components";
import BookMeeting from "../../components/compartidos/BookMeeting";
import Hero from "../../components/home/Hero";
import Memberships from "../../components/compartidos/Memberships";
import Needs from "../../components/home/Needs";
import TeamingWithClients from "../../components/home/TeamingWithClients";
import WhyUSH from "../../components/home/WhyUSH";

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
      <Memberships />
      <WhyUSH />
      <BookMeeting />
    </Background>
  );
};

export default Home;
