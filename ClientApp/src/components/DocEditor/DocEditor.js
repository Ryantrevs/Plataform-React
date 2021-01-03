import React, { useState } from 'react';
import Editor from "./Editor/Editor"

export default function DocEditor() {
    const [doc, setDoc] = useState(
        {
            nomeUniv: "",
            title: 'This is first list',
            autor: "initialAuthor"
        }
    );
    const [desenvolvimento, setDesenvolvimento] = useState(
        {
            paragrafos:["exemplo", ""]
        }
    );

    return <Editor doc={doc} setDoc={setDoc} desen={desenvolvimento} setDesen={setDesenvolvimento} />
}