import React, {useState, useEffect} from 'react'
import useScope from '../../hooks/useScope'
import { Link } from 'react-router-dom';
import {useRequest} from '../../context/RequestContext'

import {
    IncomeSection,
    Input,
    ButtonSubmit,
    Group,
    InputRadio
} from './elements'

function NewIncome() {
    const [newIncome, setNewIncome] = useState(emptyIncome());
    const [incomeCategory, setIncomeCategory] = useState([])
    var request = useRequest().Request;


    function AddIncome(obj){
        var data = new FormData();
        data.append("income.Description",newIncome.Description);
        data.append("income.Value",newIncome.Value);
        data.append("income.Date",newIncome.Date);
        request("post",data, "/Finance/newIncome", function(response){
            console.log(response.request.status)
            console.log(response);
        })
    }

    useEffect(()=>{
        let isMounted = true;
        request("get",{}, "/Finance/GetCategory", function(response){
            console.log(response.data);
            setIncomeCategory(response.data);
        })
        return () => {
            isMounted = false;
        };
    },[])

    return (
        <IncomeSection>
            <Group>
                <Input 
                type="text" 
                placeholder="Descrição"
                Value={NewIncome.Description}
                onChange={(event)=>{
                    event.preventDefault();
                    setNewIncome({...newIncome,Description:event.target.value})
                }} 
                /><br/>
                <Input 
                type="number" 
                placeholder="Valor"
                Value={NewIncome.Value}
                onChange={(event)=>{
                    event.preventDefault();
                    setNewIncome({...newIncome,Value:event.target.value})
                }}  
                /><br/>
                <Input 
                type="Date" 
                placeholder="Data de entrada"
                Value={NewIncome.Date}
                onChange={(event)=>{
                    event.preventDefault();
                    setNewIncome({...newIncome,Date:event.target.value})
                }}   
                /><br/>
                
                <ButtonSubmit onClick={(event)=>{
                    event.preventDefault();
                    AddIncome(newIncome);
                }} >Salvar</ButtonSubmit>
            </Group>
            
        </IncomeSection>
    )
}

export default NewIncome

function emptyIncome(){
    return({
        Description:"",
        Value:0.00,
        Date: ""
    })
}

