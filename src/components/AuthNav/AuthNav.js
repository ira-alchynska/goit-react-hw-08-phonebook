import React from 'react';
import { NavLink } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: 'skyblue',
  },
});

const AuthNav = () => {
  const classes = useStyles();
  return (
    <>
      <NavLink
        to="/register"
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        Login
      </NavLink>
    </>
  );
};

export default AuthNav;
