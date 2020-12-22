import React from 'react'
import { BrowserRouter, Link, Route,Switch } from 'react-router-dom';
import Logo from '../../Assets/logo.png'
import { Home } from '../Home';
import {
    Nav,
    Img,
    A,
    DivUl,
    NavUl,
    Li
} from './Elements'


export function Header() {
    return (
        
        <header>
            <Nav>
                <A><Img src={Logo}/></A>
                <DivUl>
                    <NavUl>
                        <Li>
                             <Link to="/Home">casa</Link>   
                        </Li>
                        <Li>
                             <Link to="/Counter">counter</Link>   
                        </Li>
                        <Li>
                             <Link to="/fetch-data">Fetch</Link>   
                        </Li>   
                    </NavUl>
                </DivUl>
            </Nav>
        </header>
    )
}

