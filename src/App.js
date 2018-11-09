import React from "react";
import styled from "styled-components";

import Header from "./components/Header/Header";
import PageContainer from "./components/Layout/PageContainer";

import Slogan from "./components/Slogan/Slogan";
import Search from "./components/Search/Search";

const CenterSlogan = styled.div`
  margin: auto;
  padding-top: 70px;

  text-align: center;
  max-width: 500px;
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
      </PageContainer>
    );
  }
}
