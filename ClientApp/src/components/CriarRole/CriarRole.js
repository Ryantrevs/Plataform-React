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

export class EditarUsuario extends Component {
    static displayName = EditarUsuario.name;

    render() {
        return (
            <Body>
                <Div>
                    <H1>Criar Role</H1>
                    <Label>Nome Role : </Label><br />
                    <Input type="text" /><br />
                    <Button style={{"background-color":"blue","margin-right":"0.5em"}}>Criar Role</Button>
                </Div>
            </Body>
        );
    }
}

export default EditarUsuario;

