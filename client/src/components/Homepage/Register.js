import React, { Component } from 'react';

export default class Register extends Component {
  register = (e) => {
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;

    fetch('/api/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
      .then((res) => {
        if (res.status === 200) {
          this.props.history.push('/dashboard');
        }
      })
      .catch((err) => null);
  };

  render() {
    return (
      <div className="register">
        <h2>Register</h2>
        <form
          className="form"
          onSubmit={this.register}
          action="/api/register"
          method="POST">
          <label htmlFor="username">Choose a Username</label>
          <input type="text" name="username" />
          <label htmlFor="password">Set a Password</label>
          <input type="password" name="password" />
          <label htmlFor="password-confirm">Enter password again</label>
          <input type="password" name="password-confirm" />
          <button>Register</button>
        </form>
      </div>
    );
  }
}
