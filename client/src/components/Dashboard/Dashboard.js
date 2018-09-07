import React, { Component } from 'react';

export default class Dashboard extends Component {
  changePage = () => {
    this.props.history.push('/');
  };
  render() {
    return (
      <div className="wrapper">
        <h1>Dashboard</h1>
      </div>
    );
  }
}
