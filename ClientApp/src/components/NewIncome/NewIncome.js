import React, {useState, useEffect} from 'react'
import useScope from '../../hooks/useScope'
import { Link } from 'react-router-dom';
import {useRequest} from '../../context/RequestContext'
import {
    IncomeSection,
    Input,
    ButtonSubmit,
    Group,
    InputRadio
} from './elements'

function NewIncome() {
    

    return (
        <IncomeSection>
            <Group>
                <Input 
                type="text" 
                placeholder="Descrição" 
                /><br/>
                <Input 
                type="number" 
                placeholder="Valor"
                /><br/>
                <Input 
                type="Date" 
                placeholder="Data de entrada" 
                /><br/>
                
                <ButtonSubmit >Salvar</ButtonSubmit>
            </Group>
            
        </IncomeSection>
    )
}

export default NewIncome


