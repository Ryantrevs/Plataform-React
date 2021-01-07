import { User } from 'oidc-client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRequest } from "./RequestContext"

const BalanceContext = createContext(
    {
        Finance: [],
        Expensive: [],
        Income: [],
        setIncome: ()=>{},
    }
);


export function BalanceProvider({ children }) {

    var request = useRequest().Request;
    const [finance, setFinance] = useState([]);
    const [expensive, setExpensive] = useState([]);
    const [income,setIncome] = useState([]);
    const [todayDate, setDate] = useState(DateNow)

    useEffect(() => {
        let isSubscribed = true
        const obj = new FormData();
        console.log(todayDate)
        obj.append("date",todayDate);
        request("get", {}, "/Finance/GetBalance", function (response) {
            console.log(response.request.status);
            console.log(response.data);
        });
        
        request("post", obj, "/Finance/GetExpenses", function(response){
            console.log(response);
            console.log(response.data);
        })
        request("post", obj, "/Finance/GetIncoming", function(response){
            console.log(response);
            console.log(response.data);
        })
        return () => isSubscribed = false
}, [])

    useEffect(() => {
        let isSubscribed = true
        console.log(income)
        return () => isSubscribed = false
    }, [income])

return (
    <BalanceContext.Provider value={{ Finance: finance,Expensive: expensive, Income: income, setIncome:setIncome }}>
        {children}
    </BalanceContext.Provider>
);
}

export function useBalance() {
    const Context = useContext(BalanceContext);
    return Context;
}

export default BalanceContext;

function DateNow(){
    var date = new Date();
    return date.getDate()+"/"+date.getMonth()+1+"/"+date.getFullYear();
}

