import React, { Fragment } from "react";
import styled from "styled-components";

import Input from "../Input/Input";

export default class InputFieldSet extends React.Component {
  printExtraInputs = () => {
    const { title, inputs, onInputsChange, onInputAdd, onInputDelete } = this.props;
    return inputs.map((input, idx) => (
      <Input
        title={idx === 0 ? title : null}
        onChangeInput={e => onInputsChange(e, idx)}
        inputValue={inputs[idx]}
        addInput={onInputAdd}
        deleteInput={() => onInputDelete(idx)}
        buttonSign={idx === 0 ? "+" : "-"}
      />
    ));
  };

  render() {
    const { title, inputs, onInputAdd } = this.props;
    return <div>{this.printExtraInputs()}</div>;
  }
}
