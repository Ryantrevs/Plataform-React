import React, { useEffect, useState } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom';
import Logo from '../../Assets/logo.png'
import {
    Nav,
    Img,
    A,
    DivUl,
    NavUl,
    Li,
    Button    
} from './Elements';
import { useUser } from "./../../context/UserContext"
import { useRequest } from "./../../context/RequestContext"
import { Div } from '../Element';


export function Header(props) {
    var myContext = useUser();
    var Request = useRequest().Request;    
    var history = useHistory();
    async function LogOff() {
        console.log("history: ", history);
        Request("post", "", "Account/Logout", (promise) => {
            if (promise.data) {
                myContext.setIsLogged(false);
                myContext.setUser({});
            }
            history.push('/')
        })
    }

    var UserArea = () => {
        if (myContext.isLogged) {
            return (
                <Li>
                    <span style={{ color: "#fff", margin: "0.5em 1.5em 0 0" }}>Bem vindo: {myContext.User.name}</span>
                    <button onClick={LogOff}>Logoff</button>
                </Li>
            );
        } else {
            return (
                <Li>
                    <Link style={{"margin":"1em"}} to="/">Login</Link>
                    <Link to="/Register">Registrar-se</Link>
                </Li>
            );
        }
    }

    var VendasArea = ()=>{
        //
    }
    



    return (

        <header>
            <Nav>
                <A><Img src={Logo} /></A>
                <DivUl>
                    <NavUl>
                        <Li>
                            <Link style={{"text-decoration":"none"}} to="/Vendas">Cadastrar Vendas</Link>
                        </Li>
                        <Li>
                            <Link style={{"text-decoration":"none"}} to="/ListaDeClientes">Lista de Clientes</Link>
                        </Li>
                        <Li>
                            <Link style={{"text-decoration":"none"}} to="/ListaDeVendas">Lista de Vendas</Link>
                        </Li>
                        <Li>
                            <Link style={{"text-decoration":"none"}} to="/div">Tarefas</Link>
                        </Li>
                        <Li>
                            <Link to="/fetch-data">Fetch</Link>
                        </Li>
                        {/* <Li>
                            <Link style={{"text-decoration":"none"}} to="/Counter">counter</Link>
                        </Li>
                        <Li>
                             <Link style={{"text-decoration":"none"}} to="/fetch-data">Fetch</Link>   
                        </Li> */}
                        <Li>
                             <Link style={{"text-decoration":"none"}} to="/Perfil">Perfil</Link>   
                        </Li> 
                        <Li>
                            <Link to="/DocEditor">Editor de documento</Link>
                        </Li>
                        <UserArea />
                    </NavUl>
                </DivUl>
            </Nav>
        </header>
    )
}

