import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 50px 15%;

  @media (max-width: 425px) {
    padding: 50px 10%;
  }
  @media (max-width: 320px) {
    padding: 50px 5%;
  }
`;

export default ({ children }) => <Container>{children}</Container>;
