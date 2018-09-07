import React, { Component } from 'react';

export default class Homepage extends Component {
  changePage = (e) => {
    e.preventDefault();
    this.props.history.push('/dashboard');
  };

  render() {
    return (
      <div>
        <h1>Homepage</h1>
        For user login and registration etc.
        <form onSubmit={this.changePage}>
          <input type="text" name="name" />
          <br />
          <button>Login</button>
        </form>
      </div>
    );
  }
}
