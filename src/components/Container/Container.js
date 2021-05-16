import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    margin: {
      right: 'auto',
      left: 'auto',
    },
    padding: '20px',
    width: '1200px',
  },
});

const Container = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.container}>{children}</div>;
};

export default Container;
