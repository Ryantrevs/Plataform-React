import { User } from 'oidc-client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRequest } from "./RequestContext"
import LoadingPage from "./../components/LoadingPage"
const UserContext = createContext(
    {
        User: {},
        isLogged: false,
        setUser: () => { },
        setIsLogged: function setIsLogged() { }
    }
);


export function UserProvider({ children }) {
    var request = useRequest().Request;
    const [isLogged, setIsLogged] = useState(false)
    const [user, setUser] = useState({});
    const [loaded, setloaded] = useState(false)
    useEffect(() => {
        request("post", "", "Account/isLogged", (promise) => {
            var value = promise.data;
            if (value) {
                request("post", "", "Account/getCurrentUser", (promise) => {
                    if (promise.data != null) {
                        setIsLogged(true);
                        setUser(promise.data);                        
                    }
                    setloaded(true);//quando terminar de trazer ou não o usuário finaliza carregamento
                })
            }
        });
    }, []);

    if(loaded){
        return (
            <UserContext.Provider value={{ User: user, isLogged: isLogged, setUser: setUser, setIsLogged: setIsLogged }}>
                {children}
            </UserContext.Provider>
        );
    }else{
        return(
            <LoadingPage/>
        )
    }
    
}

export function useUser() {
    const Context = useContext(UserContext);
    return Context;
}

export default UserContext;


