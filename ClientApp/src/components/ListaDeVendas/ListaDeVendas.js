import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Body,
    Div,
    Table,
    Tr,
    H1,
    Td, 
    Button
} from './Element';

export class ListaDeVendas extends Component {
    static displayName = ListaDeVendas.name;

    render() {
        return (
            <Body>
                <Div>
                    <H1>Registro de Vendas</H1>
                    <Table>
                        <Tr >
                            <Td>
                                Email do Cliente
                            </Td>
                            <Td>
                                Vendedor Responsavel
                            </Td>
                            <Td>
                                Cartão
                            </Td>
                            <Td>
                                Fechamento
                            </Td>
                            <Td>
                                Estagio de pagamento
                            </Td>
                            <Td>
                                Valor Total
                            </Td>
                            <Td>
                                Valor Pago
                            </Td>
                            <Td>
                                Ações
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                Matheus@gmail.com
                            </Td>
                            <Td>
                                Matheus  
                            </Td>
                            <Td>
                                <input type="checkbox"/>
                            </Td>
                            <Td>
                                30/12/2020
                            </Td>
                            <Td>
                                Pago
                            </Td>
                            <Td>
                                R$ 1.000,00
                            </Td>
                            <Td>
                                R$ 1.000,00
                            </Td>
                            <Td>
                                <Button>
                                        <Link to="/EditarVendas">Editar</Link>
                                </Button>
                            </Td>
                            <Td>
                                <Button style={{background:"green"}}>Mais</Button>
                            </Td>
                            <Td>
                                <Button style={{background:"Red"}}>Deletar</Button>
                            </Td>
                        </Tr>
                    </Table>    
                </Div>
                
            </Body>
        );
    }
}

export default ListaDeVendas;