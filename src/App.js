import React, { Component } from 'react';
import {Router,Route,browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {combineReducers,createStore} from 'redux';
import './App.css';

import Menu from './component/menu';


let store= createStore(combineReducers({}));



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path='/' component={Menu}>

          </Route>
        </Router>
      </Provider>
    );
  }
}

export default App;
