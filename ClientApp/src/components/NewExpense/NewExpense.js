import React,{useState,useEffect,useRef} from 'react'
import {
    MainNewExpense,
    BackgroundNewExpense,
    InputArea,
    InsertInput,
    AddButton,
    InputRadio,
    H1
} from './Elements'
import {useRequest} from '../../Context/RequestContext'

function NewExpense() {
    const request = useRequest().Request;
    const [NewExpense, setNewExpense] = useState(emptyIncome);
    const unmounted = useRef(false);

    const [abc,setAbc] = useState(emptyCategory);



    useEffect(() => {
        GetCategories();
        return () => { unmounted.current = true }
    }, []);


    function Add(obj){
        var data = new FormData();
        data.append("expenses.Description",NewExpense.Description);
        data.append("expenses.Value",NewExpense.Value);
        data.append("expenses.Date",NewExpense.Date);
        data.append("expenses.ExpenseCategory.name",NewExpense.Category);
        request("post",data, "/Finance/NewExpense", function(response){
            console.log(response.request.status)
            console.log(response);
        })
    }
    async function GetCategories(){
        request("get",{}, "/Finance/GetCategory", function(response){
            if(response.data!=abc && response.data!=undefined){
                console.log(abc);
                console.log(response.data);
                setAbc(response.data);
            }
        });
    }

    /*useEffect(()=>{
        let subscribe = true;
        
        request("get",{}, "/Finance/GetCategory", function(response){
            if(response.data!=categoryExpense && response.data!=undefined){
                setCategoryExpense(response.data);
            }
        });

        return () =>{
            subscribe =false
        };
    },[categoryExpense])*/


    return (
        <MainNewExpense>
            <BackgroundNewExpense>
                <H1>New Expense</H1>
                <InputArea>
                    <InsertInput 
                    type="text" 
                    placeholder=""
                    onChange={(event)=>{
                        setNewExpense({...NewExpense,Description:event.target.value});
                    }}/><br/>
                    <InsertInput 
                    type="number" 
                    placeholder=""
                    onChange={(event)=>{
                        setNewExpense({...NewExpense,Value:parseFloat(event.target.value)});
                    }}/><br/>
                    <InsertInput 
                    type="Date" 
                    placeholder=""
                    onChange={(event)=>{
                        setNewExpense({...NewExpense,Date:event.target.value});
                    }}/>
                    <select name="categorias"
                    value={abc[0].id} 
                    onChange={(event)=>{
                        event.preventDefault();
                        setNewExpense({...NewExpense,Category:event.target.value});
                    }}>
                        {abc.map((item,index)=>(
                            <option value={item.id} id={index}>{item.name}</option>
                        ))}
                    </select>
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
                    }}>Criar
                </AddButton>
            </BackgroundNewExpense>
        </MainNewExpense>
    )
}

export default NewExpense

function emptyIncome(){
    return({
        Description:"",
        Value:0.00,
        Date: "",
        Category:""
    })
}
function emptyCategory(){
    return([{
        id:"",
        name:"",
        expenses:[]
    }])
}
/*{categoryExpense.map((item,index)=>(
                        <InputRadio 
                        id={item.id} 
                        key={index}>{item.name}</InputRadio>
                    ))}*/