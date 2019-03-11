import React from "react";
import styled from "styled-components";

import axios from "axios";

import { BrowserRouter, Route } from "react-router-dom";

import Header from "../components/Header/Header";
import PageContainer from "../components/Layout/PageContainer";

import Slogan from "../components/Slogan/Slogan";
import Search from "../components/Search/Search";

import JobCard from "../components/JobCard/JobCard";

const CenterSlogan = styled.div`
  margin: auto;
  padding-top: 70px;

  text-align: center;
  max-width: 500px;
`;

const Center = styled.div`
  padding-top: 70px;
  margin: auto;
`;

const Title = styled.p`
  font-family: MaisonNeue-Bold;
  font-size: 20px;
  color: #000000;
  letter-spacing: 1.2px;
  text-align: center;
  margin: 50px;
`;

export default class App extends React.Component {
  state = {
    response: [],
    loaded: false
  };

  componentDidMount() {
    axios.get("/api/post/get").then(response => {
      console.log(response);
      this.setState({ response: response.data.msg, loaded: true });
    });
  }

  render() {
    return (
      <React.Fragment>
        <CenterSlogan>
          <Slogan />
          <Search />
        </CenterSlogan>

        <Center>
          <Title>All</Title>
          {!this.state.loaded && <p>Loading..</p>}
          {this.state.response.map(res => (
            <JobCard
              id={res._id}
              company={res.companyName}
              position={res.position}
              location={res.location}
              tags={[res.mainLanguage, ...res.uniqueTags]}
            />
          ))}
        </Center>
      </React.Fragment>
    );
  }
}
