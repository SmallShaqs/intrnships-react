import React from "react";
import styled from "styled-components";

import FB_Logo from "../../assets/fb_logo.png";
import Eye_Icon from "../../assets/eye-icon.svg";

import ExtraInfo from "./ExtraInfo";

import {
  EyeIcon,
  EyeNumber,
  Image,
  Center,
  Container,
  Tag,
  Info,
  Inline,
  Title,
  Company
} from "./jobCard/styled";

const CompanyInfo = styled.div``;

const JobTags = styled.div``;

const JobViews = styled.div``;

const Grid = styled.div``;

export default ({ withEye = false, premium = false }) => {
  const [isPressed, setPressed] = React.useState(false);

  return (
    <Container>
      <Image alt="Facebook Logo" src={FB_Logo} />

      <CompanyInfo>
        <Company>Facebook</Company>
        <Title>Senior DevOps Engineer</Title>
        <Inline>
          <Info>👨‍💻Software</Info>
          <Info>🇩🇪Berlin, Germany</Info>
        </Inline>
      </CompanyInfo>

      {premium ? (
        <React.Fragment>
          <div
            style={{ width: 300, display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            <Inline>
              <Tag>#AWS</Tag>
              <Tag>#Docker</Tag>
              <Tag>#Kubernetes</Tag>
            </Inline>
          </div>

          <div
            style={{ width: 50, display: "flex", justifyContent: "flex-end", alignItems: "center" }}
          >
            {withEye ? (
              <Inline>
                <EyeNumber>44</EyeNumber>
                <EyeIcon alt="Eye Icon" src={Eye_Icon} />
              </Inline>
            ) : null}
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div
            style={{
              width: 350,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center"
            }}
          >
            <Inline>
              <Tag>#AWS</Tag>
              <Tag>#Docker</Tag>
              <Tag>#Kubernetes</Tag>
            </Inline>
          </div>
        </React.Fragment>
      )}
    </Container>
  );
};
