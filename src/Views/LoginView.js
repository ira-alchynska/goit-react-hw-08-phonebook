import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/auth/auth-operations';
import '../button.css';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
  input: {
    padding: '5px',
    outline: 'none',
  },
  title: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    margin: '-1px',
    border: '0',
    padding: '0',
    clip: 'rect(0 0 0 0)',
    overflow: 'hidden',
  },
};

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onLogin(this.state);
    this.setState({
      email: '',
      password: '',
    });
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h1 style={styles.title}>Login page</h1>
        <form onSubmit={this.handleSubmit} style={styles.form}>
          <h2>Sign in</h2>
          <label style={styles.label}>
            Email
            <input
              style={styles.input}
              className="input-email"
              type="email"
              name="email"
              value={email}
              placeholder="your@email.com"
              onChange={this.handleChange}
            />
          </label>
          <label style={styles.label}>
            Password
            <input
              style={styles.input}
              type="password"
              className="input-password"
              name="password"
              value={password}
              placeholder="password"
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" className="button">
            Enter
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: login,
};

export default connect(null, mapDispatchToProps)(LoginView);
