import React from 'react'
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
export function Principal() {
    return (
        <PrincipalSection>
            <Section>
                <Menu>
                    <TiThMenuOutline size={28} color="#fff"/><br/>
                    <ButtonTools>+Lista</ButtonTools>
                    <ButtonTools>+Escopo</ButtonTools>
                    <ButtonTools>+Tarefa</ButtonTools>
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

