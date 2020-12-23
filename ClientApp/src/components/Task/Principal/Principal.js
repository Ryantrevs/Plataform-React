import React,{useState, useEffect} from 'react'
import {  
    PrincipalSection,
    Section,
    Menu,
    NavMenu,
    MenuItem,
    Item,
    Configure,
    ButtonConfigure,
    ButtonTools
} from './Elements'
import { TiThMenuOutline } from "react-icons/ti";

export function Principal({Request}) {
    const [TaskList, setTaskList] = useState([]);

    useEffect(()=>{
        Request("get",{},"/Task/Organization")
    })

    return (
        <PrincipalSection>
            <Section>
                <Menu>
                    <TiThMenuOutline size={28} color="#fff"/><br/>
                    <ButtonTools>+Lista</ButtonTools>
                    <ButtonTools>+Escopo</ButtonTools>
                    <ButtonTools 
                    onClick={(event)=>{
                        event.preventDefault();
                        Request("teste",{Nome:"Patrick"},"abc")
                    }}>
                        +Tarefa</ButtonTools>
                    <NavMenu>

                    </NavMenu>
                    <MenuItem>
                        <Item></Item>
                        <Configure>
                            <ButtonConfigure>

                            </ButtonConfigure>
                        </Configure>
                    </MenuItem>
                </Menu>
            </Section>
        </PrincipalSection>
    )
}

