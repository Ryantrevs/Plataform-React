import { User } from 'oidc-client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRequest } from "./RequestContext"
import LoadingPage from '../components/LoadingPage'

const TaskContext = createContext(
    {
        ActiveList: "",
        setActiveList: () => {},
        Scope:[],
        setScope: () => { },
        TaskList: [],
        setTaskList: () => {},
        changeActiveList: () =>{},
        TakeCard: () =>{},
        updateCard: () =>{},
        newList: () =>{},
        newScope: () =>{},
        newTask: () =>{},
    }
);


export function TaskProvider({ children }) {

    var request = useRequest().Request;
    const [TaskList,setTaskList] = useState([]);
    const [scope, setScope] = useState([]);
    const [activeList,setActiveList] = useState("");
    const [card,setCard] = useState(EmptyCard());
    const [visibilityCard,setVisibilityCard] = useState(false);
    const [task,setTask] = useState(EmptyCard());
    const [visibilityTask,setVisibilityTask] = useState(false);
    const [visibilityScope,setVisibilityScope] = useState(false);
    const [ready, setReady] = useState(false);

    function changeActiveList(id){
        setActiveList(id);
    }

    function TakeCard(id){
        var obj = new FormData();
        obj.append("Id",id)
        request("post",obj,"/Task/GetCard",function(response){
            try{
                    console.log("primeira função");
                    console.log(response.data)
                    setCard(response.data);
                }
            catch(error){
                console.log(error)
            }
        });
        /*var teste;
        scope.map((x)=>(
            x.cards.map((t)=>
                t.id===id? teste=t:console.log("teste")
            )
        ))
        console.log(teste);*/
    }

    function newList(){
        var obj = new FormData();
        obj.append("Titulo","Nova Lista")
        request("post",obj,"/Task/InsertTaskList",function(response){
            console.log(response);
            setTaskList([...TaskList,{titulo:"patrick",id:response.data}]);
            setActiveList(response.data);
        })
        
    }

    function newScope(){
        var obj = new FormData();
        obj.append("taskId",activeList);
        request("post",obj,"/Task/InsertScope",function(response){
            setScope([...scope,{titulo:"Insira seu titulo aqui",id:response.data,cards:[]}])
        })
    }
    function newCard(ScopeId, Titule, Describe){
        var obj = new FormData();
        obj.append("ScopeId",ScopeId);
        obj.append("Titule",Titule);
        obj.append("Describe",Describe);
        console.log(obj);
        /*request("post",obj,"/Task/InsertCard", function(response){
            return response;
        })*/
    }

    function newTask(){
        setVisibilityTask(true);
    }

    function updateCard(){
        var obj = new FormData();
        obj.append("obj",card);
        console.log(card);
        setCard(EmptyCard());
        request("put",obj,("/Task/UpdateCard"),function(response){
            console.log(response.data);
            setScope(scopeState=>(
                scopeState.map((x)=>(
                    x.cards.map((t)=>
                        t.id===card.id? console.log(t.percentage):t
                    )
                ))
            ))
            
        })
    }

    useEffect(()=>{
        console.log(scope);
    },[scope])

    useEffect(()=>{
        let isSubscribed = true
        console.log(card);
        console.log("mudar visibilidade");
        if(visibilityCard==true){
            setVisibilityCard(false);
            
        }
        else{
            if(Object.entries(card).toString() != Object.entries(EmptyCard()).toString()){
                console.log("asdjashdsaadshoklas")
                setVisibilityCard(true)
            }
        }
        return () => isSubscribed = false
    },[card])

    useEffect(() => {
        let isSubscribed = true
        request("get", {}, "/Task/Organization", function (response) {
            if(response.data!=undefined){
                setTaskList(response.data);
                setActiveList(response.data[0].id.toString())
                console.log(response)
            }
            setReady(true);
        });
        return () => isSubscribed = false
    }, []);

    useEffect(()=>{
        let isSubscribed = true
        var obj = new FormData();
        console.log(activeList)
        obj.append("Id",activeList)
        request("post",obj,"/Task/GetTasks",function(response){
            try{
                
                setScope(response.data)
                console.log(response.data);
            }
            catch (error) {
                console.log(error)
            }
        });
        if(activeList!=""){
            setVisibilityScope(true);
            console.log("entrou na visibilidade");
        }
        return () => isSubscribed = false
    },[activeList]);


if(ready!=false){
    return (
        <TaskContext.Provider value={{ 
                        ActiveList: activeList, 
                        setActiveList: setActiveList, 
                        Scope:scope, setScope:setScope, 
                        TaskList:TaskList,
                        setTaskList:setTaskList,
                        changeActiveList:changeActiveList,
                        TakeCard:TakeCard,
                        card:card,
                        visibilityCard:visibilityCard,
                        setCard:setCard,
                        updateCard:updateCard,
                        newList:newList,
                        newScope:newScope,
                        newTask:newTask,
                        visibilityTask:visibilityTask,
                        setVisibilityTask:setVisibilityTask,
                        visibilityScope:visibilityScope,
                        Task:task,
                        newCard:newCard}}>
            {children}
        </TaskContext.Provider>
    );
        }
        else{
            return(
                <LoadingPage/>
            )
        }
}

export function useTask() {
    const Context = useContext(TaskContext);
    return Context;
}

export default TaskContext;

function EmptyCard(){
    return{
        id:"",
        title:"",
        describe:"",
        percentage:0,
        conclude:false
    }
}
