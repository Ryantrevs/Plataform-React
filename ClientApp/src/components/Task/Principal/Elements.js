import styled from 'styled-components'

export const PrincipalSection = styled.main`
    width: 100%;
    height: 100vh;
    background-color:#fe4a55;
    display: flex;
    flex-direction: row;
    display:flex;
    z-index:1;
`

export const Section = styled.section`
    width: 310px;
    margin:2em 0 0 0;
    background-color: #fe4a55;
`
export const Menu = styled.div`
    background-color: #242424;
    height: 70vh;
    display: block;
    transition: all .2s linear;
    border: 1px solid;
    overflow-y: scroll;
    overflow-x: hidden;
`
export const NavMenu = styled.nav`
    width: 100%;
    top: 60px;
`
export const MenuItem = styled.a`
    text-decoration: none;
`

export const Item = styled.div`
    background-color: #fff;
    padding: 20px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12pt;
    transition: all .2s linear;
    color: #242424;
    border-bottom: 2px solid #242424;
    width:100%;
    cursor:pointer;
`

export const Configure = styled.div`
    width: 0%;
    font-family: Arial, Helvetica, sans-serif;  /*config "escondido" só aparece quando passa o mouse por cima*/
    font-size: 0pt;
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    transition: all .2s linear;
`
export const ButtonConfigure = styled.button`
    font: #fff;
    color: #fff;
    background:#000000;
    border:none;
`
export const ButtonTools = styled.button`
    background-color: #fff;  
    color: #242424;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    width: 5em;
    transition: all .2s linear;
    margin:0.5em 0 0.3em 0.7em;
`
export const TaskMenu = styled.section`
    margin-left: 10px !important;
    display: -webkit-box;
    flex-direction:row;
    align-content: center;
    transition: 0.5s;
    overflow: auto;
    margin: auto;
    height: 38em;
    width: 70%;
`
export const ScopeList = styled.div`
    border-radius: 10px;
    text-align: center;
    margin-top: 1em !important;
    padding: 20px;
    width: 18em;
    height: 90%;
    box-shadow: 0 1px 4px 0 rgba(21, 27, 38, 0.08);
    margin: 1em;
    overflow-y: scroll;
    overflow-x: hidden;
`
export const Card = styled.div`
    background: #f6f6f6;
    width:15em;
    height:10em;
    margin: 0.25em 0 0 0;
    border-radius: 10px;
`
export const CardTitle = styled.h3`
    color:red;
    margin:1em 0 0 0;
`