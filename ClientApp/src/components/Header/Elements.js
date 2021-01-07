import styled from 'styled-components'
export const Nav = styled.nav`
    background:#242424;
    display:flex;
    align-items:center;
    justify-content:space-between;
    height: 5em;
`
export const Img = styled.img`
    height: 3em;
    width: 5em;
    margin-left: 1.5em;
`
export const A = styled.a`
    white-space: normal;
    text-align: center;
    word-break: break-all;
    text-decoration: none;
    
`
export const DivUl = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`
export const NavUl = styled.ul`
    list-style: none;
    display:flex;
`
export const Li = styled.li`
    margin:0.5em 0.5em 0 0;
    font-size:14pt;
    text-decoration: none;
`
export const Button = styled.button`
    border:none;
    border-radius:8px;
    background-color: #fe4a55;
    height: 2em;
    transition: all .2s;
    
    &:hover {
    background-color: #ff8082;
    }
`


