import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import MainPage from "./pages/MainPage";
import PostPage from "./pages/PostPage";
import ViewPage from "./pages/ViewPage";

export default () => (
  <BrowserRouter>
    <Fragment>
      <Route path="/" exact component={MainPage} />
      <Route path="/post" exact component={PostPage} />
      <Route path="/view" exact component={ViewPage} />
    </Fragment>
  </BrowserRouter>
);
