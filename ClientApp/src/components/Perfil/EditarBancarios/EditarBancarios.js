import React, { Component } from 'react';
import {
    Body,
    Div,
    Label,
    Input,
    H1,
    Button,
    Select
} from './Elements';

export class EditarBancarios extends Component {
    static displayName = EditarBancarios.name;

    render() {
        return (
            <Body>
                <Div>
                    <H1>Editar Dados Bancarios</H1>
                    <Label>Nome do Banco: </Label><br />
                    <Input type="text" /><br />
                    <Label>Número do Banco: </Label><br />
                    <Input type="number" /><br />
                    <Label>Agencia : </Label><br />
                    <Input type="number" /><br />
                    <Label>Conta: </Label><br />
                    <Input type="number" /><br />
                    <Button>Confirmar</Button>    
                </Div>
            </Body>
        );
    }
}

export default EditarBancarios;