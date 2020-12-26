import React, { useState } from "react"
import axios from "axios";
import { Redirect } from "react-router-dom";
import RegisterForm from "./Form/index";
import {
  PrincipalSection
} from "./Elements";



function Register() {
  const [test, setTest] = useState("");
  const [PostTest, setPostTest] = useState("");

  async function Post(url, myData) {
    //var resp = await axios.post(url,data,{ headers: { "Content-Type": 'text/plain' }});
    myData = JSON.stringify(myData);
    var resp = await axios(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      data: myData,
    })
    return resp.data;

  }

  async function PostTesta() {
    //Request("post",{Id:ActiveList},"/Task/GetTasks",function(data))
    var url = "/Account/test"
    var var1="aaa"
    var resp = await axios.post(url,
      {
        var1:var1
      }
    ).then(t => {

      console.log(t.data);
      setPostTest(t.data);
    })

  }
  async function testa() {
    var resp = await axios.get("Account/test");
    setTest(resp.data);
  }
  return (
    <PrincipalSection>
      <button onClick={testa}>Teste</button>
      {test}
      <button onClick={PostTesta}>Teste com Post</button>
      {PostTest}
      <RegisterForm Post={Post} />
    </PrincipalSection>
  );
}

export default Register;