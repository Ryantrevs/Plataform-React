//import { Button } from 'bootstrap';
import React, { Component } from 'react';
import {
    Body,
    Div,
    Label,
    Input,
    InputRadio,
    H1,
    Select
} from './Element';

export class EditarVendas extends Component {
    static displayName = EditarVendas.name;

    render() {
        return (
            <Body>
                <Div>
                    <H1>Editar Vendas</H1>
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
                    <Label>Insira o número colocando o DDD </Label><br />
                    <Label>Pagamento com Cartão de crédito : </Label>
                    <Label> Sim  </Label>
                    <InputRadio type="radio" name="pagamento" />
                    <Label>Não  </Label>
                    <InputRadio type="radio" name="pagamento" /><br />
                    <Label>Data do fechamento : </Label><br />
                    <Input type="date" /><br />
                    <Label>Estagio do Pagamento : </Label>
                    <Select>
                        <option>Pago</option>
                        <option>Não Pago</option>
                    </Select><br/>
                    <Label>Valor Total : </Label>
                    <Input type="number" /><br />
                    <Label>Valor Pago : </Label>
                    <Input type="number" /><br />
                    
                </Div>
            </Body>
        );
    }
}

export default EditarVendas;

