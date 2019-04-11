import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: { username: null, password: "" }
  };

  handleSubmit = e => {
    e.preventDefault();

    console.log("Submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Welcome to Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              value={account.username}
              onChange={this.handleChange}
              id="username"
              name="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={account.password}
              onChange={this.handleChange}
              id="password"
              name="password"
              type="password"
              className="form-control"
            />
          </div>
          <button className="btn btn-primary"> Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
