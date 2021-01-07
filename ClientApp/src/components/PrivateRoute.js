import React, { useState } from 'react';
import { Route, Redirect } from "react-router-dom"
import { useUser } from "./../context/UserContext"
import { useRequest } from "./../context/RequestContext"
import LoadingPage from "./LoadingPage"


export default function PrivateRoute({ Role, component: Component, ...rest }) {
    var myContext = useUser();
    var Request = useRequest().Request;
    const [temAcesso, settemAcesso] = useState("");

    if (myContext.isLogged === false) {//usuário não está logado redireciona pro login        
        return <Redirect to='/' />
    } else {
        //faz request async
        var data = new FormData(); data.append("role", Role);
        Request("post", data, "Account/UserIsInRole", (promise) => {//verificar se o user tem permissão
            if (promise.data.success) {
                settemAcesso(true);
            } else {
                settemAcesso(false);
            }
        });
        //mostra pagina correta se tiver acesso, acesso negado se não
        if (temAcesso === false) {
            return (<Redirect to='/AcessoNegado' />);

        } else if (temAcesso === true) {
            return (
                <Route {...rest} render={(props) => (<Component {...props} />)} />
            );
        } else {//enquanto espera resposta do servidor mostra carregando.
            return (
               <LoadingPage/>
            );
        }

    }
}