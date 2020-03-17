import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import { login, getFriends } from './actions/index';
import LoginForm from './components/LoginForm';
import ProtectedComponent from './components/ProtectedComponent';
import ProtectedRoute from './components/ProtectedRoute';


class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/login" component={LoginForm} />
        <ProtectedRoute path="/" components={ProtectedComponent} />
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggingIn: state.loggingIn,
    friends: state.friends
  };
}

const MapDispatchToProps = {
  login
}

export default connect (
  mapStateToProps, MapDispatchToProps)
  { login, getFriends })(App);
