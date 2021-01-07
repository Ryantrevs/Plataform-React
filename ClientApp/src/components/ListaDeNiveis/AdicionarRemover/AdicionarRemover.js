import React, { Component } from 'react';
import {
    Body,
    Div,
    Label,
    Input,
    Button,
    H1,
} from './Elements';

export class AdicionarRemover extends Component {
    static displayName = AdicionarRemover.name;

    render() {
        return (
            <Body>
                <Div>
                    <H1>Adicionar ou Remover usuarios deste nivel</H1>
                    <div style={{"border-top":"solid 1px #9e9e9e","border-bottom":"solid 1px #9e9e9e"}}>
                        <Input type="checkbox" />
                        <Label>Usuario:admin,email:admin@gmail.com</Label><br /> 
                    </div>
                    
                    <Button style={{"background-color":"blue","margin-right":"0.5em"}}>Atualizar</Button>
                    <Button style={{"background-color":"gray"}}>Voltar</Button><br/>
                </Div>
            </Body>
        );
    }
}

export default AdicionarRemover;

