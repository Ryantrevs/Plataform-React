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
} from './Elements';

export class Vendas extends Component {
    static displayName = Vendas.name;

    render() {
        return (
            <Body>
                <Div>
                    <H1>Cadastrar Vendas</H1>
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
                    <Label>Valor Total : </Label><br />
                    <Input type="number" /><br />
                    <Label>Valor Pago : </Label><br />
                    <Input type="number" /><br />
                    <Label>Instituição de Ensino : </Label><br />
                    <Input type="text" /><br />
                    <Label>Orientador : </Label><br />
                    <Input type="text" /><br />
                    <Label>Curso : </Label><br />
                    <Input type="text" /><br />
                    <Label>Tema : </Label><br />
                    <Input type="text" /><br />
                    <Label>Número de Páginas : </Label><br />
                    <Input type="number" /><br />
                    <Label>Prévia 1 : </Label><br />
                    <Input type="date" /><br />
                    <Label>Prévia 2 : </Label><br />
                    <Input type="date" /><br />
                    <Label>Prévia 3 : </Label><br />
                    <Input type="date" /><br />
                    <Label>Data da Entrega : </Label><br />
                    <Input type="date" /><br />
                    <Label>Observações : </Label><br />
                    <Input type="text" /><br />
                </Div>
            </Body>
        );
    }
}

export default Vendas;

