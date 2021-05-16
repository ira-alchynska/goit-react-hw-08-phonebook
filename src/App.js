import React, { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router';
import Container from './components/Container';
import AppBar from './components/AppBar';
import { getCurrentUser } from '../src/redux/auth/auth-operations';
import { connect } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PablicRoute from './components/PablicRoute';

const HomeView = lazy(() => import('./Views/HomeView'));
const RegistrationView = lazy(() => import('./Views/RegistrationView'));
const LoginView = lazy(() => import('./Views/LoginView'));
const PhonebookView = lazy(() => import('./Views/PhonebookView'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <Container>
        <AppBar />
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <PablicRoute exact path="/" component={HomeView} />
            <PrivateRoute
              path="/phonebook"
              redirectTo="/login"
              component={PhonebookView}
            />
            <PablicRoute
              path="/login"
              redirectTo="/phonebook"
              restricted
              component={LoginView}
            />

            <PablicRoute
              path="/register"
              redirectTo="/phonebook"
              restricted
              component={RegistrationView}
            />
          </Switch>
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
