import { User } from 'oidc-client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRequest } from "./RequestContext"
import LoadingPage from "./../components/LoadingPage"

const BalanceContext = createContext(
    {
        Finance: [],
        Expensive: [],
        Income: [],
        setIncome: () => { },
        Balance: {}
    }
);


export function BalanceProvider({ children }) {

    var request = useRequest().Request;
    const [finance, setFinance] = useState({});
    const [expensive, setExpensive] = useState([]);
    const [income, setIncome] = useState([]);
    const [balance, setBalance] = useState({});
    const [todayDate, setDate] = useState(DateNow);
    const [isReady, setReady] = useState(false);

    useEffect(() => {
        let isSubscribed = true
        const obj = new FormData();
        obj.append("date", todayDate);
        request("get", {}, "/Finance/GetBalance", function (response) {
            //console.log(response.request.status);
            console.log(response.data);
            setFinance(response.data);
            request("post", obj, "/Finance/GetExpenses", function(response){
                //console.log(response.request.status);
                setExpensive(response.data);
                console.log("testando expense",response.data);
                request("post", obj, "/Finance/GetIncoming", function(response){
                    //console.log(response.data);
                    setIncome(response.data);
                    
                    setReady(true);
                })
            })
            
            
        });
        
        return () => isSubscribed = false
    }, []);

    useEffect(() => {
        let subs = true;
        if(finance.expensesViewModels){
            financeMount(finance).then((response)=>{
                console.log(response);
                setBalance(response);   
            })
                         
        }
        return () => {
            subs = false;
        }
    }, [finance])

    useEffect(() => {
        console.log(balance.Income)
        
    }, [balance])

    if(isReady==true && balance.Income!=undefined){
        return (
            <BalanceContext.Provider value={{ Finance: finance, Expensive: expensive, Income: income, setIncome: setIncome, Balance:balance }}>
                {children}
            </BalanceContext.Provider>
        );
    }else{
        return(
            <LoadingPage/>
        )
    }
    /*useEffect(() => {
        let isSubscribed = true
        console.log(income)
        return () => isSubscribed = false
    }, [income])*/
    
}

export function useBalance() {
    const balanceContext = useContext(BalanceContext);
    return balanceContext;
}

export default BalanceContext;

function DateNow() {
    var date = new Date();
    return date.getDate() + "/" + date.getMonth() + 1 + "/" + date.getFullYear();
}

async function financeMount(obj) {
    let expense = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ];
    let income = [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ]
    obj.expensesViewModels.map((value,index)=>{
        let month = value.date.split("-");

        expense[parseInt(month[1])-1]+=10

    })
    obj.incomeViewModels.map((value,index)=>{
        let month = value.date.split("-");

        income[parseInt(month[1])-1]+=10
    })
    var financeFinal = {
        Expense:expense,
        Income:income
    }
    return financeFinal;
}