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
      onChangeInput={e => onInputFieldChange(e, "companyName")}
    />
    <Input
      title="Company Email"
      inputValue={companyEmail}
      onChangeInput={e => onInputFieldChange(e, "companyEmail")}
    />
    <Input
      title="About Company"
      inputValue={aboutCompany}
      onChangeInput={e => onInputFieldChange(e, "aboutCompany")}
    />
    <Input
      title="Facebook"
      inputValue={facebookURL}
      onChangeInput={e => onInputFieldChange(e, "facebookURL")}
    />
    <Input
      title="Instagram"
      inputValue={instagramURL}
      onChangeInput={e => onInputFieldChange(e, "instagramURL")}
    />
    <Input
      title="Medium"
      inputValue={mediumURL}
      onChangeInput={e => onInputFieldChange(e, "mediumURL")}
    />
  </Fragment>
);
