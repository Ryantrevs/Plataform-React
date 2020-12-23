import React from 'react'
import { Section } from '../Card/Elements'
import { 
    ConfigurationSection,
    ManageUsersSection, 
    ExcludeSection,
    Background
} from './Elements'

export function MenuList() {
    return (
        <Section>
            <ConfigurationSection>
                <input type="text"/>
            </ConfigurationSection>
            <ManageUsersSection>
                <label>Usuários que estão na lista</label>
                <select name="Usuários que estão incluídos nessa lista">
                    
                </select>
                <button type="button">Adicionar</button>
                <button type="button">Excluir</button>
            </ManageUsersSection>
            <ExcludeSection>
                <button type="button">Excluir Lista</button>
            </ExcludeSection>
            <Background/>
        </Section>
    )
}

