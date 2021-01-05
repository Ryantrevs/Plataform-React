import React, { Children, useContext } from "react"
import axios from "axios";
const RequestContext = React.createContext(
    {
        Request: Request
    }
);
RequestContext.displayName = "GenralRequest"

export function RequestProvider({children}) { 

    return (
        <RequestContext.Provider value={{Request:Request}}>
            {children}
        </RequestContext.Provider>
    );
}


export function useRequest() {
    const Context = useContext(RequestContext);
    return Context;
}


export async function Request(method, obj, url, callback) {
    switch (method) {
        case "post":
            axios.post(url, obj).then(t => {
                callback(t);
            })
            break;
        case "get":
                axios.get(url, obj).then(t => {
                    callback(t);
                }).catch(function(error){
                    callback(error);
                });
                break;
            
        case "put":
            axios.put(url, obj).then(t => {
                console.log(t)
            })
            break;
        case "teste":
            console.log("teste feito com sucesso no request")
            console.log(obj)
            return ("aaaaaaaaaaa")
            break
        default:
            break;
    }
}


export default RequestContext;