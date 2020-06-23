import React, { Component, Fragment } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Movies from './components/Movies';
import Navbar from './components/Navbar';
import Customers from './components/Customers';
import Rentals from './components/Rentals';
import MovieForm from './components/MovieForm';
import NotFound from './components/NotFound';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

class App extends Component {

  componentDidMount() {
    console.log('component did mount in app.js');
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <Switch>
          <Route path='/movies/new' exact component={MovieForm} />
          <Route path='/register' component={RegisterForm} />
          <Route path='/login' component={LoginForm} />
          <Route path='/movies/:id' component={MovieForm} />
          <Route path='/movies' component={Movies} />
          <Route path='/customers' component={Customers} />
          <Route path='/rentals' component={Rentals} />
          <Route path='/not-found' component={NotFound} />
          <Route path='/' component={Movies} />
          <Redirect from='/' exact to='/movies' />
          <Redirect to='/not-found' />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
