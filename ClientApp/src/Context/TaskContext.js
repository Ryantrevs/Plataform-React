import { User } from 'oidc-client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRequest } from "./RequestContext"

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
        setTaskList([...TaskList,{titulo:"patrick",id:"asdnasdjkldas"}])
    }

    function newScope(){
        setScope([...scope,{titulo:"novo escopo",id:"asdalshsal",cards:[]}])
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
    },[card])

    useEffect(() => {
        request("get", {}, "/Task/Organization", function (response) {
            setTaskList(response.data);
            setActiveList(response.data[0].id.toString())
            console.log(response)
        });
    }, []);

    useEffect(()=>{
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
    },[activeList]);


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
                        visibilityTask:visibilityTask}}>
            {children}
        </TaskContext.Provider>
    );
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
