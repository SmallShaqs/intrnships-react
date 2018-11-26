import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Logo from "../../assets/logo.svg";
import CallToAction from "../buttons/CTA/CallToAction";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const LinkWrapper = styled(Link)`
  text-decoration: none;
`;

export default () => (
  <Container>
    <LinkWrapper to="/">
      <img alt="Junior Jobs" src={Logo} />
    </LinkWrapper>
    <LinkWrapper to="/post">
      <CallToAction title="Post a Job" />
    </LinkWrapper>
  </Container>
);
