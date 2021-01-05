import React, { Component } from 'react';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Index';
import Login from './components/Login/Index';
//import Vendas from './components/Vendas/Index';
import Task from './components/Task/Index';
import Register from './components/Register/Index';
import { RequestProvider } from './context/RequestContext';
import { UserProvider } from './context/UserContext';
import './custom.css';
import DocEditor from "./components/DocEditor/Index";
import PrivateRoute from './components/PrivateRoute';
import Vendas from './components/vendas/Index';
import Balance from './components/Balance/Index';
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
              <Route path="/AcessoNegado" component={<div>AcessoNegado</div>}/>
              {/* <Route path="/" exact component={Home} /> */}
              <Route path="/Counter" exact component={Counter} />
              <Route path="/FetchData" exact component={FetchData} />
              {<Route path="/div" exact component={Task} />}
              {/* <Route path="/vendas" exact component={Vendas*/} /> }
              <Route path="/Register" exact component={Register} />
              <PrivateRoute path="/Vendas" component={Vendas} Role={"admin"}/>
              <Route path="/DocEditor" component={DocEditor} />
              <Route path="/Balance" component={Balance}/>
            </Switch>
          </RequestProvider>
        </UserProvider>
      </main>
    );
  }
}

/*<UserProvider>
          <RequestProvider>
            <Header />
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/AcessoNegado" component={<div>AcessoNegado</div>}/>
              {/* <Route path="/" exact component={Home} /> }
              <Route path="/Counter" exact component={Counter} />
              <Route path="/FetchData" exact component={FetchData} />
              {<Route path="/div" exact component={Task} />}
              {/* <Route path="/vendas" exact component={Vendas} /> }
              <Route path="/Register" exact component={Register} />
              <PrivateRoute path="/Vendas" component={Vendas} Role={"admin"}/>
              <Route path="/DocEditor" component={DocEditor} />
            </Switch>
          </RequestProvider>
        </UserProvider>*/