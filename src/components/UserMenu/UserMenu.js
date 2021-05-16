import React from 'react';
import { createUseStyles } from 'react-jss';
import { connect } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';
import { logout } from '../../redux/auth/auth-operations';
import defaultAvatar from './dolphin_PNG71318.png';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
});

const UserMenu = ({ avatar, name, onLogout }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img src={avatar} alt="user" width="32" className={classes.avatar} />
      <span className={classes.name}>Welcome, {name}!</span>
      <button type="button" onClick={onLogout}>
        Log out
      </button>
    </div>
  );
};
const mapStateToProps = state => ({
  name: getUserName(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
