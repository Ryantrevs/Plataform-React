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
    const [income,setIncome] = useState([])

    useEffect(() => {
        request("get", {}, "/Finance/GetBalance", function (response) {
            //setFinance(response.data);
            console.log(response.request.status);
            console.log(response.data);
            setFinance(response.data.finances);
            setExpensive(response.data.expenses);
            setIncome(response.data.incomes);
        })
}, [])

    useEffect(() => {
        console.log(income)
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

