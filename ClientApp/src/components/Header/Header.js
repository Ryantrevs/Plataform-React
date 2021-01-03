import React, { useEffect, useState } from 'react'
import { Link, Redirect, useHistory } from 'react-router-dom';
import Logo from '../../Assets/logo.png'
import {
    Nav,
    Img,
    A,
    DivUl,
    NavUl,
    Li
} from './Elements';
import { useUser } from "./../../context/UserContext"
import { useRequest } from "./../../context/RequestContext"
import { Div } from '../Element';


export function Header(props) {
    var myContext = useUser();
    var Request = useRequest().Request;
    const [redirectLogOff, setRedirectLogOff] = useState(false)
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
    return (

        <header>
            <Nav>
                <A><Img src={Logo} /></A>
                <DivUl>
                    <NavUl>
                        <Li>
                            <Link to="/Vendas">Cadastrar Vendas</Link>
                        </Li>
                        <Li>
                            <Link to="/div">lista</Link>
                        </Li>
                        <Li>
                            <Link to="/">casa</Link>
                        </Li>
                        <Li>
                            <Link to="/Counter">counter</Link>
                        </Li>
                        <Li>
                            <Link to="/fetch-data">Fetch</Link>
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

