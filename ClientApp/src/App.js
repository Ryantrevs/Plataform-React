import React, { Component } from 'react';
import {HTML5Backend} from 'react-dnd-html5-backend';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Route,Switch} from 'react-router-dom';
import Header from './components/Header/Index'
import CriarRole from './components/CriarRole/CriarRole';
import AdicionarRemover from './components/ListaDeNiveis/AdicionarRemover/AdicionarRemover';
import GerenciarNiveis from './components/ListaDeUsuarios/EditarUsuario/GerenciarNiveis/GerenciarNiveis';
import GerenciarPermissoes from './components/ListaDeUsuarios/EditarUsuario/GerenciarPermissoes/GerenciarPermissoes'
import ListaDeNiveis from './components/ListaDeNiveis/ListaDeNiveis';
import ListaDeUsuarios from './components/ListaDeUsuarios/ListaDeUsuarios';
import EditarUsuario from './components/ListaDeUsuarios/EditarUsuario/EditarUsuario';
import EditarNivel from './components/ListaDeNiveis/EditarNivel/EditarNivel';
import ListaDeClientes from './components/ListaDeClientes/ListaDeClientes'
import EditarCliente from './components/ListaDeClientes/EditarCliente/EditarCliente'
import EditarVendas from './components/ListaDeVendas/EditarVendas/EditarVendas'
import InformacoesVendas from './components/ListaDeVendas/InformacoesVendas/InformacoesVendas'
import ListaDeVendas from './components/ListaDeVendas/ListaDeVendas'
import Task from './components/Task/Index';
import Register from './components/Register/Index'
import './custom.css'
import EditarPerfil from './components/Perfil/EditarPerfil/EditarPerfil';
import EditarBancarios from './components/Perfil/EditarBancarios/EditarBancarios';
import Perfil from './components/Perfil/Index';
import { formatDiagnostic } from 'typescript';
import Login from './components/Login/Index';
import { RequestProvider } from './Context/RequestContext';
import { UserProvider } from './Context/UserContext';
import {BalanceProvider} from './Context/BalanceContext'
import './custom.css';
import DocEditor from "./components/DocEditor/Index";
import PrivateRoute from './components/PrivateRoute';
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
              <Route path="/ListaDeUsuarios" exact component={ListaDeUsuarios} />
              <Route path="/" exact component={Login} />
              <Route path="/AcessoNegado" component={<div>AcessoNegado</div>}/>
              {/* <Route path="/" exact component={Home} /> */}
              <Route path="/Counter" exact component={Counter} />
              <Route path="/FetchData" exact component={FetchData} />
              {<Route path="/div" exact component={Task} />}
              <Route path="/Register" exact component={Register} />
              <Route path="/DocEditor" component={DocEditor} />
              <BalanceProvider>
                <Route path="/Balance" component={Balance}/>
                <Route path="/NewIncome" component={NewIncome}/>
                <Route path="/NewExpense" component={NewExpense}/>
              </BalanceProvider>
              <Route path="/ListaDeClientes" exact component={ListaDeClientes}/>
              <Route path="/EditarCliente" exact component={EditarCliente}/>
              <Route path="/ListaDeVendas" exact component={ListaDeVendas}/>
              <Route path="/EditarVendas" exact component={EditarVendas}/>
              <Route path="/InformacoesVendas" exact component={InformacoesVendas}/>
              <Route path="/Perfil" exact component={Perfil}/>
              <Route path="/EditarPerfil" exact component={EditarPerfil}/>
              <Route path="/EditarBancarios" exact component={EditarBancarios}/>
            </Switch>
          </RequestProvider>
          </UserProvider>
      </main>
    );
  }
}

