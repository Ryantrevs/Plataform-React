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
                    <H1>Editar Usuario</H1>
                    <Label>Id : </Label><br />
                    <Input type="text" /><br />
                    <Label>Email : </Label><br />
                    <Input type="email" /><br />
                    <Label>UserName : </Label><br />
                    <Input type="text" /><br />
                    <Label>Salario : </Label><br />
                    <Input type="number" /><br />
                    <Button style={{"background-color":"blue","margin-right":"0.5em"}}>Atualizar</Button>
                    <Button style={{"background-color":"gray"}}>Voltar</Button><br/>
                    <div style={{"border-bottom":"solid 1px #fff","border-top":"solid 1px #fff","margin":"1em"}}>
                        <h2 style={{"color":"#fff"}}>Niveis de Acesso : </h2><br />
                        <Button style={{"background-color":"blue","margin-bottom":"0.5em"}}>
                            <Link style={{"text-decoration":"none"}} to="/GerenciarNiveis">Gerenciar nivel de Acesso</Link>
                        </Button>
                    </div>
                    <div style={{"margin":"1em"}}>
                        <h2 style={{"color":"#fff"}}>Permissões do Usuario : </h2><br />
                        <Button style={{"background-color":"blue"}}>
                            <Link style={{"text-decoration":"none"}} to="/GerenciarPermissoes">Gerenciar Permissões</Link>
                        </Button>
                    </div>
                </Div>
            </Body>
        );
    }
}

export default EditarUsuario;

