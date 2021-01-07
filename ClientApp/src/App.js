import React, { Component } from 'react';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Index';
import Task from './components/Task/Index';
import Register from './components/Register/Index'
import './custom.css'
import EditarPerfil from './components/Perfil/EditarPerfil/EditarPerfil';
import EditarBancarios from './components/Perfil/EditarBancarios/EditarBancarios';
import Login from './components/Login/Index';
import { RequestProvider } from './context/RequestContext';
import { UserProvider } from './context/UserContext';
import './custom.css';
import DocEditor from "./components/DocEditor/Index";
import PrivateRoute from './components/PrivateRoute';
import AccessDenied from "./components/AccessDenied";
import ListaDeClientes from './components/ListaDeClientes/ListaDeClientes';
import EditarCliente from './components/ListaDeClientes/EditarCliente/EditarCliente';
import ListaDeVendas from './components/ListaDeVendas/ListaDeVendas';
import CadastrarVendas from './components/Vendas/CadastrarVendas';
import EditarVendas from './components/ListaDeVendas/EditarVendas/EditarVendas';
import Perfil from './components/Perfil/Index';
import Balance from './components/Balance/Index';
import NewIncome from './components/NewIncome/Index';
import NewExpense from './components/NewExpense/Index';

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
              <Route path="/AcessoNegado" component={AccessDenied} />
              <Route path="/Register" exact component={Register} />  
              <Route path="/Counter" exact component={Counter} />
              <Route path="/FetchData" exact component={FetchData} />
              <Route path="/div" exact component={Task} />
              
              <PrivateRoute Route path="/Perfil" exact component={Perfil} />              
              
              <Route path="/ListaDeClientes" exact component={ListaDeClientes} />
              <Route path="/EditarCliente" exact component={EditarCliente} />                           


              
              <PrivateRoute path="/CadastrarVendas" component={CadastrarVendas} Role={"admin"} />
              <Route path="/ListaDeVendas" exact component={ListaDeVendas} />
              <Route path="/EditarVendas" exact component={EditarVendas} />
              
              <Route path="/DocEditor" component={DocEditor} />

              <Route path="/Balance" component={Balance}/>
              <Route path="/NewIncome" component={NewIncome}/>
              <Route path="/NewExpense" component={NewExpense}/>
            </Switch>
          </RequestProvider>
        </UserProvider>
      </main>
    );
  }
}

