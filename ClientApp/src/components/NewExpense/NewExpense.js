import React,{useState,useEffect} from 'react'
import {
    MainNewExpense,
    BackgroundNewExpense,
    InputArea,
    InsertInput,
    AddButton,
    InputRadio
} from './Elements'
import {useRequest} from '../../context/RequestContext'

function NewExpense() {

    const [category, setCategory] = useState([])
    const request = useRequest().Request;
    const [NewExpense, setNewExpense] = useState(emptyIncome);

    function Add(obj){
        var data = new FormData();
        data.append("expenses.Description",NewExpense.Description);
        data.append("expenses.Value",NewExpense.Value);
        data.append("expenses.Date",NewExpense.Date);
        request("post",data, "/Finance/NewExpense", function(response){
            console.log(response.request.status)
            console.log(response);
        })
    }

    useEffect(()=>{
        request("get",{}, "/Finance/GetCategory", function(response){
            console.log(response.data);
            setCategory(response.data);
        })
    },[])
    return (
        <MainNewExpense>
            <BackgroundNewExpense>
                <InputArea>
                    <InsertInput 
                    type="text" 
                    placeholder=""
                    onChange={(event)=>{
                        setNewExpense({...NewExpense,Description:event.target.value});
                    }}/>
                    <InsertInput 
                    type="number" 
                    placeholder=""
                    onChange={(event)=>{
                        setNewExpense({...NewExpense,Value:parseFloat(event.target.value)});
                    }}/>
                    <InsertInput 
                    type="Date" 
                    placeholder=""
                    onChange={(event)=>{
                        setNewExpense({...NewExpense,Date:event.target.value});
                    }}/>
                    {category.map((item,index)=>(
                        <InputRadio 
                        id={item.id} 
                        key={index}>{item.name}</InputRadio>
                    ))}
                </InputArea>
                <AddButton
                onClick={
                    (event)=>{
                        if(NewExpense.Description!="" && NewExpense.Value!=0 && NewExpense.Date!=""){
                            event.preventDefault();
                            console.log(NewExpense);
                            Add(NewExpense);
                        }else{
                            alert("Preencha os campos para continuar");
                        }
                
            }}>Criar</AddButton>
            </BackgroundNewExpense>
        </MainNewExpense>
    )
}

export default NewExpense

function emptyIncome(){
    var year = Date.prototype.getFullYear;
    var month = Date.prototype.getMonth;
    var day = Date.prototype.getDay;
    return({
        Description:"",
        Value:0.00,
        Date: ""
    })
}