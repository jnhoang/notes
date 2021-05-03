import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';

const Router = require('react-router').Router;
const Route = require('react-router').Route;
const browserHistory = require('react-router').browserHistory;

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Router history={ browserHistory }>
          <Route path='/' component={ Home } />
        </Router>
      </div>
    );
  }
}

export default App;
