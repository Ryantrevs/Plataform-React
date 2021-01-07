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
import ListaDeClientes from './components/ListaDeClientes/ListaDeClientes'
import EditarCliente from './components/ListaDeClientes/EditarCliente/EditarCliente'
import EditarVendas from './components/ListaDeVendas/EditarVendas/EditarVendas'
import ListaDeVendas from './components/ListaDeVendas/ListaDeVendas'
import Perfil from './components/Perfil/Index';

export default class App extends Component {
  static displayName = App.name;
  render() {
    return (
      <main>
        <UserProvider>
          <RequestProvider>
            <Header />
            <Switch>
              {/* publico */}
              <Route path="/" exact component={Login} />
              <Route path="/AcessoNegado" component={AccessDenied} />
              <Route path="/Register" exact component={Register} />  
              <Route path="/Counter" exact component={Counter} />
              <Route path="/FetchData" exact component={FetchData} />
              <Route path="/div" exact component={Task} />

              {/* ações de usuarios */}
                          
              <Route path="/Perfil" exact component={Perfil} />
              
              {/* usuarios em geral */}
              <Route path="/ListaDeClientes" exact component={ListaDeClientes} />
              <Route path="/EditarCliente" exact component={EditarCliente} />             
              {/* admin */}



              {/* vendas */}
              <PrivateRoute path="/Vendas" component={Vendas} Role={"admin"} />
              <Route path="/ListaDeVendas" exact component={ListaDeVendas} />
              <Route path="/EditarVendas" exact component={EditarVendas} />
              {/* producao */}
              <Route path="/DocEditor" component={DocEditor} />

            </Switch>
          </RequestProvider>
        </UserProvider>
      </main>
    );
  }
}

