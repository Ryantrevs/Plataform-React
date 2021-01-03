import React from 'react';
import LoginForm from "./Form/Index"
import { useUser } from "./../../context/UserContext"


function Login() {
    const User = JSON.stringify(useUser().User);
    return (
        <div>            
            <LoginForm />
        </div>
    );
}

export default Login;