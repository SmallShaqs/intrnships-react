import React, { Fragment } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-grid-system";

import FieldText from "@atlaskit/field-text";
import Select from "@atlaskit/select";
import FieldTextArea from "@atlaskit/field-text-area";

import Form, { Field } from "@atlaskit/form";

import Input from "../Input/Input";
import AdvancedInput from "../AdvancedInput/AdvancedInput";

const StyledCol = styled(Col)`
  margin-bottom: 30px;
`;

export default ({
  inputs: { companyName, companyEmail, aboutCompany, facebookURL, instagramURL, mediumURL },
  onInputFieldChange
}) => (
  <Fragment>
    <Row>
      <StyledCol md={4}>
        <Field label="Company Name" isRequired>
          <FieldText
            onChangeInput={e => onInputFieldChange(e, "companyName")}
            isRequired
            shouldFitContainer
          />
        </Field>
      </StyledCol>
    </Row>
    <Row>
      <StyledCol md={4}>
        <Field label="Company Email" isRequired>
          <FieldText
            onChangeInput={e => onInputFieldChange(e, "companyEmail")}
            isRequired
            shouldFitContainer
          />
        </Field>
      </StyledCol>
    </Row>
    <Row>
      <StyledCol md={8}>
        <FieldTextArea
          value={aboutCompany}
          label="About Company"
          shouldFitContainer
          onChange={e => onInputFieldChange(e, "aboutCompany")}
        />
      </StyledCol>
    </Row>

    <Row>
      <StyledCol>
        <Input
          title="Facebook"
          inputValue={facebookURL}
          onChangeInput={e => onInputFieldChange(e, "facebookURL")}
        />
      </StyledCol>
      <StyledCol>
        <Input
          title="Instagram"
          inputValue={instagramURL}
          onChangeInput={e => onInputFieldChange(e, "instagramURL")}
        />
      </StyledCol>
      <StyledCol>
        <Input
          title="Medium"
          inputValue={mediumURL}
          onChangeInput={e => onInputFieldChange(e, "mediumURL")}
        />
      </StyledCol>
    </Row>
  </Fragment>
);
