import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header'
import route from './route'
import {HashRouter} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <HashRouter>
      <div className="App">
        <Header/>
        {route}
      </div>
      </HashRouter>
    );
  }
}

export default App;
