import React from 'react';
import { Route, Redirect } from "react-router-dom"
import { useUser } from "./../context/UserContext"
import { useRequest } from "./../context/RequestContext"

export default function PrivateRoute({ Role, component: Component, ...rest }) {
    var myContext = useUser();
    var Request = useRequest().Request;
    if (myContext.isLogged === false) {//usuário não está logado redireciona pro login
        console.log("Usuario deslogado");
        return <Redirect to='/' />
    } else {
        console.log("nova");
        var data = new FormData(); data.append("role", Role);
        Request("post", data, "Account/UserIsInRole", (promise) => {//verificar se o user tem permissão
            console.log(promise.data.success);
            // if (promise.data.success) {//se tem permissao entra recebe o componente
            //     console.log("tem acesso")
            //     return (
            //         <Route {...rest} render={(props) => (<Component {...props} />)} />
            //     );
            // } else {//redireciona para pagina access denied
            //     console.log("não tem acesso")
            //     return (
            //         <Redirect to='/AcessoNegado' />
            //     );
            // }
            return (
                
                <Redirect to="/AcessoNegado" />
                // <Route {...rest} render={(props) => (
                //     promise.data.success === true
                //         ? <Component {...props} />
                //         : <Redirect to='/AcessoNegado' />
                // )} />
            );

        });
    }
}