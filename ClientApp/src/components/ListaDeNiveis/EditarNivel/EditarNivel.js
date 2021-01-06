import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Body,
    Div,
    Label,
    Input,
    Button,
    H1,
} from './Elements';

export class EditarUsuario extends Component {
    static displayName = EditarUsuario.name;

    render() {
        return (
            <Body>
                <Div>
                    <H1>Editar Nivel de Acesso</H1>
                    <Label>Id : </Label><br />
                    <Input type="text" /><br />
                    <Label>Nome nivel de Acesso: </Label><br />
                    <Input type="text" /><br />
                    <Button style={{"background-color":"blue","margin-right":"0.5em"}}>Atualizar</Button>
                    <Button style={{"background-color":"gray"}}>Voltar</Button><br/>
                    <div style={{"border-bottom":"solid 1px #fff","border-top":"solid 1px #fff","margin":"1em"}}>
                        <h2 style={{"color":"#fff"}}>Usuarios com esse nivel de acesso : </h2><br />
                        <Button style={{"background-color":"blue","margin-bottom":"0.5em"}}>
                            <Link to="/AdicionarRemover">Adicionar/Remover Usuario</Link>
                        </Button>
                    </div>
                </Div>
            </Body>
        );
    }
}

export default EditarUsuario;

