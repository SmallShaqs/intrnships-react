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
import { Link } from "react-router-dom";

const CompanyInfo = styled.div`
  width: 300px;
`;

const JobTags = styled.div``;

const JobViews = styled.div``;

const Grid = styled.div``;

const StyleLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export default ({
  company,
  id,
  position,
  tags,
  views,
  location,
  withEye = false,
  premium = false
}) => {
  const [isPressed, setPressed] = React.useState(false);

  return (
    <StyleLink to={`/view/${id}`}>
      <Container>
        <Image alt="Facebook Logo" src={FB_Logo} />

        <CompanyInfo>
          <Company>{company}</Company>
          <Title>{position}</Title>
          <Inline>
            <Info>{location}</Info>
          </Inline>
        </CompanyInfo>

        {premium ? (
          <React.Fragment>
            <div
              style={{
                width: 300,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Inline>
                {tags.map(tag => (
                  <Tag>#{tag}</Tag>
                ))}
              </Inline>
            </div>

            <div
              style={{
                width: 50,
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center"
              }}
            >
              {withEye ? (
                <Inline>
                  <EyeNumber>{views}</EyeNumber>
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
                {tags.map(tag => (
                  <Tag>#{tag}</Tag>
                ))}
              </Inline>
            </div>
          </React.Fragment>
        )}
      </Container>
    </StyleLink>
  );
};
