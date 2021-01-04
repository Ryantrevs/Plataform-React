//import { Button } from 'bootstrap';
import React, { Component } from 'react';
import {
    Body,
    Div,
    Label,
    Input,
    H1,
    H3,
    Button,
    Select,
    InputCheck
} from './Element';

export class EditarVendas extends Component {
    static displayName = EditarVendas.name;

    render() {
        return (
            <Body>
                <Div>
                    <div style={{"padding":"1em"}}>
                        <H1>Editar Vendas</H1>
                        <H3>Venda de Cliente</H3>
                        <Button style={{"background-color":"gray", "color":"white"}}>Voltar</Button><br/>
                        <H3>Editar Vendas</H3><br/>
                        <InputCheck type="checkbox"/><Label>Cartão</Label><br/>
                        <Label>Fechamento : </Label><br />
                        <Input type="date" /><br />
                        <Label>Estagio do Pagamento : </Label><br/>
                        <Select>
                            <option>Pago</option>
                            <option>Não Pago</option>
                        </Select><br/>
                        <Label>Valor Total : </Label><br/>
                        <Input type="number" /><br />
                        <Label>Valor Pago : </Label><br/>
                        <Input type="number" /><br />
                    </div>
                    <div style={{"margin-top":"5.5em"}}>
                        <H3>Editar Trabalho</H3><br/>
                        <Label>Instituição de Ensino : </Label><br />
                        <Input type="text" /><br />
                        <Label>Nome do Orientador : </Label><br />
                        <Input type="text" /><br />
                        <Label>Curso : </Label><br />
                        <Input type="text" /><br />
                        <Label>Tema : </Label><br />
                        <Input type="text" /><br />
                        <Label>Número de Páginas : </Label><br />
                        <Input type="number" /><br />
                        <Label>Prévia 1: </Label><br />
                        <Input type="date" /><br />
                        <Label>Prévia 2: </Label><br />
                        <Input type="date" /><br />
                        <Label>Prévia 3: </Label><br />
                        <Input type="date" /><br />
                        <Label>Observações : </Label><br />
                        <Input type="text" /><br />
                    </div>
                    
                </Div>
            </Body>
        );
    }
}

export default EditarVendas;

