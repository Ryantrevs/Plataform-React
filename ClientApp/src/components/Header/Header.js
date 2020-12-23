﻿import React from 'react'
import { Link} from 'react-router-dom';
import Logo from '../../Assets/logo.png'
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
                            <Link to="/div">lista</Link>
                        </Li>
                        <Li>
                             <Link to="/">casa</Link>   
                        </Li>
                        <Li>
                             <Link to="/Counter">counter</Link>   
                        </Li>
                        <Li>
                             <Link to="/fetch-data">Fetch</Link>   
                        </Li>
                        <Li>
                             <Link to="/Register">Registrar-se</Link>   
                        </Li>   
                    </NavUl>
                </DivUl>
            </Nav>
        </header>
    )
}

