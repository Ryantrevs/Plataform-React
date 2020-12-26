import React from 'react'
import {
    Section,
    NewCardSection,
    Header,
    Main,
    Background,
    Select,
    Input, 
    Textarea,
    Button
} from './Elements'
import { MdCancel } from "react-icons/md";

export function NewCardMenu() {
    return (
        <Section>
            <NewCardSection>
                <Header>
                    <h2>Novo Card</h2>
                    <MdCancel size={32} />
                </Header>
                <Main>
                    <label>Na Lista:  </label>
                    <Select>
                    </Select><br/>
                    <label>
                        Titulo Card
                    </label><br/>
                    <Input type="text" />
                    <label>
                        Descricão do Card
                    </label>
                    <Textarea placeholder="Descrição"></Textarea><br/>
                    <Button type="submit">Salvar</Button>
                </Main>
            </NewCardSection>
            <Background />
        </Section>
    )
}

