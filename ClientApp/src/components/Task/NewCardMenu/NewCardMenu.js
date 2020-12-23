import React from 'react'
import { 
    Section,
    NewCardSection,
    Header,
    Main,
    Background
} from './Elements'
import { MdCancel } from "react-icons/md";

export function NewCardMenu() {
    return (
        <Section>
            <NewCardSection>
                <Header>
                    <h2>Novo Card</h2>
                    <MdCancel size={32}/>
                </Header>
                <Main>
                    <label>Na Lista:
                        <select>
                            
                        </select>
                    </label>
                    <label>
                        Titulo Card
                        <input type="text"/>
                    </label>
                    <label>
                        Descricão do Card
                        <textarea placeholder="Descrição"></textarea>
                    </label>
                    <button type="submit">Salvar</button>
                </Main>
            </NewCardSection>
            <Background/>
        </Section>
    )
}

