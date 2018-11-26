import React from "react";
import styled from "styled-components";
import JobInformationInputs from "./postPage/JobInformation/JobInformation";
import CompanyInformation from "./postPage/CompanyInformation/CompanyInformation";

const Title = styled.p`
  font-family: MaisonNeue-Demi;
  font-size: 20px;
  color: #000000;
  letter-spacing: 1.8px;

  margin-top: 100px;
  margin-bottom: 60px;
`;

export default class extends React.Component {
  state = {
    position: "",
    mainLanguage: "",
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
    mediumURL: ""
  };

  onChangePosition = ({ target: { value } }) => this.setState({ position: value });
  onChangeSalary = ({ target: { value } }) => this.setState({ salary: value });
  onChangeMainLanguage = ({ target: { value } }) => this.setState({ mainLanguage: value });

  onInputFieldChange = ({ target: { value } }, name) => this.setState({ [name]: value });

  onInputChange = ({ target: { value } }, info, idx) => {
    const partialState = this.state[info];
    partialState[idx] = value;

    this.setState({ [info]: partialState });
  };

  onInputAdd = info => {
    const partialState = this.state[info];
    partialState.push("");

    this.setState({ [info]: partialState });
  };

  onInputRemove = (info, idx) => {
    const partialState = this.state[info];
    partialState.splice(idx, 1);

    this.setState({ [info]: partialState });
  };

  render() {
    const { position, salary, activities, mainLanguage, techRequirements } = this.state;

    return (
      <div>
        <Title>Job Information</Title>
        <JobInformationInputs
          inputs={this.state}
          onChangePosition={this.onChangePosition}
          onChangeSalary={this.onChangeSalary}
          onChangeMainLanguage={this.onChangeMainLanguage}
          onInputChange={this.onInputChange}
          onInputAdd={this.onInputAdd}
          onInputRemove={this.onInputRemove}
        />

        <Title>Company Information</Title>
        <CompanyInformation inputs={this.state} onInputFieldChange={this.onInputFieldChange} />
      </div>
    );
  }
}
