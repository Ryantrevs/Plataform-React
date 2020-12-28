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

function Card() {
    const [menuCard,SetMenuCard] = useState(true);

    useEffect(()=>{
        console.log(menuCard)
        console.log("ashndiuashgduahgdaiuohdas")
    },[menuCard])

    return (
        <CardMenu isVisible={menuCard}>
            <Background />
            <CardBackground>
                <CloseDiv>
                    <MdCancel size={32} onClick={(event)=>{
                        event.preventDefault();
                        SetMenuCard(false)}} />
                </CloseDiv>
                <Section>
                    <label>Título</label>
                    <InputTitule />
                    <label>Descricão</label>
                    <AddDescribe>
                        <DescribeP>Adicionar descrição</DescribeP>
                    </AddDescribe>
                    <DescribeContent>
                        <DescribreText placeholder="Descrição do card" />
                    </DescribeContent>
                    <label>Porcentagem</label><br />
                    <select name="Porcento">
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
                    <input type="checkbox" /><br />
                    <ButtonCopiar>Copiar Card</ButtonCopiar>
                    <ButtonLixo><BsFillTrashFill /></ButtonLixo>
                </Section>
            </CardBackground>
        </CardMenu>

    )
}

export default Card;
