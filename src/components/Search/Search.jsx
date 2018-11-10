import React from "react";
import styled from "styled-components";

import Input from "../Input/Input";

const Container = styled.div`
  background-color: #f8f8f8;
  border-radius: 5px;

  margin-top: 50px;
  padding: 40px;

  text-align: left;

  display: flex;
  justify-content: space-between;
`;

const InputText = styled.p`
  font-family: MaisonNeue-Medium;
  font-size: 18px;
  color: #000000;
  letter-spacing: 1.2px;
  margin-top: 0px;
`;

export default () => (
  <Container>
    <div>
      <InputText>Location</InputText>
      <Input placeholder="All" />
    </div>
    <div>
      <InputText>Position</InputText>
      <Input placeholder="All" />
    </div>
  </Container>
);
