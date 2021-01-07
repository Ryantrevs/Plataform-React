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
                    <H1>Gerenciar Permissões</H1>
                    <div style={{"border-bottom":"solid 1px #fff","border-top":"solid 1px #fff","margin":"1em"}}>
                        <Input type="checkbox" />
                        <Label>Create Role</Label><br />
                        <Input type="checkbox" />
                        <Label>Edit Role</Label><br />
                        <Input type="checkbox" />
                        <Label>Delete Role</Label><br />
                    </div>
                    <Button style={{"background-color":"blue","margin-right":"0.5em"}}>Atualizar</Button>
                    <Button style={{"background-color":"gray"}}>Voltar</Button><br/>
                    
                </Div>
            </Body>
        );
    }
}

export default GerenciarNiveis;

