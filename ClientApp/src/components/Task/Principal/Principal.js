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



export function Principal({Request}) {

    const [TaskList,SetTaskList] = useState([]);
    const [ActiveList,SetActiveList] = useState();
    const [Scope,SetScope] = useState([]);


    useEffect(() => {
        Request("get",{},"/Task/Organization",function(data){
            SetTaskList(data);
            SetActiveList(data[0].id.toString())
            console.log(data)
        });

    }, []);

    useEffect(()=>{
        if(ActiveList){
            console.log(ActiveList)
            GetTask(ActiveList)
            
        }
    },[ActiveList])

    useEffect(()=>{
        if(Scope){
            console.log(Scope)
            for(var item in Scope){
                console.log(item)
            }
        }
    },[Scope])
    
    async function GetTask(ActiveList){
        Request("post",{Id:ActiveList},"/Task/GetTasks",function(data){
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
                console.log(data)
                //SetScope(data)
            }
            catch(error){
                console.log(error)
            }
        });
    }


    return (
        <PrincipalSection>
            <Section>
                <Menu>
                    <TiThMenuOutline size={28} color="#fff"/><br/>
                    <ButtonTools>+Lista</ButtonTools>
                    <ButtonTools>+Escopo</ButtonTools>
                    <ButtonTools>+Tarefa</ButtonTools>
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


