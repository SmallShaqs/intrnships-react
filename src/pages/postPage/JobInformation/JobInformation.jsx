import React, { Fragment } from "react";
import styled from "styled-components";

import { Container, Row, Col } from "react-grid-system";
import makeAnimated from "react-select/lib/animated";

import Input from "../Input/Input";
import AdvancedInput from "../AdvancedInput/AdvancedInput";

import Select from "@atlaskit/select";
import FieldText from "@atlaskit/field-text";
import Form, { Field, FormHeader, FormSection, FormFooter, Validator } from "@atlaskit/form";

const StyledCol = styled(Col)`
  margin-bottom: 30px;
`;

export default ({
  inputs: {
    position,
    mainLanguage,
    techRequirements,
    personalRequirements,
    weOffer,
    activities,
    salary
  },
  onInputFieldChange,
  onInputAdd,
  onInputChange,
  onInputRemove
}) => (
  <Fragment>
    <Row>
      <StyledCol md={4}>
        <Field isInvalid label="position" isRequired>
          <FieldText
            name="position"
            onChangeInput={e => onInputFieldChange(e, "position")}
            isRequired
            shouldFitContainer
          />
        </Field>
      </StyledCol>
    </Row>
    <Row>
      <StyledCol lg={4}>
        <Field
          label="main language"
          helperText="This language will be shown higher in searches"
          isRequired
        >
          <Select
            name="main language"
            options={[
              { value: "react", label: "React" },
              { value: "go", label: "Golang" },
              { value: "node", label: "Node.js" }
            ]}
            value={mainLanguage}
          />
        </Field>
      </StyledCol>
      <StyledCol lg={4}>
        <Field label="opt languages" isRequired>
          <Select
            name="opt languages"
            isMulti
            isSearchable
            options={[
              { value: "react", label: "React" },
              { value: "go", label: "Golang" },
              { value: "node", label: "Node.js" }
            ]}
            value={mainLanguage}
          />
        </Field>
      </StyledCol>
    </Row>

    <Row>
      <StyledCol md={8}>
        <AdvancedInput
          title="Job Activities"
          inputs={activities}
          onInputsChange={onInputChange("activities")}
          onInputAdd={onInputAdd("activities")}
          onInputDelete={onInputRemove("activities")}
        />
      </StyledCol>
    </Row>

    <Row>
      <StyledCol md={8}>
        <AdvancedInput
          title="Tech Requirements"
          inputs={techRequirements}
          onInputsChange={onInputChange("techRequirements")}
          onInputAdd={onInputAdd("techRequirements")}
          onInputDelete={onInputRemove("techRequirements")}
        />
      </StyledCol>
    </Row>
    <Row>
      <StyledCol md={8}>
        <AdvancedInput
          title="Personal Requirements"
          inputs={personalRequirements}
          onInputsChange={onInputChange("personalRequirements")}
          onInputAdd={onInputAdd("personalRequirements")}
          onInputDelete={onInputRemove("personalRequirements")}
        />
      </StyledCol>
    </Row>
    <Row>
      <StyledCol md={8}>
        <AdvancedInput
          title="We Offer"
          inputs={weOffer}
          onInputsChange={onInputChange("weOffer")}
          onInputAdd={onInputAdd("weOffer")}
          onInputDelete={onInputRemove("weOffer")}
        />
      </StyledCol>
    </Row>

    <Row>
      <StyledCol md={2}>
        <Field label="salary" isRequired>
          <FieldText
            name="salary"
            type="number"
            value={salary}
            onChangeInput={e => onInputFieldChange(e, "salary")}
            isRequired
            shouldFitContainer
          />
        </Field>
      </StyledCol>
    </Row>
  </Fragment>
);
