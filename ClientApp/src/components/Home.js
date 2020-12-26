//import { Button } from 'bootstrap';
import React, { Component } from 'react';
import {
  Body,
  Div,
  Label,
  Input,
  H1,
  Button,
  InputCheckbox
} from './Element';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <Body>
        <Div>
          <H1>Login</H1>
          <Label>Email : </Label><br />
          <Input type="email" /><br />
          <Label>Senha : </Label><br />
          <Input type="password" /><br />
          <Label>Lembrar : </Label>
          <InputCheckbox type="checkbox" /><br />
          <Button>Login</Button>
        </Div>
      </Body>
    );
  }
}
