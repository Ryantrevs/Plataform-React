import React,{useState} from 'react'
import { DragDropContext } from 'react-beautiful-dnd';
import Card from './Card/Index'
import Principal  from './Principal/Index'
import MenuList from './MenuList/Index'
import NewCardMenu from './NewCardMenu/Index'
import axios from 'axios'

export function Task() {

    return (
        <main>
            <Principal Request={Request}/>
        </main>
    )
}

async function Request(method,obj,url,callback){

    switch (method){
        case "post":
            axios.post(url,obj).then(t=>{
                console.log(obj);
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
