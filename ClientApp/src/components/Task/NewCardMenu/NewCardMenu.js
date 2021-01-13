import React, { useState, useEffect } from 'react'
import {
    Section,
    NewCardSection,
    Header,
    Main,
    Background,
    Select,
    Input,
    Textarea,
    Button,
    Dates
} from './Elements'
import { MdCancel } from "react-icons/md";
import { useTask } from '../../../context/TaskContext'

export function NewCardMenu() {
    const context = useTask();
    const [newCard, setNewCard] = useState({
        id: "",
        titulo: "",
        descricao: "",
        finalDate: "",
        scopeId: ""
    })
    const [previa, setPrevia] = useState([false,false,false])
    const [warningDate, setWarning] = useState([]);

    useEffect(()=>{
        if(context.Scope[0]!=undefined && newCard.scopeId==""){ 
            setNewCard({...newCard,scopeId:context.Scope[0].id})
        }
    })
    console.log(context.Scope);
    return (
        <Section isVisible={context.visibilityTask}>
            <NewCardSection>
                <Header>
                    <h2>Novo Card</h2>
                    <MdCancel size={32} onClick={(event)=>{
                        event.preventDefault();
                        context.setVisibilityTask(false);
                    }} />
                </Header>
                <Main>
                    <label>Na Lista:  </label>
                    <Select value={newCard.scopeId}
                    onChange={
                        (event) => {
                            setNewCard({ ...newCard, scopeId: event.target.id })
                        }}>
                        {context.Scope.map((value, index) => (
                            <option
                                key={index}
                                value={value.id}>{value.titulo}</option>
                        ))}
                    </Select><br />
                    <label>
                        Titulo Card
                    </label><br />
                    <Input type="text" value={newCard.titulo} onChange={(event) => {
                        setNewCard({ ...newCard, titulo: event.target.value })
                    }} />
                    <label>
                        Descricão do Card
                    </label>
                    <Textarea
                        placeholder="Descrição"
                        value={newCard.descricao}
                        onChange={(event) => {
                            setNewCard({ ...newCard, descricao: event.target.value })
                        }}></Textarea><br />
                    {}
                    {warningDate.map((value, index) => (
                        <Dates type="date" />
                    ))}
                    <Dates type="date" /><br />
                    <Button type="submit"
                    onClick={(event)=>{
                        event.preventDefault();
                        console.log(newCard.scopeId);
                        let index = getIndex(newCard.scopeId,context.Scope);
                        console.log(index);
                        let id = context.newCard(newCard.scopeId,newCard.titulo,newCard.Describe);
                        setNewCard({...newCard,id:id});
                        let novoCard = context.Scope;
                        novoCard[index]['cards'].push(newCard);
                        context.setScope(novoCard);
                    }}>Salvar</Button>
                </Main>
            </NewCardSection>
            <Background onClick={(event)=>{
                        event.preventDefault();
                        context.setVisibilityTask(false);
                    }}/>
        </Section>
    )
}

function getIndex(value, array) {
    for(var i = 0; i < array.length; i++) {
        if(array[i].id === value) {
            
            return i;
        }
    }
    return -1; //to handle the case where the value doesn't exist
}