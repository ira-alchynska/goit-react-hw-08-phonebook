import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../redux/auth/auth-operations';
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

class RegistrationView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegister(this.state);
    this.setState({
      name: '',
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
    const { name, email, password } = this.state;
    return (
      <>
        <h1 style={styles.title}>Register Page</h1>
        <form style={styles.form} onSubmit={this.handleSubmit}>
          <h2 className="title-form">Registration form</h2>
          <label style={styles.label}>
            Name
            <input
              style={styles.input}
              type="name"
              name="name"
              value={name}
              onChange={this.handleChange}
              className="form-control"
              placeholder="enter your name"
            />
          </label>
          <label style={styles.label}>
            Email
            <input
              style={styles.input}
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              className="input"
              placeholder="your@email.com"
              autoComplete="off"
            />
          </label>
          <label style={styles.label}>
            Password
            <input
              style={styles.input}
              className="input"
              type="password"
              name="password"
              value={password}
              placeholder="password"
              onChange={this.handleChange}
            />
          </label>
          <button type="submit" className="button">
            Registration
          </button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = {
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(RegistrationView);
