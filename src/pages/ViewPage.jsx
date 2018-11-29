import React from "react";
import styled from "styled-components";

import { Container, Row, Col } from "react-grid-system";

import SubmitButton from "../components/buttons/CTA/CallToAction";
import { Info } from "../components/JobCard/jobCard/styled";
import FB_Logo from "../assets/fb_logo.png";

const Title = styled.p`
  font-family: MaisonNeue-Demi;
  font-size: 24px;
  color: #000000;
  letter-spacing: 1.8px;

  margin-top: 100px;
  margin-bottom: 60px;
`;

const jobActivities = [
  "Code as part of an Agile product-focused software development team",
  "Implement and enforce continuous integration and test - driven development practices",
  "Develop and test code for services and integration tiers of an application component",
  "Participate in Agile ceremonies including iteration planning, stand - ups and retrospective",
  "Configure, deploy and troubleshoot applications"
];

const techRequirements = [
  "At least 2 years of experience with Java Software Development in a similar position",
  "Experience with object oriented programming",
  "Experience with Java, experience with Java Script is a plus",
  "Experience with Test Driven Development is a plus",
  "Experience with modern web technology",
  "Basic Knowledge of data bases(SQL, Oracle)",
  "Experience with Agile is a plus",
  "Education level: Bachelor / Master in Computer Science"
];

const personalRequirements = [
  "Flexible and positive attitude",
  "Interest in Business Intelligence, Process Management, Internal Control, Risk Management",
  "Fluently in English, verbal and in writing"
];

const weOffer = [
  "Opportunity to be part of a rapidly expanding global organization with irreproachable reputation",
  "Open and colorful workplace with multicultural community",
  "Opportunity to grow both professionally and personally",
  "Inspiring working atmosphere and many engaging activities",
  "Clear career path and extra benefits"
];

const facebookURL = "https://www.facebook.com/@company";
const twitterURL = "https://www.twitter.com/@company";
const instagramURL = "https://www.instagram.com/@company";

const salary = 2000;

const CompanyName = styled(Title)`
  font-size: 18px;
  margin-top: 5px;
  margin-bottom: 20px;
`;

const JobTitle = styled(Title)`
  font-size: 26px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const MiniTitle = styled(Title)`
  font-size: 22px;
`;

const LinkTitle = styled(Title)`
  font-size: 18px;
  margin: 0px;

  @media (max-width: 767px) {
    font-size: 11px;
  }
`;

export default () => (
  <Container>
    <img src={FB_Logo} style={{ width: 100, height: 100, marginTop: 40 }} />

    <JobTitle>Software Developer</JobTitle>
    <CompanyName>Facebook</CompanyName>

    <Info>🇩🇪Berlin, Germany</Info>
    <Info>Posted on: 2018-12-02</Info>

    <Title>Job Description</Title>
    <p style={{ whiteSpace: "pre-line" }}>
      Cognizant (NASDAQ-100: CTSH) is one of the world's leading professional services companies,
      transforming clients' business, operating and technology models for the digital era. Our
      unique industry-based, consultative approach helps clients envision, build and run more
      innovative and efficient businesses. Headquartered in the U.S., Cognizant is ranked 195 on the
      Fortune 500 and is consistently listed among the most admired companies in the world. Learn
      how Cognizant helps clients lead with digital at www.cognizant.com or follow us on Twitter:
      Cognizant.
    </p>

    <Title>Job Activities</Title>
    {jobActivities.map(req => (
      <p>- {req}</p>
    ))}

    <Row>
      <Col lg={6}>
        <Title>Tech Requirements</Title>
        {techRequirements.map(req => (
          <p>- {req}</p>
        ))}
      </Col>
      <Col lg={6}>
        <Title>Personal Requirements</Title>
        {personalRequirements.map(req => (
          <p>- {req}</p>
        ))}
      </Col>
    </Row>

    <Title>We Offer</Title>
    {weOffer.map(offer => (
      <p>- {offer}</p>
    ))}

    <Title>Salary: {salary} e</Title>
    <Container>
      <Row justify="center">
        <Col xs={12}>
          <SubmitButton style={{ margin: "auto", width: 400 }} title="Apply" />
        </Col>
      </Row>
    </Container>

    {facebookURL || instagramURL || twitterURL ? (
      <Container style={{ textAlign: "center" }}>
        <Row justify="center">
          <Col>
            <MiniTitle>Find More About Us!</MiniTitle>

            {facebookURL ? (
              <LinkTitle>
                <a href={facebookURL}>Facebook</a>
              </LinkTitle>
            ) : null}

            {instagramURL ? (
              <LinkTitle>
                <a href={instagramURL}>Instagram</a>
              </LinkTitle>
            ) : null}

            {twitterURL ? (
              <LinkTitle>
                <a href={twitterURL}>Twitter</a>
              </LinkTitle>
            ) : null}
          </Col>
        </Row>
      </Container>
    ) : null}
    <Container style={{ textAlign: "center", margin: 20 }}>
      <Row justify="center">
        <Col xs={12}>
          <img src={FB_Logo} style={{ width: 30, height: 30 }} />
        </Col>
      </Row>
    </Container>
  </Container>
);
