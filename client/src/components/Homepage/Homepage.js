import React, { Component } from 'react';

export default class Homepage extends Component {
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
      .then((res) => console.log('Successfully registered!'))
      .catch((err) => (err ? console.log(err.messege) : null));
  };

  render() {
    return (
      <div className="homepage-wrapper">
        <h1>Homepage</h1>
        For user login and registration etc.
        <form onSubmit={this.register} action="/api/register" method="POST">
          <input type="text" name="username" />
          <br />
          <input type="password" name="password" />
          <br />
          <button>Sign up!</button>
        </form>
      </div>
    );
  }
}
