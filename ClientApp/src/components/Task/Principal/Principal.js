import React, { useState, useEffect } from 'react';
import {
    PrincipalSection,
    Section,
    Menu,
    NavMenu,
    MenuItem,
    Item,
    Configure,
    ButtonConfigure,
    ButtonTools,
    TaskMenu,
    ScopeList,
    Card,
    CardTitle
} from './Elements'
import { TiThMenuOutline } from "react-icons/ti";
import {useTask} from '../../../context/TaskContext'

export function Principal() {

    const context = useTask();

    useEffect(()=>{
        console.log(context.TaskList);   
    },[])

    return (
        <PrincipalSection>
            <Section>
                <Menu>
                    <TiThMenuOutline size={28} color="#fff"/><br/>
                    <ButtonTools onClick={(event)=>{
                        event.preventDefault();
                        console.log("Adicionar Lista");
                        context.newList();
                        //NewTaskList();
                    }}>+Lista</ButtonTools>
                    <ButtonTools 
                        onClick={(event)=>{
                        console.log("Adicionar Escopo");
                        context.newScope()
                        //newScope();
                    }}>+Escopo</ButtonTools>
                    <ButtonTools onClick={(event)=>{
                        console.log("Adicionar Tarefa");
                        context.newTask();
                        //newCard();
                    }}>+Tarefa</ButtonTools>
                    <NavMenu>

                    </NavMenu>
                    <MenuItem>
                    {context.TaskList.map(teste => (
                            <Item key={teste.id}
                                id={teste.id}
                                onClick={(event) => {
                                    event.preventDefault();
                                    context.changeActiveList(event.target.id);
                                    //SetActiveList(event.target.id)
                                }}>
                                {teste.titulo}
                            </Item>))
                        }
                        <Configure>
                            <ButtonConfigure>

                            </ButtonConfigure>
                        </Configure>
                    </MenuItem>
                </Menu>
            </Section>
            <TaskMenu>
            {
                context.Scope.map((scope,index)=>(
                <ScopeList key={index}>
                    <h3>{scope.titulo}</h3> 
                    {scope.cards.map((card,subIndex)=>(
                        <Card 
                        onClick={(event)=>{
                            event.preventDefault();
                            context.TakeCard(event.target.id);
                            //;
                            //GetCard(event.target.id);
                            }
                        }
                        id={card.id} 
                        key={subIndex}><CardTitle>{card.titulo}</CardTitle>
                        </Card>
                    ))}
                     
                </ScopeList>   
                ))
            }
                </TaskMenu>

        </PrincipalSection>
    )
}

/*<PrincipalSection>
            <Section>
                <Menu>
                    <TiThMenuOutline size={28} color="#fff"/><br/>
                    <ButtonTools onClick={(event)=>{
                        event.preventDefault();
                        console.log("Adicionar Lista");
                        //NewTaskList();
                    }}>+Lista</ButtonTools>
                    <ButtonTools 
                        onClick={(event)=>{
                        console.log("Adicionar Escopo");
                        //newScope();
                    }}>+Escopo</ButtonTools>
                    <ButtonTools onClick={(event)=>{
                        console.log("Adicionar Tarefa");
                        //newCard();
                    }}>+Tarefa</ButtonTools>
                    <NavMenu>

                    </NavMenu>
                    <MenuItem>
                        {context.TaskList.map(teste => (
                            <Item key={teste.id}
                                id={teste.id}
                                onClick={(event) => {
                                    event.preventDefault();
                                    //SetActiveList(event.target.id)
                                }}>
                                {teste.titulo}
                            </Item>))}
                        <Configure>
                            <ButtonConfigure>

                            </ButtonConfigure>
                        </Configure>
                    </MenuItem>
                </Menu>
            </Section>
            <TaskMenu>
            {
                context.scope.map((scope,index)=>(
                <ScopeList key={index}>
                    <h3>{scope.titulo}</h3> 
                    {scope.cards.map((card,subIndex)=>(
                        <Card 
                        onClick={(event)=>{
                            event.preventDefault();
                            //GetCard(event.target.id);
                            }
                        }
                        id={card.id} 
                        key={subIndex}><CardTitle>{card.titulo}</CardTitle>
                        </Card>
                    ))}
                     
                </ScopeList>   
                ))
            }
                </TaskMenu>

        </PrincipalSection>
    )

/*
const [TaskList,SetTaskList] = useState([]);
    const [ActiveList,SetActiveList] = useState();
    const [infoCard,setCard,changeCard] = useCard();

    useEffect(() => {
        Request("get", {}, "/Task/Organization", function (data) {
            SetTaskList(data);
            SetActiveList(data[0].id.toString())
            console.log(data)
        });

    }, []);

    useEffect(()=>{
        if(ActiveList){
            GetTask(ActiveList)
            console.log("a")
        }
    }, [ActiveList])

    /*useEffect(() => {
        if (Scope) {
            console.log(Scope)
            newScopeList(Scope);
        }
    }, [Scope])


    useEffect(()=>{
        console.log(TaskList);
    },[TaskList])
    
    async function GetTask(ActiveList){
        var obj = new FormData();
        obj.append("Id",ActiveList)
        Request("post",obj,"/Task/GetTasks",function(data){
            try{
                newScopeList(data)
            }
            catch (error) {
                console.log(error)
            }
        });
    }

    async function GetCard(id){
        var obj = new FormData();
        obj.append("Id",id)
        Request("post",obj,"/Task/GetCard",function(data){
            try{
                    console.log(data);
                    ChangeCardState(true,data);
                }
            catch(error){
                console.log(error)
            }
        });
    }

    async function NewTaskList(){
        const newList = {id:"teste",titulo:"novoCard",cards:[]}
        SetTaskList([...ListScope,newList]);
    }

    async function newScope(){
        const newscopes = {id:"abc", titulo:"patrick_TESTE",cards:[]}

        newScopeList([...ListScope,newscopes]);
    }

    async function newCard(){
        MenuCard(true,ListScope)
    }

    async function enableNewCard(){
        if(ListScope.length>0){
            return true;
        }
        return false;
    }
*/