import styled from "styled-components"

export const PrincipalSection = styled.div`
 display:flex;
 justify-content:center;
 width:100%;
 min-height:10em;
 height:100%;
 background-color:#c4002c;
`

export const RegisterForm = styled.form`
    background-color:  #999999;
    flex:1 1 250px;
    max-width:70%;
    margin:2em;
    border-radius:1em;
    display:flex;
    flex-wrap:wrap;           
    justify-content: center;
`

export const FormDivRow = styled.div`
    margin:0.5em;
    flex-shrink:1;
    flex-basis:80%;
    display:flex;
    flex-wrap:wrap;
    align-self:center;
    width:90%; 
    justify-content:center;   
`
export const FormLabel = styled.label`    
    flex:1 1 70%;
    max-width:70%;
`
export const FormInput = styled.input`    
    flex:1 1 70%;
    max-width:70%;
`

export const formButton = styled.button`
    align-self:flex-start;
    font-size: 1em;
    color:red;    
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid red;
    border-radius: 3px;
`
