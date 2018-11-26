import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import PageContainer from "./components/Layout/PageContainer";
import Header from "./components/Header/Header";

import MainPage from "./pages/MainPage";
import PostPage from "./pages/PostPage";
import ViewPage from "./pages/ViewPage";

export default () => (
  <BrowserRouter>
    <PageContainer>
      <Header />
      <Route path="/" exact component={MainPage} />
      <Route path="/post" exact component={PostPage} />
      <Route path="/view" exact component={ViewPage} />
    </PageContainer>
  </BrowserRouter>
);
