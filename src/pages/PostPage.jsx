import React from "react";
import styled from "styled-components";

import { Container, Row, Col } from "react-grid-system";
import Select from "@atlaskit/select";
import FieldText from "@atlaskit/field-text";
import Form, { Field, FormHeader, FormSection, FormFooter, Validator } from "@atlaskit/form";
import FieldTextArea from "@atlaskit/field-text-area";

import JobInformationInputs from "./postPage/JobInformation/JobInformation";
import CompanyInformation from "./postPage/CompanyInformation/CompanyInformation";

import Button from "../components/buttons/CTA/CallToAction";
import AdvancedInput from "./postPage/AdvancedInput/AdvancedInput";

const Title = styled.p`
  font-family: MaisonNeue-Demi;
  font-size: 22px;
  color: #000000;
  letter-spacing: 1.8px;

  margin-top: 100px;
  margin-bottom: 60px;
`;

const StyledCol = styled(Col)`
  margin-bottom: 30px;
`;

export default class extends React.Component {
  state = {
    position: "",
    mainLanguage: "",
    optionalLang: null,
    salary: "",
    activities: [""],
    techRequirements: [""],
    personalRequirements: [""],
    weOffer: [""],

    companyName: "",
    companyEmail: "",
    aboutCompany: "",
    facebookURL: "",
    instagramURL: "",
    mediumURL: "",

    positionErr: undefined,
    mainLangErr: undefined,
    optionalLangErr: undefined,
    salaryError: undefined,
    nameErr: undefined,
    emailErr: undefined,
    aboutErr: undefined
  };

  onInputFieldChange = ({ target: { value } }, name) => this.setState({ [name]: value });

  onInputChange = info => ({ target: { value } }, idx) => {
    const partialState = this.state[info];
    partialState[idx] = value;

    this.setState({ [info]: partialState });
  };

  onInputAdd = info => () => {
    const partialState = this.state[info];
    partialState.push("");

    this.setState({ [info]: partialState });
  };

  onInputRemove = info => idx => {
    const partialState = this.state[info];
    partialState.splice(idx, 1);

    this.setState({ [info]: partialState });
  };

  onSubmit = () => {
    const {
      positionErr,
      mainLangErr,
      optionalLangErr,
      salaryError,
      nameErr,
      emailErr,
      aboutErr
    } = this.state;

    if (!this.state.position) this.setState({ positionErr: true });
    if (!this.state.mainLanguage) this.setState({ mainLangErr: true });
    if (!this.state.optionalLang) this.setState({ optionalLangErr: true });
    if (!this.state.salary) this.setState({ salaryError: true });
    if (!this.state.companyName) this.setState({ nameErr: true });
    if (!this.state.emailErr) this.setState({ emailErr: true });
    if (!this.state.aboutCompany) this.setState({ aboutErr: true });

    const validateResult = this.formRef.validate();
    console.log(this.formRef);
  };

  render() {
    const {
      position,
      mainLanguage,
      optionalLang,
      salary,
      activities,
      techRequirements,
      personalRequirements,
      weOffer,
      companyName,
      companyEmail,
      aboutCompany,
      facebookURL,
      mediumURL,
      instagramURL
    } = this.state;

    const {
      positionErr,
      mainLangErr,
      optionalLangErr,
      salaryError,
      nameErr,
      emailErr,
      aboutErr
    } = this.state;

    return (
      <div>
        <Form
          name="layout-example"
          ref={form => {
            this.formRef = form;
          }}
        >
          <FormSection name="text-fields">
            <Title>Job Information</Title>

            <Row>
              <StyledCol md={4}>
                <Field
                  label="Position"
                  invalidMessage="Field is required!"
                  isInvalid={positionErr}
                  isRequired
                >
                  <FieldText
                    value={position}
                    onChange={e => this.onInputFieldChange(e, "position")}
                    shouldFitContainer
                  />
                </Field>
              </StyledCol>
            </Row>
            <Row>
              <StyledCol lg={4}>
                <Field
                  label="main language"
                  invalidMessage="Field is required!"
                  isInvalid={mainLangErr}
                  helperText="This language will be shown higher in searches"
                  isRequired
                >
                  <Select
                    label="main language"
                    options={[
                      { value: "react", label: "React" },
                      { value: "go", label: "Golang" },
                      { value: "node", label: "Node.js" }
                    ]}
                    onChange={({ value }) => {
                      console.log(this.state);
                      this.setState({ mainLanguage: value });
                    }}
                  />
                </Field>
              </StyledCol>
              <StyledCol lg={4}>
                <Field
                  label="opt languages"
                  invalidMessage="Field is required!"
                  isInvalid={optionalLangErr}
                  isRequired
                >
                  <Select
                    label="opt languages"
                    isMulti
                    isSearchable
                    options={[
                      { value: "react", label: "React" },
                      { value: "go", label: "Golang" },
                      { value: "node", label: "Node.js" }
                    ]}
                    onChange={values => {
                      console.log(this.state);
                      if (!values.length) this.setState({ optionalLang: null });
                      else {
                        const parsed = values.map(v => v.value);
                        this.setState({ optionalLang: parsed });
                      }
                    }}
                  />
                </Field>
              </StyledCol>
            </Row>

            <Row>
              <StyledCol md={8}>
                <AdvancedInput
                  title="Job Activities"
                  inputs={activities}
                  onInputsChange={this.onInputChange("activities")}
                  onInputAdd={this.onInputAdd("activities")}
                  onInputDelete={this.onInputRemove("activities")}
                />
              </StyledCol>
            </Row>

            <Row>
              <StyledCol md={8}>
                <AdvancedInput
                  title="Tech Requirements"
                  inputs={techRequirements}
                  onInputsChange={this.onInputChange("techRequirements")}
                  onInputAdd={this.onInputAdd("techRequirements")}
                  onInputDelete={this.onInputRemove("techRequirements")}
                />
              </StyledCol>
            </Row>
            <Row>
              <StyledCol md={8}>
                <AdvancedInput
                  title="Personal Requirements"
                  inputs={personalRequirements}
                  onInputsChange={this.onInputChange("personalRequirements")}
                  onInputAdd={this.onInputAdd("personalRequirements")}
                  onInputDelete={this.onInputRemove("personalRequirements")}
                />
              </StyledCol>
            </Row>
            <Row>
              <StyledCol md={8}>
                <AdvancedInput
                  title="We Offer"
                  inputs={weOffer}
                  onInputsChange={this.onInputChange("weOffer")}
                  onInputAdd={this.onInputAdd("weOffer")}
                  onInputDelete={this.onInputRemove("weOffer")}
                />
              </StyledCol>
            </Row>

            <Row>
              <StyledCol md={2}>
                <Field
                  invalidMessage="Field is required!"
                  isInvalid={salaryError}
                  label="salary"
                  isRequired
                >
                  <FieldText
                    label="salary"
                    type="number"
                    value={salary}
                    onChange={e => this.this.onInputFieldChange(e, "salary")}
                    isRequired
                    shouldFitContainer
                  />
                </Field>
              </StyledCol>
            </Row>

            <Title>Company Information</Title>
            <Row>
              <StyledCol md={4}>
                <Field
                  invalidMessage="Field is required!"
                  isInvalid={nameErr}
                  label="Company Name"
                  isRequired
                >
                  <FieldText
                    label="company-name"
                    onChange={e => this.onInputFieldChange(e, "companyName")}
                    isRequired
                    shouldFitContainer
                  />
                </Field>
              </StyledCol>
            </Row>
            <Row>
              <StyledCol md={4}>
                <Field
                  invalidMessage="Field is required!"
                  isInvalid={emailErr}
                  label="Company Email"
                  isRequired
                >
                  <FieldText
                    label="company-email"
                    onChange={e => this.onInputFieldChange(e, "companyEmail")}
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
                  label="about-us"
                  shouldFitContainer
                  onChange={e => this.onInputFieldChange(e, "aboutCompany")}
                />
              </StyledCol>
            </Row>

            <Row>
              <StyledCol>
                <Field label="Facebook" isRequired>
                  <FieldText
                    label="facebook-url"
                    onChange={e => this.onInputFieldChange(e, "companyEmail")}
                    inputValue={facebookURL}
                    isRequired
                    shouldFitContainer
                  />
                </Field>
              </StyledCol>
              <StyledCol>
                <Field label="Instagram" isRequired>
                  <FieldText
                    label="instagram-url"
                    onChange={e => this.onInputFieldChange(e, "companyName")}
                    inputValue={instagramURL}
                    isRequired
                    shouldFitContainer
                  />
                </Field>
              </StyledCol>
              <StyledCol>
                <Field label="Medium" isRequired>
                  <FieldText
                    label="medium-url"
                    onChange={e => this.onInputFieldChange(e, "companyName")}
                    inputValue={mediumURL}
                    isRequired
                    shouldFitContainer
                  />
                </Field>
              </StyledCol>
            </Row>
          </FormSection>
          <FormFooter>
            <Button type="submit" title="Submit" onClick={this.onSubmit} />
          </FormFooter>
        </Form>
      </div>
    );
  }
}
