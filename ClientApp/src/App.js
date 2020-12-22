import React, { Component } from 'react';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Route,Switch } from 'react-router-dom';
import Header from './components/Header/Index'
import Task from './components/Task/Index';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <main>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Counter" exact component={Counter}/>
          <Route path="/FetchData" exact component={FetchData}/>
          <Route path="/div" exact component={Task}/>
        </Switch>
      </main>
    );
  }
}
