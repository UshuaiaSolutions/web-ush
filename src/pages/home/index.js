import React from "react";
import styled from "styled-components";
import BookMeeting from "../../components/compartidos/BookMeeting";
import Hero from "../../components/home/Hero";
import Needs from "../../components/home/Needs";
import BringingTogether from "../../components/home/BringingTogether";
import WhyUSH from "../../components/home/WhyUSH";
import MeetClients from "../../components/home/MeetClients";
import Valores from "../../components/home/Valores";

const Background = styled.div`
  background-color: ${(props) => props.theme.fondo};
  color: ${(props) => props.theme.texto};
  transition: 0.2s;
`;

const Home = () => {
  return (
    <Background>
      <Hero />
      <Needs />
      <BringingTogether />
      <MeetClients />
      <Valores />
      <WhyUSH />
      <BookMeeting />
    </Background>
  );
};

export default Home;
