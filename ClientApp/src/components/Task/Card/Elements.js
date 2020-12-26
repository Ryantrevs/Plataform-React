import styled from "styled-components";

export const Menu = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 1;
    right: -200em;
    display: flex;
    margin: 0;
    top: 0;
`
export const CardBackground = styled.div`
    margin: 0 0 0 0;
    background: #fe4a55;
    width: 70%;
    height: 100vh;
`
export const CloseDiv = styled.div`
    cursor: pointer;
    padding-left: 10px;
    color: #fff;
    font-weight: 600;
    margin:0.5em 0 0 0;
`
export const Background = styled.div`
    width: 30%;
    height: 100vh;
    opacity: 0.8;
    background: #000000;
`
export const InputTitule = styled.input`
    width: 100% !important;
    margin-top: 0.4em !important;
    border-radius: 10px !important;
`
export const AddDescribe = styled.div`
    display: block;
    background-color: #808080;
    border:solid 1px #000000;
    border-radius:8px;
    width:28.125em;
`
export const DescribeContent = styled.div`
    display:none;
`
export const DescribreText = styled.textarea`
    width: 28.125em;
    height:1em;
    padding:0.9em;
    resize:none;
    margin-top: 0.4em;
    border-radius: 10px;
`

export const DescribeP = styled.p`
    max-width:100%;
    text-overflow:ellipsis;
    padding:0.9em;
`

export const Section = styled.section`
    background-color: #fff;                 /* border radius adicionado aos filhos da CardBackgroud section */
    border-radius: 10px;
    padding: 1.5em;
    width: 31.250em;
    margin: auto;
    margin-top: 10vh;
    box-shadow: 5px 5px 15px 5px #000000;
`
export const InputData = styled.input`
    border-radius:8px;

`
export const ButtonCopiar = styled.button`
    border:none;
    border-radius:8px;
    background-color:#5aac44;
    color:#fff;
    height:3em;
    width:6em;

`
export const ButtonLixo = styled.button`
    border:none;
    border-radius:8px;
    background-color:#d50000;
    color:#000000;
    height:3em;
    width:4em;
    margin-left:0.4em;
`


