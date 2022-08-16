import React from "react";
import BookMeetingSmall from "../../components/BookMeetingSmall";
import ExpertiseAreas from "../../components/services/ExpertiseAreas";
import Explore from "../../components/services/Explore";
import HowWeCan from "../../components/services/HowWeCan";
import MeetYourNeeds from "../../components/services/MeetYourNeeds";

const Services = () => {
  return (
    <>
      <MeetYourNeeds />
      <HowWeCan />
      <Explore />
      <ExpertiseAreas />
      <BookMeetingSmall />
    </>
  );
};

export default Services;
