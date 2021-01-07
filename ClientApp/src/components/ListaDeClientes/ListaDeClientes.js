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

export class ListaDeClientes extends Component {
    static displayName = ListaDeClientes.name;

    render() {
        return (
            <Body>
                <Div>
                    <H1>Clientes</H1>
                    <Table>
                        <Tr >
                            <Td>
                                Nome
                            </Td>
                            <Td>
                                Sexo
                            </Td>
                            <Td>
                                Email
                            </Td>
                            <Td>
                                Telefone
                            </Td>
                            <Td>
                                
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                Matheus
                            </Td>
                            <Td>
                                Masculino
                            </Td>
                            <Td>
                                Matheus@gmail.com
                            </Td>
                            <Td>
                                (21)9xxxx-xxxx
                            </Td>
                            <Td>
                                <Button>
                                    <Link to="/EditarCliente">Editar</Link>
                                </Button>
                            </Td>
                        </Tr>
                    </Table>    
                </Div>
                
            </Body>
        );
    }
}

export default ListaDeClientes;