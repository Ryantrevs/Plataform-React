import styled from 'styled-components'

export const Section = styled.div`
    background: #fe4a55;
    position: absolute;
    height: 100%; /*Altura do Menu de configuração*/
    width: 100%;
    z-index: 1;
    left: -200em;
    display: flex;
    top: 0;
`
export const Main = styled.main`
    background-color: #fff;                 
    border-radius: 10px;
    padding: 0.3em;
    width: 40%;
    margin:1em;
    height: 100%;
    text-align:center;
    box-shadow: 1px 1px 15px 1px #000000;
`
export const ConfigurationSection = styled.section`
    display:flex;
    border-bottom: solid 1px #e5e5e5;
    margin-top:0.5em;
    display:flex;
    text-align:center;
`
export const ManageUsersSection = styled.section`
    display:flex;
    flex-wrap: wrap;
    text-align:center;
    margin: auto;
    width:100%;
`
export const ExcludeSection = styled.section`
    position:absolute;
    display:flex;
    text-align:center;
    justify-content:space-around;
`
export const Background = styled.section`
    width: 60%;
    opacity: 0.8;
    background: #000000;
`

