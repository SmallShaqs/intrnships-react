import React from "react";
import styled from "styled-components";

const RedButton = styled.div`
  background-color: #ff285a;
  border-radius: 5px;

  font-family: MaisonNeue-Demi;
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 1px;
  text-transform: uppercase;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 110px;
  height: 45px;

  :hover {
    background-color: #db0033;
    cursor: pointer;
  }

  ${({ style }) => style}
`;

export default ({ title, type = undefined, onClick = () => {}, style = {} }) => (
  <RedButton style={style} type={type} onClick={onClick}>
    {title}
  </RedButton>
);
