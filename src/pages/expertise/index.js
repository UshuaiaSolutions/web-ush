import React from "react";
import BookMeetingSmall from "../../components/BookMeetingSmall";
import MeetClients from "../../components/expertise/MeetClients";
import Teaming from "../../components/expertise/Teaming";

const Expertise = () => {
  return (
    <>
      <Teaming />
      <MeetClients />
      <BookMeetingSmall />
    </>
  );
};

export default Expertise;
