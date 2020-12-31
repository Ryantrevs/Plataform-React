import React, { Component } from 'react';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Route,Switch} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './components/Header/Index'
import Vendas from './components/Vendas/Index'
import ListaDeClientes from './components/ListaDeClientes/ListaDeClientes'
import EditarCliente from './components/ListaDeClientes/EditarCliente/EditarCliente'
import EditarVendas from './components/ListaDeVendas/EditarVendas/EditarVendas'
import ListaDeVendas from './components/ListaDeVendas/ListaDeVendas'
import Task from './components/Task/Index';
import Register from './components/Register/Index'
import './custom.css'
import Perfil from './components/Perfil/Index';
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
          <Route path="/Vendas" exact component={Vendas}/>
          <Route path="/ListaDeClientes" exact component={ListaDeClientes}/>
          <Route path="/EditarCliente" exact component={EditarCliente}/>
          <Route path="/ListaDeVendas" exact component={ListaDeVendas}/>
          <Route path="/EditarVendas" exact component={EditarVendas}/>
          <Route path="/Perfil" exact component={Perfil}/>
          <Route path="/Register" exact component={Register}/>
        </Switch>
      </main>




    );
  }
}

