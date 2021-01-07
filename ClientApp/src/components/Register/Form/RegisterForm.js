import React, { useState } from 'react'
import {
    RegisterForm as Form,
    FormDivRow,
    FormLabel,
    FormInput,
    FormButton
} from "./../Elements";
import { useRequest } from "./../../../Context/RequestContext"
import { useUser } from "./../../../Context/UserContext"

function RegisterForm() {
    const RequestContext = useRequest();
    const UserContext = useUser();
    
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

    function validaRegister() {

        var valid = true;
        if (pass != confirmPass) {
            setValidateConfirmPass(" Senhas precisam ser iguais!");
            valid = false;
        }
        if (!ValidaCpf(cpf)) {
            valid = false;
            //Errors = Errors + "\n CPF inválido";
        } else {
            //verifica se cpf ja existe
            let url = "Account/CheckCpfExists"
            let data= new FormData();
            data.append("cpf",cpf)
            return RequestContext.Request("post", data, url, (promise) => {
                var value = promise.data;
                if (value == true) {
                    return true;
                }else{
                    return false;
                }
            });
            
        }
        if (valid === true) {
            return true;
        } else {
            return false;
        }

    }
    async function RegisterUser(event) {
        event.preventDefault();

        setValid("Entrou");
        var data = new FormData();
        data.append("rvm.User.Name", name);
        data.append("rvm.User.Cpf", cpf);
        data.append("rvm.User.Email", email)
        data.append("rvm.User.Id", "");
        data.append("rvm.Password", pass);
        data.append("rvm.ConfirmPassword", confirmPass);
        var url = "Account/Register";

        if (validaRegister) {
            RequestContext.Request("post", data, url, (promise) => {
                var value = promise.data;
                if (value == true) {

                }
            });
        }

    }
    const [cpf, setCpf] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [redirect, setRedirect] = useState("");
    const [valid, setValid] = useState("");
    const [validateConfirmPass, setValidateConfirmPass] = useState("");
    const [validateCpf, setValidateCpf] = useState("");
    return (

        <Form id="RegisterForm" onSubmit={(event) => { RegisterUser(event) }} method="post">
            <FormDivRow>
                <FormLabel htmlFor="cpf">CPF</FormLabel>
                <FormInput value={cpf} onChange={(event) => setCpf(event.target.value)} type="text" id="cpf" placeholder="Insira CPF com ou sem - e ." required />
                <div>{validateConfirmPass}</div>
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
                <div>{validateConfirmPass}</div>
            </FormDivRow>
            <FormDivRow>
                <FormButton type="submit" id="submitRegister" >Registrar</FormButton>
            </FormDivRow>
        </Form>
    );
}
export default RegisterForm;
