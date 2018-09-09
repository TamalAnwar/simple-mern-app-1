import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <h2>Login</h2>
        <form
          className="form"
          onSubmit={this.register}
          action="/api/login"
          method="POST">
          <label htmlFor="username">Username</label>
          <input type="text" name="username" />
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
          <button>Login</button>
        </form>
      </div>
    );
  }
}
