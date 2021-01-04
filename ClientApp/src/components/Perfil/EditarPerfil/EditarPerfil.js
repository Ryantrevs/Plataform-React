//import { Button } from 'bootstrap';
import React, { Component } from 'react';
import {
    Body,
    Div,
    Label,
    Input,
    Button,
    H1,
} from './Elements';

export class EditarPerfil extends Component {
    static displayName = EditarPerfil.name;

    render() {
        return (
            <Body>
                <Div>
                    <H1>Editar Perfil</H1>
                    <Label>Email : </Label><br />
                    <Input type="email" /><br />
                    <Label>Nome do Cliente : </Label><br />
                    <Input type="text" /><br />
                    <Button>Atualizar</Button>
                    <Button>Voltar</Button>
                </Div>
            </Body>
        );
    }
}

export default EditarPerfil;

