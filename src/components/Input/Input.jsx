import React from "react";
import styled from "styled-components";

const Input = styled.input`
  border-radius: 5px;
  border: 2px solid #d8d8d8;

  font-size: 15px;

  padding: 5px;
  height: 35px;

  width: 100%;
  @media (min-width: 767px) {
    max-width: 180px;
  }
`;

export default Input;
