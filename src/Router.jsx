import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import PageContainer from "./components/Layout/PageContainer";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import MainPage from "./pages/MainPage";
import PostPage from "./pages/PostPage";
import ViewPage from "./pages/ViewPage";

export default () => (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <React.Fragment>
      <PageContainer>
        <Header />
        <Route path="/" exact component={MainPage} />
        <Route path="/post" exact component={PostPage} />
        <Route path="/view/:id" exact component={ViewPage} />
      </PageContainer>
      <Footer />
    </React.Fragment>
  </BrowserRouter>
);
