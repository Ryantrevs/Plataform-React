<<<<<<< HEAD
import React,{useState, useContext} from 'react'
=======
import React,{useState} from 'react'
import { DragDropContext } from 'react-beautiful-dnd';
>>>>>>> 000d614316bc5939edc690cd5dc737cf3a26846d
import Card from './Card/Index'
import Principal  from './Principal/Index'
import MenuList from './MenuList/Index'
import NewCardMenu from './NewCardMenu/Index'
import axios from 'axios'
import useCard from '../../hooks/useCard'
import CardContext from '../../Context/CardContext'

export function Task() {
    const context = useContext(CardContext)
    const [infoCard, AddCard] = useCard(context)
    const [menuCardState,SetMenuCardState] = useState(false);
    const [visible,setVisible] = useState({visibility:false,scope:[]})

    
    async function ChangeCardState(state,obj){
        if(state==true){
            AddCard(obj);
            console.log(infoCard);
            SetMenuCardState(state);
        }
        else{
            AddCard(context)
            SetMenuCardState(state);
        }
    }

    async function ChangeMenuCardState(state,scope){
        if(state==true){
            console.log(scope)
            setVisible({visibility:state,scope:scope});
            console.log(visible);
        }
        else{
            setVisible({visibility:state,scope:context});
            console.log(visible);
        }
    }

    return (
        <main>
            <Principal Request={Request} 
            ChangeCardState={ChangeCardState}
            MenuCard={ChangeMenuCardState}/>
            <Card 
            isVisible={menuCardState} 
            ChangeCardState={ChangeCardState}
            infoCard={infoCard}
            setCard={AddCard}/>
            <NewCardMenu
            visible={visible}/>
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