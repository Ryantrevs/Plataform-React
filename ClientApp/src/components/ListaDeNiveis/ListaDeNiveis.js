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

export class ListaDeNiveis extends Component {
    static displayName = ListaDeNiveis.name;

    render() {
        return (
            <Body>
                <Div>
                    <H1>Lista de Niveis</H1>
                    <Button style={{"background-color":"blue"}}>Novo Nivel</Button>
                    <Table>
                        <Tr >
                            <Td>
                                Id
                            </Td>
                            <Td>
                                Nome do Nivel
                            </Td>
                            <Td>
                                Ações
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                xxxxxxxxxx
                            </Td>
                            <Td>
                                Admin
                            </Td>
                            <Td>
                                <Button>
                                    <Link style={{"text-decoration":"none"}} to="/EditarNivel">Editar</Link>
                                </Button>
                            </Td>
                            <Td>
                                <Button style={{background:"Red"}}>Deletar</Button>
                            </Td>
                        </Tr>
                        <Tr>
                            <Td>
                                xxxxxxxxxx
                            </Td>
                            <Td>
                                User
                            </Td>
                            <Td>
                                <Button>
                                    <Link style={{"text-decoration":"none"}} to="/EditarNiveis">Editar</Link>
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

export default ListaDeNiveis;