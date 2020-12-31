import React,{useState} from 'react'
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

export function NewCardMenu({visible,Scope}) {
    const [cardState,setCardState] = useState({
        title:"",
        describe:"",
        percentage:0,
        conclude:false
    })
    return (
        <Section visible={visible}>
            <NewCardSection>
                <Header>
                    <h2>Novo Card</h2>
                    <MdCancel size={32} />
                </Header>
                <Main>
                    <label>Na Lista:  </label>
                    <Select>
                        {Scope.map((sco,index)=>(
                            <option key={index} value={sco.id}>{sco.titulo}</option>
                        ))}
                    </Select><br/>
                    <label>
                        Titulo Card
                    </label><br/>
                    <Input type="text" 
                    value={cardState.title}
                    onChange={(event)=>{setCardState({title:event.target.value});
                    }}/>
                    <label>
                        Descricão do Card
                    </label>
                    <Textarea 
                    placeholder="Descrição"
                    value={cardState.describe}
                    onChange={(event)=>{
                        setCardState({describe:event.target.value})
                    }}></Textarea><br/>
                    <Button type="submit">Salvar</Button>
                </Main>
            </NewCardSection>
            <Background />
        </Section>
    )
}

