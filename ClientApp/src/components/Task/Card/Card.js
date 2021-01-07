import React,{useEffect,useState} from 'react'
import { MdCancel } from "react-icons/md";
import { BsFillTrashFill } from "react-icons/bs";

import {
    CardBackground,
    CloseDiv,
    Background,
    InputTitule,
    AddDescribe,
    DescribeContent,
    Section,
    DescribeP,
    DescribreText,
    CardMenu,
    InputData,
    ButtonCopiar,
    ButtonLixo
} from './Elements'
import {useTask} from '../../../Context/TaskContext'

function Card(){

    const context = useTask();
    const cardInfo = context.card;

    return (
        <CardMenu isVisible={context.visibilityCard}>
            <Background onClick={(event)=>{
                event.preventDefault();
                //cardContext.ChangeCard("",false);
            }}/>
            <CardBackground>
                <CloseDiv>
                    <MdCancel size={32} 
                    onClick={
                        (event)=>{
                        event.preventDefault();
                        context.updateCard();
                        //ontext.ChangeCard("",false);
                        }
                    } />
                </CloseDiv>
                <Section>
                    <label>Título</label>
                    <InputTitule 
                    value={context.card.title}
                    onChange={(event)=>{
                        context.setCard({...cardInfo,['title']:event.target.value})
                    }}/>
                    <label>Descricão</label>
                    <AddDescribe >
                        <DescribeP>{cardInfo.describe}</DescribeP>
                    </AddDescribe>
                    <DescribeContent>
                        <DescribreText placeholder="Descrição do card" />
                    </DescribeContent>
                    <label>Porcentagem</label><br />
                    <select name="Porcento"
                    value={cardInfo.percentage} 
                    onChange={(event)=>{
                        context.setCard({...cardInfo,['percentage']:parseInt(event.target.value)})
                    }}>
                        <option value="0">0%</option>
                        <option value="10">10%</option>
                        <option value="20">20%</option>
                        <option value="30">30%</option>
                        <option value="40">40%</option>
                        <option value="50">50%</option>
                        <option value="60">60%</option>
                        <option value="70">70%</option>
                        <option value="80">80%</option>
                        <option value="90">90%</option>
                        <option value="100">100%</option>
                    </select><br />
                    <label>Data Final : </label>
                    <InputData type="date" /><br />
                    <label>Concluído</label>
                    <input type="checkbox" 
                    onChange={(event)=>
                        {
                            console.log(event.target.checked)
                        }
                    }/><br />
                    <ButtonCopiar>Copiar Card</ButtonCopiar>
                    <ButtonLixo><BsFillTrashFill /></ButtonLixo>
                </Section>
            </CardBackground>
        </CardMenu>
    )
}
/*function Card({isVisible,ChangeCardState,infoCard,setCard}) {

    useEffect(()=>{
        console.log(infoCard);
    },[])


    return (
        <CardMenu isVisible={isVisible}>
            <Background onClick={(event)=>{
                event.preventDefault();
                ChangeCardState(false);
            }}/>
            <CardBackground>
                <CloseDiv>
                    <MdCancel size={32} onClick={(event)=>{
                        event.preventDefault();
                        ChangeCardState(false)}} />
                </CloseDiv>
                <Section>
                    <label>Título</label>
                    <InputTitule 
                    value={infoCard.title}
                    onChange={(event)=>{
                        setCard({title:event.target.value})
                    }}/>
                    <label>Descricão</label>
                    <AddDescribe >
                        <DescribeP>{infoCard.describe}</DescribeP>
                    </AddDescribe>
                    <DescribeContent>
                        <DescribreText placeholder="Descrição do card" />
                    </DescribeContent>
                    <label>Porcentagem</label><br />
                    <select name="Porcento" 
                    value={infoCard.percentage}
                    onChange={(event)=>{
                        setCard({percentage:parseInt(event.target.value)});
                    }}>
                        <option value="0">0%</option>
                        <option value="10">10%</option>
                        <option value="20">20%</option>
                        <option value="30">30%</option>
                        <option value="40">40%</option>
                        <option value="50">50%</option>
                        <option value="60">60%</option>
                        <option value="70">70%</option>
                        <option value="80">80%</option>
                        <option value="90">90%</option>
                        <option value="100">100%</option>
                    </select><br />
                    <label>Data Final : </label>
                    <InputData type="date" /><br />
                    <label>Concluído</label>
                    <input type="checkbox" 
                    checked={infoCard.conclude}
                    onChange={(event)=>
                        {
                            console.log(event.target.checked)
                            setCard({conclude:event.target.checked})
                        }
                    }/><br />
                    <ButtonCopiar>Copiar Card</ButtonCopiar>
                    <ButtonLixo><BsFillTrashFill /></ButtonLixo>
                </Section>
            </CardBackground>
        </CardMenu>

    )
}*/

export default Card;
