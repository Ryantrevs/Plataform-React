import React, { useState } from 'react';
import Editor from "./Editor/Editor"

export default function DocEditor() {
    const [doc, setDoc] = useState(
        {
            nomeUniv:"",
            title: 'This is first list',
            autor:"initialAuthor"
        }
    );
    return <Editor doc={doc} setDoc={setDoc} />
}