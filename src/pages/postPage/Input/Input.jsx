import React, { Fragment, useState } from "react";
import styled from "styled-components";

const Title = styled.p`
  font-family: MaisonNeue-Medium;
  font-size: 16px;
  color: #000000;
  letter-spacing: 1.2px;
`;

const Input = styled.input`
  background: #fcfcfc;
  border: 1px solid #d8d8d8;
  border-radius: 5px;

  padding: 8px;
  min-width: 200px;
`;

const Container = styled.div`
  margin-bottom: 30px;
`;

const Button = styled.button`
  background: #ff285a;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 12px;

  margin-left: 20px;
  height: 35px;
  width: 35px;
`;

const PostInput = ({
  title,
  type,
  inputValue,
  onChangeInput,
  addInput,
  buttonSign,
  deleteInput
}) => (
  <Container>
    {title && <Title>{title.toUpperCase()}</Title>}
    <Input type={type} onChange={onChangeInput} value={inputValue} />
    {addInput && (
      <Button onClick={buttonSign === "+" ? addInput : deleteInput}>{buttonSign}</Button>
    )}
  </Container>
);
PostInput.defaultProps = {
  type: "text",
  title: false,
  buttonSign: "+"
};

export default PostInput;
