//import { Button } from 'bootstrap';
import React, { Component } from 'react';
import {
    Body,
    Div,
    Label,
    Input,
    H1,
    Select
} from './Element';

export class EditarCliente extends Component {
    static displayName = EditarCliente.name;

    render() {
        return (
            <Body>
                <Div>
                    <H1>Editar Cliente</H1>
                    <Label>Email : </Label><br />
                    <Input type="email" /><br />
                    <Label>Nome do Cliente : </Label><br />
                    <Input type="text" /><br />
                    <Label>Sexo : </Label><br/>
                    <Select>
                        <option>Masculino</option>
                        <option>Feminino</option>
                    </Select><br/>
                    <Label>Número do Cliente : </Label><br />
                    <Input type="tel" /><br />
                </Div>
            </Body>
        );
    }
}

export default EditarCliente;

