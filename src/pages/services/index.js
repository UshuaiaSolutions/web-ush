import React from "react";
import BookMeetingSmall from "../../components/compartidos/BookMeetingSmall";
import ExpertiseAreas from "../../components/services/ExpertiseAreas";
import Explore from "../../components/services/Explore";
import HowWeCan from "../../components/services/HowWeCan";
import MeetYourNeeds from "../../components/services/MeetYourNeeds";
import Valores from "../../components/home/Valores";

const Services = () => {
  return (
    <>
      <MeetYourNeeds />
      <HowWeCan />
      <Explore />
      <ExpertiseAreas />
      <Valores />
      <BookMeetingSmall />
    </>
  );
};

export default Services;
