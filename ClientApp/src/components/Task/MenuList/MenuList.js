import React from 'react'
import {
    ConfigurationSection,
    ManageUsersSection,
    ExcludeSection,
    Background,
    Section,
    Input,
    Select,
    Button,
    Main,
    Body
} from './Elements'


export function MenuList() {
    
    return (
        <Body>
            <Main>
                <Section>
                    <ConfigurationSection>
                        <Input type="text" />
                    </ConfigurationSection>
                    <ManageUsersSection>
                        <label>Se deseja Adicionar um na lista, aperte no botão abaixo</label>
                        <Button type="button">+</Button>
                    </ManageUsersSection>
                    <ExcludeSection>
                        <label>Usuários que estão na lista</label>
                        <Select name="Usuários que estão incluídos nessa lista">
                        </Select>
                        <Button type="button">Excluir</Button>
                    </ExcludeSection>
                </Section>
            </Main>
            <Background>
                
            </Background>
        </Body>

    )
}

