import React from "react";
import styled from "styled-components";

import { Container, Row, Col } from "react-grid-system";

import SubmitButton from "../components/buttons/CTA/CallToAction";
import { Info } from "../components/JobCard/jobCard/styled";
import FB_Logo from "../assets/fb_logo.png";

import axios from "axios";

const Title = styled.p`
  font-family: MaisonNeue-Demi;
  font-size: 24px;
  color: #000000;
  letter-spacing: 1.8px;

  margin-top: 100px;
  margin-bottom: 60px;
`;

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

export default class ViewPage extends React.Component {
  state = {
    job: {},
    company: {},
    loaded: false
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    console.log(id);
    axios.get("/api/post/get?id=" + id).then(response => {
      this.setState({ job: response.data.msg });
      axios
        .get(
          "/api/post/getCompany?name=" +
            encodeURIComponent(this.state.job.companyName)
        )
        .then(response => {
          this.setState({ company: response.data.msg, loaded: true }, () =>
            console.log(this.state)
          );
        });
    });

    // /get/getCompany
  }

  render() {
    const { job, loaded, company } = this.state;

    if (!loaded) return <p>Loading..</p>;

    return (
      <Container>
        <img src={FB_Logo} style={{ width: 100, height: 100, marginTop: 40 }} />

        <JobTitle>{job.position}</JobTitle>
        <CompanyName>{company.name}</CompanyName>

        <Info>{job.location}</Info>
        <Info>Posted on: 2018-12-02</Info>

        <Title>Job Description</Title>
        <p style={{ whiteSpace: "pre-line" }}>{company.about}</p>

        {job.jobActivities.length ? (
          <React.Fragment>
            <Title>Job Activities</Title>
            {job.jobActivities.map(req => (
              <p>- {req}</p>
            ))}
          </React.Fragment>
        ) : null}

        <Row>
          {job.technicalRequirements.length ? (
            <Col lg={6}>
              <Title>Tech Requirements</Title>
              {job.technicalRequirements.map(req => (
                <p>- {req}</p>
              ))}
            </Col>
          ) : null}

          {job.personalRequirements.length ? (
            <Col lg={6}>
              <Title>Personal Requirements</Title>
              {job.personalRequirements.map(req => (
                <p>- {req}</p>
              ))}
            </Col>
          ) : null}
        </Row>

        {job.weOffer.length ? (
          <React.Fragment>
            <Title>We Offer</Title>
            {job.weOffer.map(offer => (
              <p>- {offer}</p>
            ))}
          </React.Fragment>
        ) : null}

        <Title>Salary: {job.salary} e</Title>
        <Container>
          <Row justify="center">
            <Col xs={12}>
              <SubmitButton style={{ margin: "auto", width: 400 }} title="Apply" />
            </Col>
          </Row>
        </Container>

        {company.facebook || company.instagram || company.twitter ? (
          <Container style={{ textAlign: "center" }}>
            <Row justify="center">
              <Col>
                <MiniTitle>Find More About Us!</MiniTitle>

                {company.facebook ? (
                  <LinkTitle>
                    <a href={company.facebook}>Facebook</a>
                  </LinkTitle>
                ) : null}

                {company.instagram ? (
                  <LinkTitle>
                    <a href={company.instagram}>Instagram</a>
                  </LinkTitle>
                ) : null}

                {company.twitter ? (
                  <LinkTitle>
                    <a href={company.twitter}>Twitter</a>
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
  }
}
