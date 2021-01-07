import React, { useState } from 'react';
import Editor from "./Editor/Editor"

export default function DocEditor() {
    //valores padrão do documento
    const [doc, setDoc] = useState(
        {
            nomeUniv: "Nome da Instituição",
            title: 'This is first list',
            autor: "Nome do Autor",
            nomeTcc: "Nome Tcc",
            volume: "Primeiro volume",
            cidade: "Rio de Janeiro",
            ano: "2021",
            orientador: "Nome Orientador",
            orientadorTitulo: "Orientador",
            coorientador: "Nome Coorientador",
            coorientadorTitulo: "Coorientador",
            descCurso: "Trabalho de Conclusão de Curso apresentado ao curso de Seu curso, área..., da Sua universidade, como requisito parcial para a Obtenção do grau de Bacharel em Seu curso.",
            cidadeData: "Cidade,_____de_____________de___",
            descCursoCompleta: "Trabalho de Conclusão de Curso apresentado ao curso de Seu curso, área..., da Sua universidade, como requisito parcial para a Obtenção do grau de Bacharel em Seu curso.",
            banca: "BANCA EXAMINADORA",
            drBancada: "Avaliador",
            drUniBancada: "Universidade",
            dedicatoria: "Dedico esse trabalho a minha familia.",
            agradecimentoTitulo: "Agradecimento",
            agradecimento: "",
            epigrafe: '"A persistência é o caminho do êxito."',
            resumoTitulo: "Resumo",
            resumoTexto: "",
            palavraChaveTitulo: "Palavra chave",
            abstractTitulo: "Abstract",
            abstractTexto: "Brief summary of a research article, thesis, review...",
            keywordsTitulo: "Key",
            keywords: "",
            listaDeIlistracoesTitulo: "Lista de Ilustrações",
            listaDeAbreviaturasSiglasTitulo: "Lista de Siglas",
            listaDeSimbolosTitulo: "Lista de Simbolos",
            tituloIntroducao: "Introdução",
            tituloSumario:"Sumário",
            tituloDesenvolvimento: "Desenvolvimento",
            tituloConclusao:"Conclusão",
            tituloReferencia:"Referência",
            tituloGlossario:"Glossário",
            apendiceTitulo: "Apêndice",
            tituloAnexoA:"Anexo A"
        }
    );
    const [siglas, setSiglas] = useState(baseSiglas());
    const [simbolo, setSimbolo] = useState(
        [
            {
                simbolo: "@",
                simboloSignificado: "Arroba"
            },
            {
                simbolo: "%",
                simboloSignificado: "Porcentagem"
            },          
        ]
    );
    const [introducao, setIntroducao] = useState(
        {
            paragrafos: ["primeiro paragrafo introdução", "segundo", "Terceiro"]
        }
    );

    const [desenvolvimento, setDesenvolvimento] = useState(
        {
            paragrafos: ["exemplo", ""]
        }
    );
    const [conclusao, setConclusao] = useState(
        {
            paragrafos: ["Exemplo de conclusão", ""]
        }
    )
    const [referencias, setReferencias] = useState(
        [
            {
                nome: "Nome referência",
                ref: "http..."
            }
        ]
    );
    const [glossario, setGlossario] = useState(
        [
            {
                expressao: "Expressão",
                descricao: "Descrição da expressão"
            }
        ]
    )
    const [apendice, setApendice] = useState(
        {
            paragrafos:["",""]
        }
    )
    const [anexo, setAnexo] = useState(
        {
            paragrafos:["",""]
        }
    )

    


    return (
        <Editor doc={doc} setDoc={setDoc} desen={desenvolvimento} setDesen={setDesenvolvimento} intro={introducao} setIntro={setIntroducao} siglas={siglas} setSiglas={setSiglas} simbolo={simbolo} setSimbolo={setSimbolo} conclusao={conclusao} setConclusao={setConclusao} referencias={referencias} setReferencias={setReferencias} glossario={glossario} setGlossario={setGlossario} apendice={apendice} setApendice={setApendice} anexo={anexo} setAnexo={setAnexo} />
    );
}


function baseSiglas(){
    return [
        {
            nome: "TCC",
            significado: "Trabalho de conclusão de curso"
        },
        {
            nome: "hahah",
            significado: "qqqqq"
        },
    ]
}