import React from "react";
import { HashRouter, BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../containers/Home";
import Login from "../containers/Login";
import Register from "../containers/Register";
import NotFound from "../containers/NotFound";

const App = () => {
  return (
    <HashRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </HashRouter>
  );
};

export default App;
