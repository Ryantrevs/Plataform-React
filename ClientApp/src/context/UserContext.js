import { User } from 'oidc-client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRequest } from "./RequestContext"
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
    useEffect(() => {
        request("post", "", "Account/isLogged", (promise) => {
            var value = promise.data;
            if (value) {
                request("post", "", "Account/getCurrentUser", (promise) => {
                    if (promise.data != null) {
                        setIsLogged(true);
                        setUser(promise.data);
                    }
                })
            }
        });
    }, []);


    return (
        <UserContext.Provider value={{ User: user, isLogged: isLogged, setUser: setUser, setIsLogged: setIsLogged }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const Context = useContext(UserContext);
    return Context;
}

export default UserContext;


