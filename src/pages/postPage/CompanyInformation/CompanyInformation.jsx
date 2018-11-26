import React, { Fragment } from "react";

import Input from "../Input/Input";
import AdvancedInput from "../AdvancedInput/AdvancedInput";

export default ({
  inputs: { companyName, companyEmail, aboutCompany, facebookURL, instagramURL, mediumURL },
  onInputFieldChange
}) => (
  <Fragment>
    <Input
      title="Company Name"
      inputValue={companyName}
      onChangeInput={() => onInputFieldChange("companyName")}
    />
    <Input
      title="Company Email"
      inputValue={companyEmail}
      onChangeInput={() => onInputFieldChange("companyEmail")}
    />
    <Input
      title="About Company"
      inputValue={aboutCompany}
      onChangeInput={() => onInputFieldChange("aboutCompany")}
    />
    <Input
      title="Facebook"
      inputValue={facebookURL}
      onChangeInput={() => onInputFieldChange("facebookURL")}
    />
    <Input
      title="Instagram"
      inputValue={instagramURL}
      onChangeInput={() => onInputFieldChange("instagramURL")}
    />
    <Input
      title="Medium"
      inputValue={mediumURL}
      onChangeInput={() => onInputFieldChange("mediumURL")}
    />
  </Fragment>
);
