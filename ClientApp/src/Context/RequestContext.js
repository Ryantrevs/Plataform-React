import React, { useContext } from "react"
import axios from "axios";
const RequestContext = React.createContext(
    {
        Request: Request
    }
);
RequestContext.displayName = "GenralRequest"


export function useRequest() {
    const Context = useContext(RequestContext);
    return Context;
}


export async function Request(method, obj, url, callback) {
    switch (method) {
        case "post":
            axios.post(url, obj).then(t => {
                console.log(obj);
                callback(t);
            })
            break;
        case "get":
            axios.get(url, obj).then(t => {
                callback(t);
            })
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