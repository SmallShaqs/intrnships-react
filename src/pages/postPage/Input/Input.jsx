import React, { Fragment, useState } from "react";
import { Container, Row, Col } from "react-grid-system";

import styled from "styled-components";

import FieldText from "@atlaskit/field-text";
import Select from "@atlaskit/select";
import Form, { Field } from "@atlaskit/form";

const Button = styled.button`
  background: #ff285a;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 12px;

  margin-left: 20px;
  margin-top: 8px;
  height: 40px;
  width: 40px;
`;

const PostInput = ({
  title,
  type,
  inputValue,
  onChangeInput,
  addInput,
  buttonSign,
  deleteInput,
  optionName,
  options,
  selectProps
}) => (
  <div>
    {title && (
      <Field label={title.toUpperCase()}>
        <div />
      </Field>
    )}

    <Row>
      <Col md={11}>
        <Field isLabelHidden>
          <FieldText onChangeInput={onChangeInput} value={inputValue} shouldFitContainer />
        </Field>
      </Col>
      <Col md={1}>
        {addInput && (
          <Button
            onClick={
              buttonSign === "+"
                ? e => {
                    e.preventDefault();
                    addInput();
                  }
                : e => {
                    e.preventDefault();
                    deleteInput();
                  }
            }
          >
            {buttonSign}
          </Button>
        )}
      </Col>
    </Row>
  </div>
);
PostInput.defaultProps = {
  type: "text",
  title: false,
  optionName: false,
  options: [],
  buttonSign: "+",
  selectProps: {}
};

export default PostInput;
