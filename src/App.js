import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route component={MainLayout}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
