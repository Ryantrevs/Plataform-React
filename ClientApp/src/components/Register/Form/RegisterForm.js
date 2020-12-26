import React, { useState } from 'react'
import {
    RegisterForm as Form,
    FormDivRow,
    FormLabel,
    FormInput
} from "../Elements";

function RegisterForm({Post}) {

    async function RegisterUser(event) {
        event.preventDefault();
        setValid("Entrou")
        var obj1 = {
            rvm: {
                User: {
                    Id: "", Nome: name, Cpf: cpf
                },
                Password: pass,
                ConfirmPassword: confirmPass
            },
            test:"value"
        };
        var obj={
            "test":"value"
        }
        console.log(obj)
        var url = "Account/test";
        var result = await Post(url, obj);
        alert(result.data);
    }

    const [cpf, setCpf] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [redirect, setRedirect] = useState("");
    const [valid, setValid] = useState("");

    function ValidaCpf(_cpf) {
        cpf = _cpf.replace(/\D/g, '');
        if (cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)) return false;
        var result = true;
        [9, 10].forEach(function (j) {
            var soma = 0, r;
            cpf.split(/(?=)/).splice(0, j).forEach(function (e, i) {
                soma += parseInt(e) * ((j + 2) - (i + 1));
            });
            r = soma % 11;
            r = (r < 2) ? 0 : 11 - r;
            if (r != cpf.substring(j, j + 1)) result = false;
        });
        return result;
    }
    

    return (
        <Form id="RegisterForm" onSubmit={(event) => { RegisterUser(event) }} method="post">
            <FormDivRow>
                <FormLabel htmlFor="cpf">CPF</FormLabel>
                <FormInput value={cpf} onChange={(event) => setCpf(event.target.value)} type="text" id="cpf" placeholder="Insira CPF com ou sem - e ." required />
            </FormDivRow>
            <FormDivRow>
                <FormLabel htmlFor="nome">Nome</FormLabel>
                <FormInput value={name} onChange={(event) => setName(event.target.value)} type="text" id="nome" required />
            </FormDivRow>
            <FormDivRow>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput type="email" value={email} onChange={(event) => setEmail(event.target.value)} onfocus="limpaCheckEmail(this.id)" onblur="verificaEmail(this.id)" id="email" aria-describedby="emailHelp" placeholder="Digite Email" required />
                <div id="validEmailCheck" className="text-danger"></div>
            </FormDivRow>
            <FormDivRow >
                <FormLabel htmlFor="pwd">Senha</FormLabel>
                <FormInput value={pass} onChange={(event) => setPass(event.target.value)} type="password" id="pwd" required />
            </FormDivRow>
            <FormDivRow >
                <FormLabel htmlFor="pwd">Confirmar senha</FormLabel>
                <FormInput value={confirmPass} onChange={(event) => setConfirmPass(event.target.value)} type="password" id="pwdConfirm" required />
                <div id="validPass">{valid}</div>
            </FormDivRow>
            <FormDivRow>
                <button type="submit" id="submitRegister" >Registrar</button>                
            </FormDivRow>
        </Form>

    );
}

export default RegisterForm;
