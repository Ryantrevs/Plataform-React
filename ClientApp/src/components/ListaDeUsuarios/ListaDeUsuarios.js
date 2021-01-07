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
} from './Elements';

export class ListaDeUsuarios extends Component {
    static displayName = ListaDeUsuarios.name;

    render() {
        return (
            <Body>
                <Div>
                    <H1>Lista de Usuarios</H1>
                    <Button style={{background:"blue"}}>Novo Usuario</Button>
                    <Table>
                        <Tr >
                            <Td>
                                Nome
                            </Td>
                            <Td>
                                Email
                            </Td>
                            <Td>
                                Conta Confirmada
                            </Td>
                            <Td>
                                Id
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                Matheus  
                            </Td>
                            <Td>
                                Matheus@gmail.com 
                            </Td>
                            <Td>
                                Sim
                            </Td>
                            <Td>
                                xxxxxxxxxxxxxxx
                            </Td>
                            <Td>
                                <Button>
                                    <Link style={{"text-decoration":"none"}} to="/EditarUsuario">Editar</Link>
                                </Button>
                            </Td>
                            <Td>
                                <Button style={{background:"green"}}>
                                    <Link style={{"text-decoration":"none"}} to="/">Dados Bancarios</Link>
                                </Button>
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

export default ListaDeUsuarios;