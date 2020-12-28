import React from 'react';
import {
    Body,
    Div,
    Label,
    Input,
    H1,
    Button,
    InputCheckbox
} from "./../Elements"
function LoginForm() {

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
export default LoginForm;