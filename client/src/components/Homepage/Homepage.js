import React, { Component } from 'react';
import Register from './Register';
import Login from './Login';

export default class Homepage extends Component {
  render() {
    return (
      <div className="homepage-wrapper">
        <Register history={this.props.history} />
        <Login history={this.props.history} />
      </div>
    );
  }
}
