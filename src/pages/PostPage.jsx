import React from "react";

import Input from "./postPage/Input/Input";
import AdvancedInput from "./postPage/AdvancedInput/AdvancedInput";

export default class extends React.Component {
  state = {
    position: "",
    mainLanguage: "",
    salary: "",

    activities: [""],
    techRequirements: [""]
  };

  onChangePosition = ({ target: { value } }) => this.setState({ position: value });
  onChangeSalary = ({ target: { value } }) => this.setState({ salary: value });
  onChangeMainLanguage = ({ target: { value } }) => this.setState({ mainLanguage: value });

  onActivityChange = ({ target: { value } }, info, idx) => {
    const partialState = this.state[info];
    partialState[idx] = value;

    this.setState({ [info]: partialState });
  };

  onActivityAdd = info => {
    const partialState = this.state[info];
    partialState.push("");

    this.setState({ [info]: partialState });
  };

  onActivityRemove = (info, idx) => {
    const partialState = this.state[info];
    partialState.splice(idx, 1);

    this.setState({ [info]: partialState });
  };

  render() {
    const { position, salary, activities, mainLanguage, techRequirements } = this.state;

    return (
      <div>
        <Input title="Position" inputValue={position} onChangeInput={this.onChangePosition} />
        <Input
          title="Main Language"
          inputValue={mainLanguage}
          onChangeInput={this.onChangeMainLanguage}
        />

        <AdvancedInput
          title="Job Activities"
          inputs={activities}
          onInputsChange={() => this.onActivityChange("activities")}
          onInputAdd={() => this.onActivityAdd("activities")}
          onInputDelete={() => this.onActivityRemove("activities")}
        />

        <AdvancedInput
          title="Tech Requirements"
          inputs={techRequirements}
          onInputsChange={() => this.onActivityChange("techRequirements")}
          onInputAdd={() => this.onActivityAdd("techRequirements")}
          onInputDelete={() => this.onActivityRemove("techRequirements")}
        />

        <Input
          title="Salary"
          type="number"
          inputValue={salary}
          onChangeInput={this.onChangeSalary}
        />
      </div>
    );
  }
}
