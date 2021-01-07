import React, { Component } from 'react';
import {
    Body,
    Div,
    DIV,
    Table,
    Tr,
    H1,
    Td, 
    Button
} from './Element';

export class InformacoesVendas extends Component {
    static displayName = InformacoesVendas.name;

    render() {
        return (
            <Body>
                <Div>
                    <H1>Detalhes da Venda</H1>
                    <Button>Voltar</Button>
                    <Button style={{"background-color":"#c8b900",}}>Editar</Button>
                    <DIV>
                    <div style={{"width":"50%"}} >
                        <div style={{"margin":"2.5em"}}>
                            <Table>
                                <Tr >
                                    <Td style={{"font-weight": "bolder"}}>
                                        Informações do Vendedor Responsavel
                                    </Td>
                                </Tr>
                                <Tr>
                                   <Td>Nome</Td>
                                    <Td style={{"font-weight": "bolder"}}>admin</Td>
                                </Tr>
                                <Tr>
                                   <Td>Email: </Td>
                                    <Td style={{"font-weight": "bolder"}}>admin@gmail.com</Td>
                                </Tr>
                            </Table> 
                        </div>
                        <div style={{"margin":"2.5em"}}>
                        <Table>
                                <Tr >
                                    <Td style={{"font-weight": "bolder"}}>
                                        Informações do Cliente
                                    </Td>
                                </Tr>
                                <Tr>
                                   <Td>Nome</Td>
                                    <Td style={{"font-weight": "bolder"}}>Marcell</Td>
                                </Tr>
                                <Tr>
                                   <Td>Email: </Td>
                                    <Td style={{"font-weight": "bolder"}}>Marcell@gmail.com</Td>
                                </Tr>
                                <Tr>
                                   <Td>Sexo</Td>
                                    <Td style={{"font-weight": "bolder"}}>Masculino</Td>
                                </Tr>
                                <Tr>
                                   <Td>Telefone </Td>
                                    <Td style={{"font-weight": "bolder"}}>(21)9xxxx-xxxx</Td>
                                </Tr>
                            </Table> 
                        </div>
                    </div>
                    <div style={{"width":"50%", "margin-left":"1em"}} >
                        <div style={{"margin":"2.5em"}}>
                            <Table>
                                <Tr >
                                    <Td style={{"font-weight": "bolder"}}>
                                        Informações da Venda
                                    </Td>
                                </Tr>
                                <Tr>
                                   <Td>Pagamento em Cartão</Td>
                                    <Td style={{"font-weight": "bolder"}}>Sim</Td>
                                </Tr>
                                <Tr>
                                   <Td>Fechamento</Td>
                                    <Td style={{"font-weight": "bolder"}}>04/01/2021</Td>
                                </Tr>
                                <Tr>
                                   <Td>Estagio do Pagamento</Td>
                                    <Td style={{"font-weight": "bolder"}}>Pago</Td>
                                </Tr>
                                <Tr>
                                   <Td>Valor Total </Td>
                                    <Td style={{"font-weight": "bolder"}}>5000,00</Td>
                                </Tr>
                                <Tr>
                                    <Td>Valor Pago</Td>
                                    <Td style={{"font-weight": "bolder"}}>3000,00</Td>
                                </Tr>
                            </Table> 
                        </div>
                        <div style={{"margin":"2.5em"}}>
                        <Table>
                                <Tr >
                                    <Td style={{"font-weight": "bolder"}}>
                                        Informações do Trabalho
                                    </Td>
                                </Tr>
                                <Tr>
                                   <Td>Instituição de Ensino</Td>
                                    <Td style={{"font-weight": "bolder"}}>Instituto</Td>
                                </Tr>
                                <Tr>
                                   <Td>Nome do Coordenador</Td>
                                    <Td style={{"font-weight": "bolder"}}>Fulano</Td>
                                </Tr>
                                <Tr>
                                   <Td>Curso</Td>
                                    <Td style={{"font-weight": "bolder"}}>T.I</Td>
                                </Tr>
                                <Tr>
                                    <Td>Tema</Td>
                                    <Td style={{"font-weight": "bolder"}}>Tema Test</Td>
                                </Tr>
                                <Tr>
                                   <Td>Número de Páginas</Td>
                                    <Td style={{"font-weight": "bolder"}}>50</Td>
                                </Tr>
                                <Tr>
                                   <Td>Prévia 1</Td>
                                    <Td style={{"font-weight": "bolder"}}>04/01/2021</Td>
                                </Tr>
                                <Tr>
                                    <Td>Prévia 2</Td>
                                    <Td style={{"font-weight": "bolder"}}>05/01/2021</Td>
                                </Tr>
                                <Tr>
                                    <Td>Prévia 3</Td>
                                    <Td style={{"font-weight": "bolder"}}>06/01/2021</Td>
                                </Tr>
                                <Tr>
                                    <Td>Data da Entrega</Td>
                                    <Td style={{"font-weight": "bolder"}}>07/01/2021</Td>
                                </Tr>
                                <Tr>
                                    <Td>Obs: </Td>
                                    <Td style={{"font-weight": "bolder"}}>Test obs</Td>
                                </Tr>
                            </Table> 
                        </div>
                    </div>
                    </DIV>  
                </Div>
            </Body>
        );
    }
}

export default InformacoesVendas;