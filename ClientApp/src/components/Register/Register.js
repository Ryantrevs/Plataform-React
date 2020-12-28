import React, { useState } from "react"
import axios from "axios";
import { Redirect } from "react-router-dom";
import RegisterForm from "./Form/index";
import {
  PrincipalSection
} from "./Elements";
//import RequestContext from "./../RequestContext"
import {useRequest} from "./../RequestContext"

function Register() {
  
  return (
    <PrincipalSection>      
      <RegisterForm />
    </PrincipalSection>
  );
}

export default Register;