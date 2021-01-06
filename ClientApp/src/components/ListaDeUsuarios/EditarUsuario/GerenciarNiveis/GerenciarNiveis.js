import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Body,
    Div,
    Label,
    Input,
    Button,
    H1,
} from './Elements';

export class GerenciarNiveis extends Component {
    static displayName = GerenciarNiveis.name;

    render() {
        return (
            <Body>
                <Div>
                    <H1>Gerenciar Niveis </H1>
                    <div style={{"border-bottom":"solid 1px #fff","border-top":"solid 1px #fff","margin":"1em"}}>
                        <Input type="checkbox" />
                        <Label>User</Label><br />
                        <Input type="checkbox" />
                        <Label>Admin</Label><br />
                    </div>
                    <Button style={{"background-color":"blue","margin-right":"0.5em"}}>Atualizar</Button>
                    <Button style={{"background-color":"gray"}}>Voltar</Button><br/>
                    
                </Div>
            </Body>
        );
    }
}

export default GerenciarNiveis;

