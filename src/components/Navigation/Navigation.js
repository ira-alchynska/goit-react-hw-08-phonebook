import { NavLink } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { connect } from 'react-redux';
import { getIsAuthenticated } from '../../redux/auth/auth-selectors';

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

const Navigation = ({ isAuthenticated }) => {
  const classes = useStyles();
  return (
    <>
      <NavLink
        to="/"
        exact
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        Homepage
      </NavLink>
      {isAuthenticated && (
        <NavLink
          to="/phonebook"
          className={classes.link}
          activeClassName={classes.activeLink}
        >
          PhoneBook
        </NavLink>
      )}
    </>
  );
};
const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
