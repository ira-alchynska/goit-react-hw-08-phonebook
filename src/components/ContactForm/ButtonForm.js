import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  button: {
    cursor: 'pointer',
    margin: {
      right: 'auto',
      left: 'auto',
      top: '20px',
      bottom: '20px',
    },
    display: 'block',
    padding: '5px',
    width: '100px',
    backgroundColor: 'skyblue',
    borderRadius: '5px',
  },
});

const ButtonForm = () => {
  const classes = useStyles();
  return (
    <button className={classes.button} type="submit">
      Add contact
    </button>
  );
};

export default ButtonForm;
