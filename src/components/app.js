import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationComponent from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about-me";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import PortfolioDetail from "./portfolio/portfolio-detail";
import Auth from "./pages/auth";
import NoMatch from "./pages/no-match";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <div>
            <NavigationComponent />

            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/auth" component={Auth}></Route>
              <Route path="/about-me" component={About}></Route>
              <Route path="/contact" component={Contact}></Route>
              <Route path="/blog" component={Blog}></Route>
              <Route
                exact
                path="/portfolio/:slug"
                component={PortfolioDetail}
              ></Route>
              <Route component={NoMatch}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
