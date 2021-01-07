import React,{useState, useContext} from 'react'
import Card from './Card/Index'
import Principal  from './Principal/Index'
import MenuList from './MenuList/Index'
import NewCardMenu from './NewCardMenu/Index'
import axios from 'axios'
import useCard from '../../hooks/useCard'
import useScope from '../../hooks/useScope'
import {TaskProvider} from '../../context/TaskContext'

export function Task() {
    
    return (
        <TaskProvider>
            <Principal/>
            <Card/>
            <NewCardMenu/>
            <MenuList/>
        </TaskProvider>
    )
}


/*<main>
            <Principal 
            Request={Request} 
            ChangeCardState={ChangeCardState}
            MenuCard={ChangeMenuCardState}
            ListScope={ScopeList}
            newScopeList={AddScope}/>
            <Card 
            isVisible={menuCardState} 
            ChangeCardState={ChangeCardState}
            infoCard={infoCard}
            setCard={AddCard}/>
            <NewCardMenu
            visible={visible}
            Scope={ScopeList}/>
            <MenuList/>
        </main>

const cardContext = useContext(CardContext);
    const scopeContext = useContext(ScopeContext);
    const [infoCard, AddCard] = useCard(cardContext);
    const [ScopeList, AddScope] = useScope(scopeContext);
    const [menuCardState,SetMenuCardState] = useState(false);
    const [visible,setVisible] = useState(false);

    
    async function ChangeCardState(state,obj){
        if(state==true){
            AddCard(obj);
            console.log(infoCard);
            SetMenuCardState(state);
        }
        else{
            AddCard(cardContext)
            SetMenuCardState(state);
        }
    }

    async function ChangeMenuCardState(state,obj){
        if(state==true){
            setVisible(state)
            AddScope(obj);
        }
        else{
            setVisible(state);
            AddScope(scopeContext);
        }
    }
/*async function GetInitialState(){
    let response = Request("get",{},"/Task/Organization",function(data){
        console.log(data)
        return data;
    });
}*/

//<Card/>
//<NewCardMenu/>
//<MenuList/>*?