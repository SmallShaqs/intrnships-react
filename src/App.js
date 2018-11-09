import React from "react";

import Header from "./components/Header/Header";
import PageContainer from "./components/Layout/PageContainer";
export default class App extends React.Component {
  render() {
    return (
      <PageContainer>
        <Header />
      </PageContainer>
    );
  }
}
