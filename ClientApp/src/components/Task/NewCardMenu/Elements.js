import styled from 'styled-components'

export const Section = styled.section`
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 1;
    display: flex;
    margin: 0;
    top: 0;
    left: ${t=>(!t.isVisible ? `-200em`: `0em`)}
`
export const NewCardSection = styled.div`
    background: #fe4a55;
    width: 40%;
    height: 100%;
`
export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #000000;
    margin: 1.5em 1em 1em 1em;
    padding-bottom: 1em;
`
export const Main = styled.div`
    background-color: #fff;                         /*Criado a estilização da parte de preencher o cartão*/
    border-radius: 10px;
    padding: 1.5em;
    width: 20em;
    height: 18em;
    margin: auto;
    margin-top: 10vh;
    box-shadow: 5px 5px 15px 5px #000000;
`
export const Background = styled.section`
    width: 60%;
    opacity: 0.8;
    background: #000000;
`
export const Select = styled.select`
    border-radius:8px;
`
export const Input = styled.input`
    border-radius:8px;
    width:100%;
`
export const Textarea = styled.textarea`
    border-radius:8px;
    resize:none;
    width:100%;
`
export const Button = styled.button`
    border:none;
    border-radius:8px;
    background-color: #fe4a55;
    color:#fff;
    width:5em;
`