import React from "react";
import styled from "styled-components";

import Logo from "../../assets/logo.svg";
import CallToAction from "../buttons/CTA/CallToAction";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default () => (
  <Container>
    <img alt="Junior Jobs" src={Logo} />
    <CallToAction title="Post a Job" />
  </Container>
);
