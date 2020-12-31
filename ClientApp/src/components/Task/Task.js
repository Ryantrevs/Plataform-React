import React,{useState, useContext} from 'react'
import Card from './Card/Index'
import Principal  from './Principal/Index'
import MenuList from './MenuList/Index'
import NewCardMenu from './NewCardMenu/Index'
import axios from 'axios'
import useCard from '../../hooks/useCard'
import CardContext from '../../Context/CardContext'
import ScopeContext from '../../Context/ScopeContext'
import useScope from '../../hooks/useScope'

export function Task() {
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

    return (
        <main>
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
    )
}

async function Request(method,obj,url,callback){

    switch (method){
        case "post":
            axios.post(url,obj).then(t=>{
                console.log(t)
                callback(t.data);
            })
            break;
        case "get":
            axios.get(url,obj).then(t=>{
                callback(t.data);
            })
            break;
        case "put":
            axios.put(url,obj).then(t=>{
                console.log(t)
            })
            break;
        case "teste":
            console.log("teste feito com sucesso no request")
            console.log(obj)
            return("aaaaaaaaaaa")
            break
        default:
            break;
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