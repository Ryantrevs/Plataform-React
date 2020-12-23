import React, { useState } from "react"
import axios from "axios";
import { Redirect } from "react-router-dom";

function Register() {
  const [cpf, setCpf] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [redirect,setRedirect] = useState("");

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

  async function Post(url,data){
    var resp = await axios.post(url,{
      User:user,
      Pass:pass
    }).then(function(response){
      //redirect to main page
      return setRedirect("/");
    })
  }

  async function RegisterUser(event) {
    event.preventDefault();
    var user = { User: { Id:"",Nome:name,Cpf:cpf}};
    var url = "/Account/Register";
        
  }
  async function test() {
    console.log("click")
    return setRedirect("/");
  }

  return (
    
    <body>      
      <button onClick={test}>Teste</button>
      <div class="container bg-dark">
        <div class="row text-white">
          <div class="col-2"></div>
          <div class="col-8 h1 mt-4 mb-4">Cadastrar</div>
        </div>
        <div class="row text-white">
          <div class="col-2"></div>
          <form id="RegisterForm" class="col-8 mb-4 mt-4" onSubmit={(event) => { RegisterUser(event) }}>
            <div class="form-group">
              <label for="cpf">CPF</label>
              <input value={cpf} onChange={(event)=>setCpf(event.target.value)} type="text" class="form-control" id="cpf" placeholder="Insira CPF com ou sem - e ." required />
            </div>
            <div class="form-group">
              <label for="nome">Nome</label>
              <input value={name} onChange={(event)=>setName(event.target.value)} type="text" class="form-control" id="nome" required />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" value={email} onChange={(event)=>setEmail(event.target.value)} onfocus="limpaCheckEmail(this.id)" onblur="verificaEmail(this.id)" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Digite Email" required />
              <div id="validEmailCheck" class="text-danger"></div>
            </div>
            <div class="form-group">
              <label for="pwd">Senha</label>
              <input value={pass} onChange={(event)=>setPass(event.target.value)} type="password" class="form-control" id="pwd" required />
            </div>
            <div class="form-group">
              <label for="pwd">Confirmar senha</label>
              <input value={confirmPass} onChange={(event)=>setConfirmPass(event.target.value)} type="password" class="form-control" id="pwdConfirm" required />
              <div class="valid-feedback text-danger" id="validPass"></div>
            </div>

            <button type="submit" class="btn btn-primary" onclick="validaRegister()" id="submitRegister" >Registrar</button>
          </form>
        </div>
      </div>
    </body>
  );
}

export default Register;