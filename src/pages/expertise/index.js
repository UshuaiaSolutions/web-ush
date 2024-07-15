import React from "react";
import BookMeetingSmall from "../../components/compartidos/BookMeetingSmall";
import MeetClients from "../../components/expertise/MeetClients";
import Teaming from "../../components/expertise/Teaming";
import Memberships from "../../components/compartidos/Memberships";
import OurApproach from "../../components/expertise/OurApproach";

const Expertise = () => {
  return (
    <>
      <Teaming />
      <MeetClients />
      <OurApproach />
      <Memberships />
      <BookMeetingSmall />
    </>
  );
};

export default Expertise;
