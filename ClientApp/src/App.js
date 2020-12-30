import React, { Component } from 'react';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Index'
import vendas from './components/vendas/Index'
import Task from './components/Task/Index';
import Register from './components/Register/Index'
import RequestContext,{Request} from './Context/RequestContext'
import './custom.css'
export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <main>
        <RequestContext.Provider value={{Request:Request}}>
          <Header/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Counter" exact component={Counter} />
            <Route path="/FetchData" exact component={FetchData} />
            <Route path="/div" exact component={Task} />
            <Route path="/vendas" exact component={vendas} />
            <Route path="/Register" exact component={Register} />
          </Switch>
        </RequestContext.Provider>
      </main>
    );
  }
}

