import React from "react";
import styled from "styled-components";

const Main = styled.p`
  font-family: MaisonNeue-Demi;
  font-size: 20px;
  color: #000000;
  letter-spacing: 1.2px;
  line-height: 1.4em;
`;

const Side = styled.p`
  font-family: MaisonNeue-Medium;
  font-size: 12px;
  color: #000000;
  letter-spacing: 1px;
`;

export default () => (
  <React.Fragment>
    <Main>Apply for your dream job without the hassle!</Main>
    <Side>And become the best you ever could!</Side>
  </React.Fragment>
);
