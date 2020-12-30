import React,{useState,useEffect} from 'react';

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
    Card
} from './Elements'
import { TiThMenuOutline } from "react-icons/ti";
import useCard from '../../../hooks/useCard';



export function Principal({Request,ChangeCardState,MenuCard}) {

    const [TaskList,SetTaskList] = useState([]);
    const [ActiveList,SetActiveList] = useState();
    const [Scope,SetScope] = useState([]);
    const [infoCard,setCard,changeCard] = useCard();

    useEffect(() => {
        Request("get",{},"/Task/Organization",function(data){
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
    },[ActiveList])

    useEffect(()=>{
        if(Scope){
            console.log(Scope)
        }
    },[Scope])

    useEffect(()=>{
        console.log(TaskList);
    },[TaskList])
    
    async function GetTask(ActiveList){
        var obj = new FormData();
        obj.append("Id",ActiveList)
        Request("post",obj,"/Task/GetTasks",function(data){
            try{
                SetScope(data)
            }
            catch(error){
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
        SetTaskList([...TaskList,newList]);
    }

    async function newScope(){
        const newscopes = {id:"abc", titulo:"patrick_TESTE",cards:[]}
        SetScope([...Scope,newscopes]);
    }

    async function newCard(){
        console.log(Scope)
        MenuCard(true,Scope)
    }


    return (
        <PrincipalSection>
            <Section>
                <Menu>
                    <TiThMenuOutline size={28} color="#fff"/><br/>
                    <ButtonTools onClick={(event)=>{
                        event.preventDefault();
                        console.log("Adicionar Lista");
                        NewTaskList();
                    }}>+Lista</ButtonTools>
                    <ButtonTools onClick={(event)=>{
                        console.log("Adicionar Escopo");
                        newScope();
                    }}>+Escopo</ButtonTools>
                    <ButtonTools onClick={(event)=>{
                        console.log("Adicionar Tarefa");
                        newCard();
                    }}>+Tarefa</ButtonTools>
                    <NavMenu>

                    </NavMenu>
                    <MenuItem>
                    {TaskList.map(teste=>(
                        <Item key={teste.id}
                        id={teste.id}
                        onClick={(event)=>{
                            event.preventDefault();
                            SetActiveList(event.target.id)
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
                Scope.map((scope,index)=>(
                <ScopeList key={index}>
                    {scope.cards.map((card,subIndex)=>(
                        <Card 
                        onClick={(event)=>{
                            event.preventDefault();
                            GetCard(event.target.id);
                            
                            }
                        }
                        id={card.id} 
                        key={subIndex}>{card.Titulo}</Card>
                    ))}
                    <h3>{scope.titulo}</h3>  
                </ScopeList>   
                ))
            }
                </TaskMenu>
        </PrincipalSection>
    )
}


