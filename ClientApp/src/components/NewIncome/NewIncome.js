import React, {useState, useEffect} from 'react'
import useScope from '../../hooks/useScope'
import { Link } from 'react-router-dom';
import {useRequest} from '../../context/RequestContext'

import {
    IncomeSection,
    Input,
    ButtonSubmit,
    Group,
    InputRadio,
    H1
} from './elements'

function NewIncome() {
    const [newIncome, setNewIncome] = useState(emptyIncome());
    const [incomeCategory, setIncomeCategory] = useState(emptyCategory())
    var request = useRequest().Request;


    function Add(obj){
        var data = new FormData();
        data.append("income.Description",newIncome.Description);
        data.append("income.Value",newIncome.Value);
        data.append("income.Date",newIncome.Date);
        data.append("income.incomeCategory.id",newIncome.Category);
        request("post",data, "/Finance/NewIncome", function(response){
            console.log(response.request.status)
            console.log(response.body);
            console.log(response);
        })
    }
    async function GetCategories(){
        request("get",{}, "/Finance/getIncomingCategory", function(response){
            if(response.data!=incomeCategory && response.data!=undefined){
                console.log(response.request.status)
                console.log(response.body);
                console.log(response);
                setIncomeCategory(response.data);
                setNewIncome({...newIncome,Category:response.data[0].id})
            }
        });
    }

    useEffect(()=>{
        let subscribe = true
        GetCategories()
        return ()=>{subscribe=false}
    },[])

    return (
        <IncomeSection>
            <Group>
                <H1>New Income</H1>
                <Input 
                type="text" 
                placeholder="Descrição"
                Value={newIncome.Description}
                onChange={(event)=>{
                    event.preventDefault();
                    setNewIncome({...newIncome,Description:event.target.value})
                }} 
                /><br/>
                <Input 
                type="number" 
                placeholder="Valor"
                Value={newIncome.Value}
                onChange={(event)=>{
                    event.preventDefault();
                    setNewIncome({...newIncome,Value:event.target.value})
                }}  
                /><br/>
                <Input 
                type="Date" 
                placeholder="Data de entrada"
                Value={newIncome.Date}
                onChange={(event)=>{
                    event.preventDefault();
                    setNewIncome({...newIncome,Date:event.target.value})
                }}   
                /><br/>

                    <select name="categorias"
                    value={incomeCategory[0].id} 
                    onChange={(event)=>{
                        event.preventDefault();
                        setNewIncome({...newIncome,Category:event.target.value});
                    }}>
                        {incomeCategory.map((item,index)=>(
                            <option 
                            id={item.id}
                            key={index}>{item.name}</option>
                        ))}
                    </select>
                
                <ButtonSubmit onClick={(event)=>{
                    event.preventDefault();
                    Add(newIncome);
                }} >Salvar</ButtonSubmit>
            </Group>
            
        </IncomeSection>
    )
}

export default NewIncome

function emptyCategory(){
    return([{
        id:"",
        name:"",
        Incomes:[]
    }])
}
function emptyIncome(){
    return({
        Description:"",
        Value:0.00,
        Date: "",
        Category:""
    })
}