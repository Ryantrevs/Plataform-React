import React, { Component } from 'react';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Index'
import Login from './components/Login/Index'
import Vendas from './components/Vendas/Index'
import Task from './components/Task/Index';
import Register from './components/Register/Index'
import { RequestProvider } from './context/RequestContext'
import { UserProvider } from './context/UserContext'
import './custom.css';
import DocEditor from "./components/DocEditor/Index"
import PrivateRoute from './components/PrivateRoute';
import AccessDenied from "./components/AccessDenied";
export default class App extends Component {
  static displayName = App.name;
  render() {
    return (
      <main>
        <UserProvider>
          <RequestProvider>
            <Header />
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/AcessoNegado" component={AccessDenied}/>
              {/* <Route path="/" exact component={Home} /> */}
              <Route path="/Counter" exact component={Counter} />
              <Route path="/FetchData" exact component={FetchData} />
              <Route path="/div" exact component={Task} />
              {/* <Route path="/vendas" exact component={Vendas} /> */}
              <Route path="/Register" exact component={Register} />
              <Route path="/DocEditor" component={DocEditor} />
              <PrivateRoute path="/Vendas" component={Vendas} Role={"admin"} />              
            </Switch>
          </RequestProvider>
        </UserProvider>
      </main>
    );
  }
}

