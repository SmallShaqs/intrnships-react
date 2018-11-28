import React, { Fragment } from "react";

import Input from "../Input/Input";
import AdvancedInput from "../AdvancedInput/AdvancedInput";

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
    <Input
      title="Position"
      inputValue={position}
      onChangeInput={e => onInputFieldChange(e, "position")}
    />
    <Input
      title="Main Language"
      optionName="languages"
      options={["React", "Golang", "Node.js"]}
      inputValue={mainLanguage}
      onChangeInput={e => onInputFieldChange(e, "mainLanguage")}
    />

    <AdvancedInput
      title="Job Activities"
      inputs={activities}
      onInputsChange={onInputChange("activities")}
      onInputAdd={onInputAdd("activities")}
      onInputDelete={onInputRemove("activities")}
    />

    <AdvancedInput
      title="Tech Requirements"
      inputs={techRequirements}
      onInputsChange={onInputChange("techRequirements")}
      onInputAdd={onInputAdd("techRequirements")}
      onInputDelete={onInputRemove("techRequirements")}
    />

    <AdvancedInput
      title="Personal Requirements"
      inputs={personalRequirements}
      onInputsChange={onInputChange("personalRequirements")}
      onInputAdd={onInputAdd("personalRequirements")}
      onInputDelete={onInputRemove("personalRequirements")}
    />

    <AdvancedInput
      title="We Offer"
      inputs={weOffer}
      onInputsChange={onInputChange("weOffer")}
      onInputAdd={onInputAdd("weOffer")}
      onInputDelete={onInputRemove("weOffer")}
    />

    <Input
      title="Salary"
      type="number"
      inputValue={salary}
      onChangeInput={e => onInputFieldChange(e, "salary")}
    />
  </Fragment>
);
