import React,{useState,useEffect} from 'react';
import {
    Body,
    Form,
    Label,
    Input,
    H1,
    Button,
    InputCheckbox
} from "./../Elements"
import {useRequest} from "../../../context/RequestContext" 
import {useUser} from "../../../context/UserContext"
function LoginForm() {
    const Request = useRequest().Request;
    var localUserContext = useUser();
    console.log(localUserContext);
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [rememberMe,setRememberMe] = useState(false);
    const [error,setError] = useState("");
    
    
    function LogInUser(event){
        event.preventDefault();
        let data = new FormData();
        data.append("livm.Email",email);
        data.append("livm.Password",pass);
        data.append("livm.RememberMe",rememberMe);
        Request("post",data,"Account/LogIn",(promise)=>{
            if(promise.data){ 
                localUserContext.setIsLogged(promise.data);
                Request("post","","Account/getCurrentUser",(promise2)=>{
                    if(promise2.data!=null){                                               
                        localUserContext.setUser(promise2.data)
                    }
                })
            }
        });
    }
    
    

    return (
        <Body>
            <Form onSubmit={event=>LogInUser(event)}>
                <H1>Login</H1>
                <span>{error}</span>
                <Label>Email : </Label><br />
                <Input type="email" onChange={(event)=>setEmail(event.target.value) }/><br />
                <Label>Senha : </Label><br />
                <Input type="password" onChange={(event)=>setPass(event.target.value)} /><br />
                {/* <Label>Lembrar : </Label> */}
                {/* <InputCheckbox type="checkbox" onClick={event=>{setRememberMe(!rememberMe)}} /><br /> */}
                <Button >Login</Button>
            </Form>
        </Body>
    );


}
export default LoginForm;


    
    
