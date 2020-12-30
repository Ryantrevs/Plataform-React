import React, { Component } from 'react';
import {
    Body,
    Div,
    Label,
    Input,
    H1,
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
                </Div>
            </Body>
        );
    }
}

export default Perfil;