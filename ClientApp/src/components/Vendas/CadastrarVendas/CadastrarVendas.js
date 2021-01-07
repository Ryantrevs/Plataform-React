import React, { useState } from 'react';
import {
    Body,
    Form,
    Label,
    Input,
    InputRadio,
    H1,
    Select,
    Button
} from './Elements';
import { useRequest } from "./../../../context/RequestContext"

export function CadastrarVendas() {
    var Request = useRequest().Request;
    function verificaCliente() {

    }
    function updateFields(field, value) {
        setVenda({ ...venda, [field]: value })
        console.log(venda)
    }
    const [venda, setVenda] = useState({})

    async function Cadastrar() {
        console.log("entrou")
        var obj = new FormData();
        obj.append("");
    }



    return (
        <Body>
            <Form onSubmit={Cadastrar}>
                <H1>Cadastrar Vendas</H1>
                <Label>Email : </Label><br />
                <Input type="email" onChange={e => { e.preventDefault(); updateFields("email", e.target.value) }} value={venda['email']} required/><br />
                <Label>Nome do Cliente : </Label><br />
                <Input type="text" onChange={e => { e.preventDefault(); updateFields("nomeCliente", e.target.value) }} value={venda['nomeCliente']} required/><br />
                <Label>Sexo : </Label><br />
                <Select onChange={e => { e.preventDefault(); updateFields("sexo", e.target.value) }} value={venda['sexo']} required>
                    <option>Masculino</option>
                    <option>Feminino</option>
                </Select><br />
                <Label>Número do Cliente : </Label><br />
                <Input type="tel" onChange={e => { e.preventDefault(); updateFields("nomeCliente", e.target.value) }} value={venda['nomeCliente']} required/><br />
                <Label>Insira o número colocando o DDD </Label><br />
                <Label>Pagamento com Cartão de crédito : </Label>
                <Label> Sim  </Label>
                <InputRadio type="radio" name="pagamento" required/>
                <Label>Não  </Label>
                <InputRadio type="radio" name="pagamento" /><br />
                <Label>Data do fechamento : </Label><br />
                <Input type="date" /><br />
                <Label>Estagio do Pagamento : </Label>
                <Select>
                    <option>Pago</option>
                    <option>Não Pago</option>
                </Select><br />
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
                <Button>Cadastrar</Button>
            </Form>
        </Body>
    );
}


export default CadastrarVendas;

