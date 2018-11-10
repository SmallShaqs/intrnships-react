import React from "react";
import styled from "styled-components";

import Header from "./components/Header/Header";
import PageContainer from "./components/Layout/PageContainer";

import Slogan from "./components/Slogan/Slogan";
import Search from "./components/Search/Search";

import JobCard from "./components/JobCard/JobCard";

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
  margin-bottom: 50px;
`;

export default class App extends React.Component {
  render() {
    return (
      <PageContainer>
        <Header />
        <CenterSlogan>
          <Slogan />
          <Search />
        </CenterSlogan>

        <Center>
          <Title>Featured</Title>
          <JobCard />
        </Center>
      </PageContainer>
    );
  }
}
