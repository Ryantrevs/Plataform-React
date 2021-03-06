import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Body,
    Div,
    Label,
    Input,
    H1,
    Button
} from './Element';

export class Perfil extends Component {
    static displayName = Perfil.name;

    render() {
        return (
            <Body>
                <Div>
                    <H1>Perfil</H1>
                    <Label>Email : </Label><br />
                    <Label>Nome : </Label><br /> 
                    <Button>Mostrar Dados Bancarios</Button> 
                    <div>
                        <Label>Número do Banco : </Label><br/>
                        <Label>Nome do Banco :</Label><br/>
                        <Label>Agência : </Label><br/>
                        <Label>Conta : </Label><br/>
                        <Button>
                            <Link to="/EditarBancarios">Editar Dados Bancarios</Link>
                        </Button>
                    </div>
                    <Button>
                        <Link to="/EditarPerfil">Editar</Link>
                    </Button>    
                </Div>
                
            </Body>
        );
    }
}

export default Perfil;