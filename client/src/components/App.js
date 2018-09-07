import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Dashboard from './Dashboard/Dashboard';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="links">
          <a href="/">Home</a>
          <a href="/dashboard">Dashboard</a>
        </div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
