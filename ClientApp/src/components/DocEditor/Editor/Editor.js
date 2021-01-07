import React, { useState, useEffect } from 'react';
import "./../editor.css"
import { AlignmentType, Document, Packer, Paragraph, TextRun } from "docx";
import { useUser } from "./../../../context/UserContext"
import { text } from '@fortawesome/fontawesome-svg-core';
import { faSpaceShuttle } from '@fortawesome/free-solid-svg-icons';



export default function Editor({ doc: DocxInfo, setDoc, desen, setDesen, intro, setIntro, siglas, setSiglas, simbolo, setSimbolo, conclusao, setConclusao, referencias, setReferencias, glossario, setGlossario, anexo, setAnexo, apendice, setApendice }) {
    var myButton = React.createRef();
    var myForm = React.createRef();
    var user = useUser();

    function updateParagrafoAnexo(index, value) {
        anexo.paragrafos[index] = value;
        setAnexo({ paragrafos: anexo.paragrafos });
    }
    function addParagrafoAnexo() {
        setAnexo({ paragrafos: [...anexo.paragrafos, ""] });
    }
    function removeParagrafoAnexo(index) {
        anexo.paragrafos.splice(index, 1);
        setAnexo({ paragrafos: [...anexo.paragrafos] });
    }

    ///================================
    function updateParagrafoApendi(index, value) {
        apendice.paragrafos[index] = value;
        setApendice({ paragrafos: apendice.paragrafos });
    }
    function addParagrafoApendi() {
        setApendice({ paragrafos: [...apendice.paragrafos, ""] });
    }
    function removeParagrafoApendi(index) {
        apendice.paragrafos.splice(index, 1);
        setApendice({ paragrafos: [...apendice.paragrafos] });
    }

    //==============  
    function updateGlossario(index, field, value) {
        glossario[index][field] = value;
        setGlossario([...glossario]);
    }
    function addGlossario() {
        setGlossario([...glossario, { expressao: "", descricao: "" }]);
    }
    function removeGlossario(index) {
        glossario.splice(index, 1);
        setGlossario([...glossario]);
    }
    //===============================
    function updateReferencia(index, field, value) {
        referencias[index][field] = value;
        setReferencias([...referencias]);
    }
    function addReferencia() {
        setReferencias([...referencias, { nome: "", ref: "" }]);
    }
    function removeReferencia(index) {
        referencias.splice(index, 1);
        setReferencias([...referencias]);
    }

    //=====================
    function updateParagrafoConclu(index, value) {
        conclusao.paragrafos[index] = value;
        setConclusao({ paragrafos: conclusao.paragrafos });
    }
    function addParagrafoConclu() {
        setConclusao({ paragrafos: [...conclusao.paragrafos, ""] });
    }
    function removeParagrafoConclu(index) {
        conclusao.paragrafos.splice(index, 1);
        setConclusao({ paragrafos: [...conclusao.paragrafos] });
    }

    //============
    function updateSimbolo(index, field, value) {
        simbolo[index][field] = value;
        setSimbolo([...simbolo]);
    }
    function addSimbolo() {
        setSimbolo([...simbolo, { simbolo: "", simboloSignificado: "" }]);
    }
    function removeSimbolo(index) {
        simbolo.splice(index, 1);
        setSimbolo([...simbolo]);
    }


    //==========
    function updateSigla(index, field, value) {
        siglas[index][field] = value;
        setSiglas([...siglas]);
    }
    function addSigla() {
        setSiglas([...siglas, { nome: "", significado: "" }]);
    }
    function removeSigla(index) {
        siglas.splice(index, 1);
        setSiglas([...siglas]);
    }


    //==============
    function updateParagrafoIntro(index, value) {
        intro.paragrafos[index] = value;
        setIntro({ paragrafos: intro.paragrafos });
    }
    function addParagrafoIntro() {
        setIntro({ paragrafos: [...intro.paragrafos, ""] });
    }
    function removeParagrafoIntro(index) {
        intro.paragrafos.splice(index, 1);
        setIntro({ paragrafos: [...intro.paragrafos] });
    }



//========
    function updateParagrafo(index, value) {
        desen.paragrafos[index] = value;
        setDesen({ paragrafos: desen.paragrafos });
    }
    function addParagrafoDesen() {
        setDesen({ paragrafos: [...desen.paragrafos, ""] });
    }
    function removeParagrafoDesen(index) {
        desen.paragrafos.splice(index, 1);
        setDesen({ paragrafos: [...desen.paragrafos] });
    }


//============
    function updateField(field, value) {
        setDoc({ ...DocxInfo, [field]: value });
    }
    function convertCmToPt(value) {
        return value * 567;
    }

    async function Generate(event) {
        event.preventDefault();
        const doc = new Document({

        });
        //567pt = 1 cm
        var MyFont = "Arial";
        var MyFontSize = 24;
        var MyMargin = {
            top: (567 * 2.5),
            left: (567 * 2.5),
            bottom: (567 * 3),
            right: (567 * 3)
        }
        var espParagrafo = "     "
        //capa
        doc.addSection({
            margins: MyMargin,
            properties: {

            },
            children: [
                new Paragraph({//nome universidade
                    children: [
                        new TextRun({
                            text: DocxInfo.nomeUniv,
                            font: MyFont,
                            size: MyFontSize
                        })
                    ],
                    alignment: AlignmentType.CENTER,
                }),
                new Paragraph({//nome autor
                    children: [
                        new TextRun({
                            text: DocxInfo.autor,
                            font: MyFont,
                            size: MyFontSize
                        })
                    ],
                    alignment: AlignmentType.CENTER,
                    spacing: {
                        before: 5000
                    }
                }),
                new Paragraph({//nome Tcc 
                    children: [
                        new TextRun({
                            text: DocxInfo.nomeTcc,
                            font: MyFont,
                            size: MyFontSize
                        })
                    ],
                    alignment: AlignmentType.CENTER,
                    spacing: {
                        before: 2000
                    }
                }),
                new Paragraph({//volume 
                    children: [
                        new TextRun({
                            text: "\n" + DocxInfo.volume,
                            font: MyFont,
                            size: MyFontSize
                        })
                    ],
                    alignment: AlignmentType.CENTER,
                    spacing: {
                        before: 200
                    }
                }),
                new Paragraph({
                    children: [
                        new TextRun({//cidade
                            text: "\n" + DocxInfo.cidade,
                            font: MyFont,
                            size: MyFontSize,
                        })
                    ],
                    alignment: AlignmentType.CENTER,
                    spacing: {
                        before: 4800
                    }
                }),
                new Paragraph({
                    children: [
                        new TextRun({//ano
                            text: "\n" + DocxInfo.ano,
                            font: MyFont,
                            size: MyFontSize,
                        })
                    ],
                    alignment: AlignmentType.CENTER,
                }),
            ],
        });
        //folha de rosto
        doc.addSection({
            properties: {

            },
            children: [
                new Paragraph({//nome autor
                    children: [
                        new TextRun({
                            text: DocxInfo.autor,
                            font: MyFont,
                            size: MyFontSize,
                            alignment: "center",
                        })
                    ],
                    alignment: AlignmentType.CENTER,
                    spacing: {
                        before: 4000
                    }
                }),
                new Paragraph({//nome tcc
                    children: [
                        new TextRun({
                            text: DocxInfo.nomeTcc,
                            alignment: "center",
                            font: MyFont,
                            size: MyFontSize
                        })
                    ],
                    alignment: AlignmentType.CENTER,
                    spacing: {
                        before: 3000
                    }
                }),
                new Paragraph({//volume
                    children: [
                        new TextRun({
                            text: "\n" + DocxInfo.volume,
                            font: MyFont,
                            size: MyFontSize
                        })
                    ],
                    alignment: AlignmentType.CENTER,
                    spacing: {
                        before: 200
                    }
                }),
                new Paragraph({//descricao curso   
                    children: [
                        new TextRun({
                            text: DocxInfo.descCurso,
                            font: MyFont,
                            size: MyFontSize
                        })
                    ],
                    alignment: AlignmentType.RIGHT,
                    indent: {
                        left: (567 * 8.75)
                    },
                    spacing: {
                        before: 1000
                    }
                }),
                new Paragraph({//orientador
                    children: [
                        new TextRun({
                            text: "\n" + DocxInfo.orientadorTitulo + " : " + DocxInfo.orientador,
                            font: MyFont,
                            size: MyFontSize
                        }),
                    ],
                    alignment: AlignmentType.RIGHT,
                    spacing: {
                        before: 100
                    }
                }),
                new Paragraph({//coorientador
                    children: [
                        new TextRun({
                            text: "\n" + DocxInfo.coorientadorTitulo + " : " + DocxInfo.coorientador,
                            font: MyFont,
                            size: MyFontSize
                        })
                    ],
                    alignment: AlignmentType.RIGHT,
                    spacing: {
                        before: 100
                    }
                }),
                new Paragraph({//cidade 
                    children: [
                        new TextRun({
                            text: "\n" + DocxInfo.cidade,
                            font: MyFont,
                            size: MyFontSize
                        }),
                    ],
                    alignment: AlignmentType.CENTER,
                    spacing: {
                        before: 1700
                    }
                }),
                new Paragraph({//ano
                    children: [

                        new TextRun({
                            text: "\n" + DocxInfo.ano,
                            font: MyFont,
                            size: MyFontSize
                        }),
                    ],
                    alignment: AlignmentType.CENTER,
                    spacing: {
                        before: 0
                    }
                })
            ],
            margins: MyMargin,
        });
        doc.addSection({//folha de aprovacao
            properties: {},
            children: [
                new Paragraph({
                    children: [
                        new TextRun({
                            text: DocxInfo.autor,
                            font: MyFont,
                            size: MyFontSize
                        }),
                    ],
                    alignment: AlignmentType.CENTER,
                    spacing: {
                        before: 3000
                    },

                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: DocxInfo.nomeTcc,
                            font: MyFont,
                            size: MyFontSize
                        }),
                    ],
                    alignment: AlignmentType.CENTER,
                    spacing: {
                        before: 3000
                    },

                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: DocxInfo.volume,
                            font: MyFont,
                            size: MyFontSize
                        }),
                    ],
                    alignment: AlignmentType.CENTER,
                    spacing: {
                        before: 200
                    },
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: DocxInfo.descCursoCompleta,
                            font: MyFont,
                            size: MyFontSize
                        }),
                    ],
                    alignment: AlignmentType.RIGHT,
                    spacing: {
                        before: 300
                    },
                    indent: {
                        left: (567 * 8.75)
                    },
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: DocxInfo.cidadeData,
                            font: MyFont,
                            size: MyFontSize
                        }),
                    ],
                    alignment: AlignmentType.RIGHT,
                    spacing: {
                        before: 500
                    },
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: DocxInfo.banca,
                            font: MyFont,
                            size: MyFontSize
                        }),
                    ],
                    alignment: AlignmentType.CENTER,
                    spacing: {
                        before: 1000
                    },
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "_________________________________",
                            font: MyFont,
                            size: MyFontSize
                        }),
                    ],
                    alignment: AlignmentType.CENTER,
                    spacing: {
                        before: 300
                    },
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: DocxInfo.drBancada,
                            font: MyFont,
                            size: MyFontSize
                        }),
                    ],
                    alignment: AlignmentType.CENTER,
                    spacing: {
                        before: 200
                    },
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: DocxInfo.drUniBancada,
                            font: MyFont,
                            size: MyFontSize
                        }),
                    ],
                    alignment: AlignmentType.CENTER,
                    spacing: {
                        before: 0
                    },
                }),
            ],
            margins: MyMargin
        });
        doc.addSection({//pagina de dedicatoria
            properties: {},
            children: [
                new Paragraph({
                    children: [
                        new TextRun({
                            text: DocxInfo.dedicatoria,
                            font: MyFont,
                            size: MyFontSize
                        }),
                    ],
                    spacing: {
                        before: 13000
                    },
                    alignment: AlignmentType.RIGHT
                }),

            ],
            margins: MyMargin
        });
        doc.addSection({//pagina de agradecimento
            children: [
                new Paragraph({
                    children: [
                        new TextRun({//titulo agradecimento
                            text: DocxInfo.agradecimentoTitulo,
                            font: MyFont,
                            size: MyFontSize
                        })
                    ],
                    alignment: AlignmentType.CENTER
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: DocxInfo.agradecimento,
                            font: MyFont,
                            size: MyFontSize
                        })
                    ],
                    indent: {
                        firstLine: (567 * 1.25)
                    },
                    spacing: 200
                })
            ],
            margins: MyMargin
        })
        doc.addSection({//epigrafe
            properties: {},
            children: [
                new Paragraph({
                    children: [
                        new TextRun({
                            text: DocxInfo.epigrafe,
                            font: MyFont,
                            size: MyFontSize
                        }),
                    ],
                    spacing: {
                        before: 13000
                    },
                    alignment: AlignmentType.RIGHT
                }),

            ],
            margins: MyMargin
        })
        doc.addSection({//resumo
            properties: {},
            children: [
                new Paragraph({
                    children: [
                        new TextRun({
                            text: DocxInfo.resumoTitulo,
                            font: MyFont,
                            size: MyFontSize
                        }),
                    ],
                    alignment: AlignmentType.CENTER
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: DocxInfo.resumoTexto,
                            font: MyFont,
                            size: MyFontSize
                        }),
                    ],
                    spacing: {
                        before: 500
                    },
                    indent: {
                        firstLine: convertCmToPt(1.25)
                    },
                    alignment: AlignmentType.JUSTIFIED
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: DocxInfo.palavraChaveTitulo + " : ",
                            font: MyFont,
                            size: MyFontSize
                        }),
                        new TextRun({
                            text: DocxInfo.palavrasChave,
                            font: MyFont,
                            size: MyFontSize
                        }),
                    ],
                    spacing: {
                        before: 500
                    }
                })


            ],
            margins: MyMargin
        })
        doc.addSection({//abstract
            properties: {},
            children: [
                new Paragraph({
                    children: [
                        new TextRun({
                            text: DocxInfo.abstractTitulo,
                            font: MyFont,
                            size: MyFontSize
                        }),
                    ],
                    spacing: {
                        before: 0
                    },
                    alignment: AlignmentType.CENTER

                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: DocxInfo.abstractTexto,
                            font: MyFont,
                            size: MyFontSize
                        })
                    ],
                    spacing: {
                        before: 500
                    },
                    indent: {
                        firstLine: convertCmToPt(1.25)
                    },
                    alignment: AlignmentType.JUSTIFIED
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: DocxInfo.keywordsTitulo + " : ",
                            font: MyFont,
                            size: MyFontSize
                        }),
                        new TextRun({
                            text: DocxInfo.keywords,
                            font: MyFont,
                            size: MyFontSize
                        })
                    ],
                    spacing: {
                        before: 500
                    }
                })
            ],
            margins:MyMargin
        })
        doc.addSection({//lista de ilustrações
            properties: {},
            children: [
                new Paragraph({
                    children:[
                        new TextRun({
                            text:DocxInfo.listaDeIlistracoesTitulo,
                            font:MyFont,
                            size:MyFontSize
                        })
                    ],
                    alignment:AlignmentType.CENTER,                    
                })
            ],
            margins:MyMargin
        })
        var listaSiglas = [
            new Paragraph({
                children: [
                    new TextRun({
                        text: DocxInfo.listaDeAbreviaturasSiglasTitulo,
                        font: MyFont,
                        size: MyFontSize
                    }),
                ],
                alignment: AlignmentType.CENTER,
            }),
        ]
        for (var [key, value] of Object.entries(siglas)) {
            listaSiglas.push(//adiciona nova sigla
                new Paragraph({
                    children: [
                        new TextRun({
                            text: value.nome + " : ",
                            font: MyFont,
                            size: MyFontSize
                        }),
                        new TextRun({
                            text: value.significado,
                            font: MyFont,
                            size: MyFontSize
                        })
                    ],
                    spacing: {
                        before: 500
                    }
                })
            );
        }
        doc.addSection({//lista de siglas
            properties: {

            },
            children: listaSiglas,
            margins: MyMargin
        })

        //monta paragrafos de simbolos
        var listaSimbolos = [
            new Paragraph({
                children: [
                    new TextRun({
                        text: DocxInfo.listaDeSimbolosTitulo,
                        font: MyFont,
                        size: MyFontSize
                    }),
                ],
                alignment: AlignmentType.CENTER,
            }),
        ]
        for (var [key, value] of Object.entries(simbolo)) {
            listaSimbolos.push(
                new Paragraph({
                    children: [
                        new TextRun({
                            text: value.simbolo + " : ",
                            font: MyFont,
                            size: MyFontSize
                        }),
                        new TextRun({
                            text: value.simboloSignificado,
                            font: MyFont,
                            size: MyFontSize
                        })
                    ],
                    spacing: {
                        before: 500
                    }
                })
            );
        }

        //lista de simbolos
        doc.addSection({
            properties: {},
            children: listaSimbolos,
            margins:MyMargin
        })

        var listaIntroducao = [
            new Paragraph({//titulo introducao
                children: [
                    new TextRun({
                        text: DocxInfo.tituloIntroducao,
                        font: MyFont,
                        size: MyFontSize
                    })
                ],
                alignment: AlignmentType.CENTER,
                spacing: {
                    after: 600
                }
            })
        ]
        intro.paragrafos.forEach(item => {
            listaIntroducao.push(
                new Paragraph({
                    children: [
                        new TextRun({
                            text: item,
                            font: MyFont,
                            size: MyFontSize
                        })
                    ],
                    alignment: AlignmentType.JUSTIFIED,
                    spacing: {
                        before: 0
                    },
                    indent: {
                        firstLine: convertCmToPt(1.25)
                    }
                })
            )
        });
        //introducao
        doc.addSection({
            properties: {},
            children: listaIntroducao,
            margins:MyMargin

        })



        doc.addSection({//sumario
            properties: {},
            children: [
                new Paragraph({//titulo
                    children:[
                        new TextRun({
                            text:"",
                            font:MyFont,
                            size:MyFontSize
                        })
                    ],
                    alignment:AlignmentType.CENTER
                    
                })
            ],
            margins:MyMargin
        })

        var listaDesenvolvimento = [
            new Paragraph({
                children: [
                    new TextRun({
                        text: DocxInfo.tituloDesenvolvimento,
                        font: MyFont,
                        size: MyFontSize
                    })
                ],
                alignment: AlignmentType.CENTER,
                spacing: {
                    after: 300
                }
            })
        ]
        desen.paragrafos.forEach(item => {
            listaDesenvolvimento.push(
                new Paragraph({
                    children: [
                        new TextRun({
                            text: item,
                            font: MyFont,
                            size: MyFontSize
                        })
                    ],
                    alignment: AlignmentType.JUSTIFIED,
                    spacing: {
                        before: 0
                    },
                    indent: {
                        firstLine: convertCmToPt(1.25)
                    }
                })
            )
        })
        doc.addSection({//desenvolvimento
            properties: {},
            children: listaDesenvolvimento,
            margins:MyMargin
        })
        var listaConclusao = [
            new Paragraph({
                children: [
                    new TextRun({
                        text: DocxInfo.tituloConclusao,
                        font: MyFont,
                        size: MyFontSize
                    })
                ],
                alignment: AlignmentType.CENTER,
                spacing: {
                    after: 300
                }
            })
        ]
        conclusao.paragrafos.forEach(item => {
            listaConclusao.push(
                new Paragraph({                    
                    children: [
                        new TextRun({
                            text: item,
                            font: MyFont,
                            size: MyFontSize
                        })
                    ],
                    alignment: AlignmentType.JUSTIFIED,
                    spacing: {
                        before: 0
                    },
                    indent: {
                        firstLine: convertCmToPt(1.25)
                    }
                })
            )
        })
        doc.addSection({//conclusao
            properties: {},
            children: listaConclusao,
            margins:MyMargin
        })

        var listaReferencias = [
            new Paragraph({//tiulo da referencias
                children:[
                    new TextRun({
                        text:DocxInfo.tituloReferencia,
                        font:MyFont,
                        size:MyFontSize
                    }),                    
                ],
                alignment:AlignmentType.CENTER
            })
        ]
        for(var [key,value] of Object.entries(referencias)){
            listaReferencias.push(
                new Paragraph({
                    children: [
                        new TextRun({
                            text: value.nome + " : ",
                            font: MyFont,
                            size: MyFontSize
                        }),
                        new TextRun({
                            text: value.ref,
                            font: MyFont,
                            size: MyFontSize
                        })
                    ],
                    spacing: {
                        before: 300
                    }
                })
            );            
        }
        //referencia
        doc.addSection({
            properties:{},
            children:listaReferencias,
            margins:MyMargin
        })

        //montagem glossario
        var listaGlossario = [
            new Paragraph({//tiulo do glossario
                children:[
                    new TextRun({
                        text:DocxInfo.tituloGlossario,
                        font:MyFont,
                        size:MyFontSize
                    }),                    
                ],
                alignment:AlignmentType.CENTER
            })
        ]
        for(var [key,value] of Object.entries(glossario)){
            listaGlossario.push(
                new Paragraph({
                    children: [
                        new TextRun({
                            text: value.expressao + " : ",
                            font: MyFont,
                            size: MyFontSize
                        }),
                        new TextRun({
                            text: value.descricao,
                            font: MyFont,
                            size: MyFontSize
                        })
                    ],
                    spacing: {
                        before: 300
                    }
                })
            );            
        }
        //glossario
        doc.addSection({
            properties:{},
            children:listaGlossario,
            margins:MyMargin
        })
        //monta apendice
        var listaApendice = [
            new Paragraph({
                children:[
                    new TextRun({
                        text:DocxInfo.apendiceTitulo,
                        font:MyFont,
                        size:MyFontSize
                    })
                ],
                alignment:AlignmentType.CENTER
            })
        ]
        apendice.paragrafos.forEach(item=>{
            listaApendice.push(
                new Paragraph({
                    children:[
                        new TextRun({
                            text:item,
                            font:MyFont,
                            size:MyFontSize
                        })
                    ],
                    spacing:{
                        after:200
                    },
                    alignment:AlignmentType.JUSTIFIED,
                    indent:{
                        firstLine:convertCmToPt(1.25)
                    }
                })
            );           
        })
        //apendice
        doc.addSection({
            properties:{},
            children:listaApendice,
            margins:MyMargin
        })
        //montagem do anexo 
        var listaAnexo =[
            new Paragraph({
                children:[
                    new TextRun({
                        text:DocxInfo.tituloAnexoA,
                        font:MyFont,
                        size:MyFontSize
                    })
                ],
                alignment:AlignmentType.CENTER,
                spacing:{
                    after:200
                }                
            })
        ]
        anexo.paragrafos.forEach(item=>{
            listaAnexo.push(
                new Paragraph({
                    children:[
                        new TextRun({
                            text:item,
                            font:MyFont,
                            size:MyFontSize,                            
                        })
                    ],
                    alignment:AlignmentType.JUSTIFIED,
                    spacing:{
                        after:200
                    },
                    indent:{
                        firstLine:convertCmToPt(1.25)
                    }
                })       
            )
            
        })       
        //anexo A
        doc.addSection({
            properties:{},
            children:listaAnexo,
            margins:MyMargin
        })

        // Used to export the file into a .docx file
        Packer.toBlob(doc).then((blob) => {
            var url = URL.createObjectURL(blob);
            var filename = "newDoc" + user.User.name + ".docx";
            myButton.current.href = url;
            myButton.current.download = filename;
            myButton.current.click();
        });
    }


    return (

        <form onSubmit={event => Generate(event)} ref={myForm} id="EditDocxForm">
            <a style={{ "display": "none" }} ref={myButton}>newFile</a>
            {/* {JSON.stringify(doc)} */}
            {/* <button onClick={updateDoc}>TesteUpdate</button> */}
            <button className="ExportButton" type="submit" id="salvaDoc">Exportar para documento Word</button>
            {/* <input type="text" onChange={event => updateField('title', event.target.value)} value={doc['title']} /> */}
            <section className="pagina">
                <div className="titulo">
                    <input type="text" onChange={e => updateField('nomeUniv', e.target.value)} value={DocxInfo['nomeUniv']} placeholder="Sua Universidade" />
                </div>
                <div className="nome">
                    <input type="text" onChange={e => updateField('autor', e.target.value)} value={DocxInfo['autor']} placeholder="Autor" id="autorCapa" />
                </div>
                <div className="Tcc">
                    <input type="text" onChange={e => updateField('nomeTcc', e.target.value)} value={DocxInfo['nomeTcc']} placeholder="Meu Tcc" id="tccCapa" />
                </div>
                <br />
                <div className="volume">
                    <input type="text" onChange={e => updateField('volume', e.target.value)} placeholder="volume" value={DocxInfo["volume"]} id="volumeCapa" />
                </div>
                <div className="cidade">
                    <input type="text" onChange={e => updateField('cidade', e.target.value)} placeholder="Cidade" value={DocxInfo["cidade"]} />
                </div>
                <br />
                <div className="ano">
                    <input type="text" onChange={e => updateField('ano', e.target.value)} placeholder="ano" value={DocxInfo['ano']} />
                </div>
            </section>
            <br />
            <section className="pagina">
                {/* --Folha de rosto-- */}
                <div className="nome">
                    <input type="text" onChange={e => updateField('autor', e.target.value)} id="autor" value={DocxInfo['autor']} placeholder="Autor" />
                    {/* <!--vai adicionar como copia--> */}
                </div>
                <div className="Tcc">
                    <input type="text" onChange={e => updateField('nomeTcc', e.target.value)} value={DocxInfo['nomeTcc']} id="tccRosto" placeholder="Meu Tcc" />
                    {/* <!--vai adicionar como copia--> */}
                </div>
                <br />
                <div className="volume">
                    <input type="text" onChange={e => updateField('volume', e.target.value)} value={DocxInfo['volume']} placeholder="volume" id="volumeRosto" />
                    {/* <!--vai adicionar como copia--> */}
                </div>
                <br />
                <div className="descricao">
                    <textarea className="texto" id="texto" onChange={e => updateField('descCurso', e.target.value)}>{DocxInfo['descCurso']}</textarea>
                </div>
                <br />
                <div className="orientadorSection">

                </div>
                <div className="orientador">
                    <input className="orientadorInput" type="text" onChange={e => updateField('orientador', e.target.value)} value={DocxInfo['orientador']} />
                    <input className="orientadorInput" type="text" onChange={e => updateField('orientadorTitulo', e.target.value)} value={DocxInfo['orientadorTitulo']} />
                </div>
                <br />
                <div className="orientador">
                    <input type="text" onChange={e => updateField('coorientador', e.target.value)} value={DocxInfo['coorientador']} />
                    <input type="text" onChange={e => updateField('coorientadorTitulo', e.target.value)} value={DocxInfo['coorientadorTitulo']} />
                </div>
                <br /><br />
                <div className="cidade">
                    <input type="text" onChange={e => updateField('cidade', e.target.value)} value={DocxInfo["cidade"]} />
                </div>
                <br />
                <div className="ano">
                    <input type="text" onChange={e => updateField('ano', e.target.value)} value={DocxInfo['ano']} />
                </div>
            </section>
            <br />
            <section className="pagina">
                {/* <!--Folha de aprovação--> */}
                <div className="nome">
                    <input type="text" value={DocxInfo['autor']} placeholder="Autor" id="autorAprocacao" onChange={e => updateField('autor', e.target.value)} />
                </div>
                <br />
                <div className="Tcc">
                    <input type="text" value={DocxInfo['nomeTcc']} id="tccAprovacao" placeholder="Meu Tcc" onChange={e => updateField('nomeTcc', e.target.value)} />
                </div>
                <br />
                <div className="volume">
                    <input type="text" value={DocxInfo['volume']} onChange={e => updateField('volume', e.target.value)} placeholder="volume" id="volumeAprovacao" />
                </div>
                <br />
                <div className="descricao">
                    <textarea className="texto" id="texto-1" placeholder="Texto completo" onChange={e => updateField('descCursoCompleta', e.target.value)}>{DocxInfo['descCursoCompleta']}</textarea>
                </div>
                <br />
                <div className="cidade2">
                    <input type="text" onChange={e => updateField('cidadeData', e.target.value)} value={DocxInfo['cidadeData']} />
                </div>
                <br />
                <div className="banca">
                    <input type="text" onChange={e => updateField('banca', e.target.value)} value={DocxInfo['banca']} />
                </div>
                <br />
                <div className="assinatura">
                    ______________________________
        </div>
                <br />
                <div className="professor">
                    <input type="text" onChange={e => updateField('drBancada', e.target.value)} placeholder="Prof. Dr." value={DocxInfo['drBancada']} />
                </div>
                <div className="universidade">
                    <input type="text" onChange={e => updateField('drUniBancada', e.target.value)} placeholder="Universidade" value={DocxInfo['drUniBancada']} />
                </div>
            </section>
            <br />
            {/* <!--dedicatoria--> */}
            <section className="pagina textoRodape">
                <div className="dedicatoria">
                    <textarea onChange={e => updateField('dedicatoria', e.target.value)} >{DocxInfo['dedicatoria']}</textarea>
                </div>
            </section>
            <br />
            {/* <!--agradecimento--> */}
            <section className="pagina">
                <div className="agradecimento">
                    <input type="text" onChange={e => updateField('agradecimentoTitulo', e.target.value)} placeholder="Agradecimento" value={DocxInfo['agradecimentoTitulo']} />
                </div>
                <br />
                <div className="agradecimento-texto">
                    <textarea onChange={e => updateField('agradecimento', e.target.value)}>{DocxInfo['agradecimento']}</textarea>
                </div>
            </section>
            <br />
            {/* <!--epigrafe--> */}
            <section className="pagina textoRodape">
                <div className="efigrafe">
                    <textarea onChange={e => updateField('epigrafe', e.target.value)}>{DocxInfo['epigrafe']}</textarea>
                </div>
            </section>
            <br />
            {/* <!--resumo--> */}
            <section className="pagina">
                <div className="resumo">
                    <input type="text" onChange={e => updateField('resumoTitulo', e.target.value)} value={DocxInfo['resumoTitulo']} />
                </div>
                <br />
                <div className="resumo-texto">
                    <textarea onChange={e => updateField('resumoTexto', e.target.value)} >{DocxInfo['resumoTexto']}</textarea>
                </div>
                <div className="palavrasChave">
                    <input type="text" onChange={e => updateField('palavraChaveTitulo', e.target.value)} value={DocxInfo["palavraChaveTitulo"]} />
                    <span>:</span>
                    <textarea onChange={e => updateField("palavrasChave", e.target.value)}>{DocxInfo["palavrasChave"]}</textarea>
                </div>
            </section>
            <br />
            {/* <!--abstract--> */}
            <section className="pagina">
                <div className="abstract">
                    <input type="text" onChange={e => updateField("abstractTitulo", e.target.value)} value={DocxInfo['abstractTitulo']} />
                </div>
                <br />
                <div className="abstract-texto">
                    <textarea onChange={e => updateField("abstractTexto", e.target.value)} >{DocxInfo['abstractTexto']}</textarea>
                </div>
                <div className="key">
                    <input type="text" onChange={e => updateField("keywordsTitulo", e.target.value)} value={DocxInfo['keywordsTitulo']} />
                    <span>:</span>
                    <textarea onChange={e => updateField("keywords", e.target.value)}>{DocxInfo['keywords']}</textarea>
                </div>
            </section>
            <br />
            {/* <!--ilustrações--> */}
            <section className="pagina">
                <div className="listaIlustracao">
                    <input type="text" onChange={e => updateField("listaDeIlistracoesTitulo", e.target.value)} value={DocxInfo['listaDeIlistracoesTitulo']} />
                </div>
            </section>
            <br />
            {/* <!--sigla--> */}
            <section className="pagina">
                <div className="listaSiglas">
                    <input type="text" onChange={e => updateField("listaDeAbreviaturasSiglasTitulo", e.target.value)} value={DocxInfo['listaDeAbreviaturasSiglasTitulo']} />
                </div>
                <br />
                {/* lista dinamica de siglas */}
                <div className="siglas">
                    {
                        siglas.map((item, index) => (
                            <div key={index}>
                                <input type="text" onChange={e => updateSigla(index, "nome", e.target.value)} value={item.nome} />
                                <span>:</span>
                                <textarea onChange={e => updateSigla(index, "significado", e.target.value)} value={item.significado} /><br />
                                <button onClick={e => { e.preventDefault(); removeSigla(index) }}>Remove</button>
                            </div>
                        ))
                    }
                    <button onClick={e => { e.preventDefault(); addSigla() }}>Adicionar</button>

                </div>
            </section>
            <br />
            {/* <!--simbolo--> */}
            <section className="pagina">
                <div className="listaSimbolo">
                    <input onChange={e => updateField("listaDeSimbolosTitulo", e.target.value)} type="text" value={DocxInfo['listaDeSimbolosTitulo']} />
                </div>
                <br />
                {/* lista de simbolos dinamica */}
                {
                    simbolo.map((item, index) => (
                        <div key={index} className="simbolo">
                            <input type="text" onChange={e => updateSimbolo(index, "simbolo", e.target.value)} value={item.simbolo} />
                            <span>:</span>
                            <textarea onChange={e => updateSimbolo(index, "simboloSignificado", e.target.value)} value={item.simboloSignificado} />
                            <button onClick={e => { e.preventDefault(); removeSimbolo(index); }}>Remove</button>
                        </div>
                    ))
                }
                <button onClick={e => { e.preventDefault(); addSimbolo(); }}>Adiciona</button>



            </section>
            {/* <!--introdução--> */}
            <br />
            <section className="pagina paginaAssist">
                <div className="introducao">
                    <input type="text" onChange={e => updateField("tituloIntroducao", e.target.value)} value={DocxInfo['tituloIntroducao']} />
                    {/* lista de paragrafos */}
                    {
                        intro.paragrafos.map((paragrafos, index) => (
                            <div key={index}>
                                <textarea className="introducaoTextarea" onChange={e => { e.preventDefault(); updateParagrafoIntro(index, e.target.value) }} value={paragrafos} /><br />
                                <button onClick={e => { e.preventDefault(); removeParagrafoIntro(index) }}>Remover</button>
                            </div>
                        ))
                    }
                    <button onClick={e => { e.preventDefault(); addParagrafoIntro() }}>Adicionar</button>
                </div>
            </section>
            {/* <!--Sumario--> */}
            <section className="pagina">
                <div className="sumario">
                    <input type="text" onChange={e=>{e.preventDefault();updateField("tituloSumario",e.target.value)}}  value={DocxInfo["tituloSumario"]} />
                </div>
                <br />
                <table className="tabelaSumario">
                    <tr>
                        <td>
                            <span>
                                1
                    </span>
                        </td>
                        <td>
                            <span>
                                Introdução
                    </span>
                        </td>
                        <td>
                            <span>
                                <img src="~/imagens/lupa.png" />
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>
                                2
                    </span>
                        </td>
                        <td>
                            <span>
                                Desenvolvimento
                    </span>
                        </td>
                        <td>
                            <span>
                                <img src="~/imagens/lupa.png" />
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>
                                2.1
                    </span>
                        </td>
                        <td>
                            <span>
                                Título Secundario
                    </span>
                        </td>
                        <td>
                            <span>
                                <img src="~/imagens/lupa.png" />
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>
                                2.1.1
                    </span>
                        </td>
                        <td>
                            <span>
                                Título terciario
                    </span>
                        </td>
                        <td>
                            <span>
                                <img src="~/imagens/lupa.png" />
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>
                                2.1.1.1
                    </span>
                        </td>
                        <td>
                            <span>
                                Título quaternario
                    </span>
                        </td>
                        <td>
                            <span>
                                <img src="~/imagens/lupa.png" />
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>
                                2.1.1.1.1
                    </span>
                        </td>
                        <td>
                            <span>
                                Título quinário
                    </span>
                        </td>
                        <td>
                            <span>
                                <img src="~/imagens/lupa.png" />
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>
                                3
                    </span>
                        </td>
                        <td>
                            <span>
                                Conclusão
                    </span>
                        </td>
                        <td>
                            <span>
                                <img src="~/imagens/lupa.png" />
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>

                            </span>
                        </td>
                        <td>
                            <span>
                                Referência
                    </span>
                        </td>
                        <td>
                            <span>
                                <img src="~/imagens/lupa.png" />
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>

                            </span>
                        </td>
                        <td>
                            <span>
                                Glossário
                    </span>
                        </td>
                        <td>
                            <span>
                                <img src="~/imagens/lupa.png" />
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>

                            </span>
                        </td>
                        <td>
                            <span>
                                Apêndice A
                    </span>
                        </td>
                        <td>
                            <span>
                                <img src="~/imagens/lupa.png" />
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>

                            </span>
                        </td>
                        <td>
                            <span>
                                Anexo A
                    </span>
                        </td>
                        <td>
                            <span>
                                <img src="~/imagens/lupa.png" />
                            </span>
                        </td>
                    </tr>
                </table>

            </section>

            {/* <!--desenvolvimento--> */}
            <section className="pagina">
                <div className="desenvolvimento">
                    <input type="text" onChange={e => { e.preventDefault(); updateField("tituloDesenvolvimento", e.target.value) }} value={DocxInfo["tituloDesenvolvimento"]} />
                </div>
                <br />
                <div className="desenvolvimento-texto">
                    {
                        desen.paragrafos.map((paragrafo, index) => (
                            <div className="desenPara" key={index}>
                                <div>
                                    <textarea onChange={e => { e.preventDefault(); updateParagrafo(index, e.target.value) }} value={paragrafo} />
                                    <button onClick={(e) => { e.preventDefault(); removeParagrafoDesen(index) }}>- remover</button>
                                </div>
                            </div>
                        ))
                    }
                    <button onClick={(e) => { e.preventDefault(); addParagrafoDesen() }}>+ paragrafo</button>
                </div>
            </section>
            {/* <!--conclusao--> */}
            <br />
            <section className="pagina paginaAssist">
                <div className="conteudo conclusao">
                    <input type="text" onChange={e => { e.preventDefault(); updateField("tituloConclusao", e.target.value) }} value="Conclusão" />
                    {/* lista de paragrafos */}
                    {
                        conclusao.paragrafos.map((paragrafo, index) => (
                            <div className="conclusaoText" key={index}>
                                <textarea onChange={e => { e.preventDefault(); updateParagrafoConclu(index, e.target.value) }} value={paragrafo} />
                                <button onClick={e => { e.preventDefault(); removeParagrafoConclu(index) }}>Remover</button>
                            </div>

                        ))
                    }
                    <button onClick={e => { e.preventDefault(); addParagrafoConclu() }}>Adicionar</button>
                </div>
            </section>
            {/* <!-- referencias--> */}
            <br />
            <section className="pagina">
                <div className="referencia">
                    <input type="text" onChange={e=>{e.preventDefault();updateField("tituloReferencia",e.target.value)}}  value={DocxInfo['tituloReferencia']}  />
                </div>
                <table className="tabelaReferencia">
                    {
                        referencias.map((referencia, index) => (
                            <div key={index}>
                                <tr>
                                    <td style={{ "width": "50%", }}>
                                        <span>
                                            <input onChange={e => { e.preventDefault(); updateReferencia(index, "nome", e.target.value) }} value={referencia.nome} />
                                        </span>
                                    </td>
                                    <td style={{ "width": "50%", }}>
                                        <span>
                                            <input onChange={e => { e.preventDefault(); updateReferencia(index, "ref", e.target.value) }} value={referencia.ref} />
                                        </span>
                                    </td>
                                    {/* <td>
                                        <span>
                                            <img src="~/imagens/lupa.png" />
                                        </span>
                                    </td> */}
                                </tr>
                                <button onClick={e => { e.preventDefault(); removeReferencia(index) }}>Remover</button>
                            </div>
                        ))
                    }
                    <button onClick={e => { e.preventDefault(); addReferencia() }}>Adicionar</button>
                </table>
            </section>
            {/* <!--glossario--> */}
            <br />
            <section className="pagina">
                <div className="glossario">
                    <input type="text" onChange={e=>{e.preventDefault();updateField("tituloGlossario",e.target.value)}}  value={DocxInfo['tituloGlossario']}  />
                </div>
                <br />
                {
                    glossario.map((item, index) => (
                        <div key={index} className="glossario-texto">
                            <input type="text" onChange={e => { e.preventDefault(); updateGlossario(index, "expressao", e.target.value) }} value={item.expressao} />
                            <span>:</span>
                            <textarea onChange={e => { e.preventDefault(); updateGlossario(index, "descricao", e.target.value) }} value={item.descricao} />
                            <button onClick={e => { e.preventDefault(); removeGlossario(index) }}>Remover</button>
                        </div>
                    ))
                }
                <button onClick={e => { e.preventDefault(); addGlossario() }}>Adicionar</button>
            </section>
            {/* <!--apendice --> */}
            <br />
            <section className="pagina">
                <div className="apendice">
                    <input type="text" onChange={e => { e.preventDefault(); updateField("apendiceTitulo") }} value={DocxInfo['apendiceTitulo']} />
                </div>
                <br />
                <div className="apendice-texto">
                    {
                        apendice.paragrafos.map((item, index) => (
                            <div key={index}>
                                <textarea onChange={e => { e.preventDefault(); updateParagrafoApendi(index, e.target.value) }} value={item} />
                                <button onClick={e => { e.preventDefault(); removeParagrafoApendi(index) }}>Remove</button>
                            </div>
                        ))
                    }
                    <button onClick={e => { e.preventDefault(); addParagrafoApendi() }}>Adicionar </button>
                </div>
            </section>
            {/* <!--anexo--> */}
            <br />
            <section className="pagina">
                <div className="anexo">
                    <input type="text" onChange={e => { e.preventDefault(); updateField("tituloAnexoA") }} asp-for="@Model.tituloAnexoA" value={DocxInfo['tituloAnexoA']} />
                </div>
                <br />
                {
                    anexo.paragrafos.map((item, index) => (
                        <div className="anexo-texto">
                            <textarea onChange={e => { e.preventDefault(); updateParagrafoAnexo(index, e.target.value) }} value={item} />
                            <button onClick={e => { e.preventDefault(); removeParagrafoAnexo(index); }}>Remove</button>
                        </div>
                    ))
                }
                <button onClick={e => { e.preventDefault(); addParagrafoAnexo() }}>Adicionar</button>
            </section>
        </form >


    );


}