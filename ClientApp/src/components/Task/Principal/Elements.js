import styled from 'styled-components'

export const PrincipalSection = styled.main`
    width: 100%;
    display: flex;
    margin-top: 5vh;
    margin-bottom: 10vh;
    flex-direction: row;
`

export const Section = styled.section`
    width: 310px;
    background-color: #242424;
`
export const Menu = styled.div`
    background-color: #242424;
    height: 700%;
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