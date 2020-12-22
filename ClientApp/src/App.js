import React, { Component } from 'react';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Header from './components/Header/Index'

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <main>
        <Header/>
        <Switch>
          <Route path="/" component={Home}/>
          <Route path="/Counter" component={Counter}/>
          <Route path="/FetchData" component={FetchData}/>
        </Switch>
      </main>
    );
  }
}
