import React from "react";
import FollowUS from "../../components/blog/FollowUS";
import Something from "../../components/blog/Something";
import Container from "../../components/base/Container";
import BookMeetingSmall from "../../components/compartidos/BookMeetingSmall";

const USHBlog = () => {
  return (
    <Container>
      <FollowUS />
      <Something />
      <BookMeetingSmall />
    </Container>
  );
};

export default USHBlog;
