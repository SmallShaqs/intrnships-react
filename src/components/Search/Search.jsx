import React from "react";
import styled from "styled-components";

import Input from "../Input/Input";

const Container = styled.div`
  background-color: #f8f8f8;
  border-radius: 5px;

  margin-top: 50px;
  padding: 50px;

  display: flex;
  justify-content: space-between;
`;

export default () => (
  <Container>
    <div>
      <p>Location</p>
      <Input />
    </div>
    <div>
      <p>Position</p>

      <Input />
    </div>
  </Container>
);
