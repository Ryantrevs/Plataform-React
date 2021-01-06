import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../Assets/logo.png'
import {
    Nav,
    Img,
    A,
    DivUl,
    NavUl,
    Li,
    Button
} from './Elements'


export function Header() {
    return (

        <header>
            <Nav>
                <A><Img src={Logo} /></A>
                <DivUl>
                    <NavUl>
                        <Li>
                            <Button>
                                <Link style={{"text-decoration":"none"}} to="/ListaDeNiveis">Lista de Niveis</Link>
                            </Button>
                        </Li>
                        <Li>
                            <Button>
                                <Link style={{"text-decoration":"none"}} to="/ListaDeUsuarios">Lista de Usuarios</Link>
                            </Button>
                        </Li>
                        <Li>
                            <Button>
                                <Link style={{"text-decoration":"none"}} to="/vendas">Cadastrar Vendas</Link>
                            </Button>
                        </Li>
                        <Li>
                            <Button>
                                <Link style={{"text-decoration":"none"}} to="/ListaDeClientes">Lista de Clientes</Link>
                            </Button>
                        </Li>
                        <Li>
                            <Button>
                                <Link style={{"text-decoration":"none"}} to="/ListaDeVendas">Lista de Vendas</Link>
                            </Button>
                        </Li>
                        <Li>
                            <Button>
                                <Link style={{"text-decoration":"none"}} to="/div">Tarefas</Link>
                            </Button>
                        </Li>
                        <Li>
                            <Button>
                                <Link style={{"text-decoration":"none"}} to="/">Home</Link>
                            </Button>
                        </Li>
                        {/* <Li>
                            <Link style={{"text-decoration":"none"}} to="/Counter">counter</Link>
                        </Li>
                        <Li>
                             <Link style={{"text-decoration":"none"}} to="/fetch-data">Fetch</Link>   
                        </Li> */}
                        <Li>
                            <Button>
                                <Link style={{"text-decoration":"none"}} to="/Perfil">Perfil</Link>
                            </Button>  
                        </Li> 
                        <Li>
                            <Button>
                                <Link style={{"text-decoration":"none"}} to="/Register">Registrar-se</Link>
                            </Button>   
                        </Li>   
                    </NavUl>
                </DivUl>
            </Nav>
        </header>
    )
}

