import React, { Component } from 'react';
import logo from './logo.svg';
import './reset.css'
import './App.css';
import Header from './Component/Header/Header'
import route from './route'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './ducks/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <Header />
            {route}
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
