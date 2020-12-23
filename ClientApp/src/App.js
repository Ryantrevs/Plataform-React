import React, { Component } from 'react';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Route,Switch} from 'react-router-dom';
import Header from './components/Header/Index'
<<<<<<< HEAD
import Task from './components/Task/Index';
import Register from './components/Register/Index'
=======
import Task from './components/Task/Index'

>>>>>>> 43baa3ed743bb05563b83aaf10a7cee99410c465
import './custom.css'
//const axios = require('axios').default;
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
          <Route path="/Register" exact component={Register}/>
        </Switch>
      </main>




    );
  }
}

