import React from 'react';
import "./../editor.css"
import { Document, Packer, Paragraph, TextRun } from "docx";
import { writeFile } from 'fs-web';


export default function Editor({ doc, setDoc, desen, setDesen }) {
    //console.log(props);
    function teste() {
        console.log("entrou aqui");
    }
    function updateParagrafo(e, index, value) {
        e.preventDefault();
        desen.paragrafos[index] = value;
        setDesen({ paragrafos: desen.paragrafos });
        console.log(desen.paragrafos);
    }
    function addParagrafoDesen() {
        setDesen({ paragrafos: [...desen.paragrafos, ""] });
    }
    function removeParagrafoDesen(e, index) {
        index = index-1;
        console.log("posicao de deleção",index);
        desen.paragrafos.splice(index, 1);
        console.log(desen.paragrafos)
        setDesen({ paragrafos: [...desen.paragrafos] });
    }
    function updateField(field, value) {
        setDoc({ ...doc, [field]: value })
    }
    async function Generate(event) {
        event.preventDefault();
        console.log("click");
        const doc = new Document();
        // Documents contain sections, you can have multiple sections per document, go here to learn more about sections
        // This simple example will only contain one section
        doc.addSection({
            properties: {},
            children: [
                new Paragraph({
                    children: [
                        new TextRun("Hello World"),
                        new TextRun({
                            text: "Foo Bar",
                            bold: true,
                        }),
                        new TextRun({
                            text: "\tGithub is the best",
                            bold: true,
                        }),
                    ],
                }),
            ],
        });
        doc.addSection({
            children: [
                new Paragraph({
                    text: "Hello World",
                    heading: 'Heading1',
                    alignment: "center",
                })

            ]
        })
        // Used to export the file into a .docx file
        Packer.toBuffer(doc).then((buffer) => {
            writeFile("test", buffer).then(function () {
                console.log("criou");
            });
        });
    }
    return (
        <form onSubmit={event => Generate(event)}>
            {JSON.stringify(doc)}
            {/* <button onClick={updateDoc}>TesteUpdate</button> */}
            <button type="submit" id="salvaDoc">Gerar Docx</button>
            <input type="text" onChange={event => updateField('title', event.target.value)} value={doc['title']} />
            <section className="pagina">
                <div className="titulo">
                    <input type="text" onChange={e => updateField('nomeUniv', e.target.value)} value={doc['nomeUniv']} placeholder="Sua Universidade" />
                </div>
                <div className="nome">
                    <input type="text" onChange={e => updateField('autor', e.target.value)} value={doc['autor']} placeholder="Autor" id="autorCapa" />
                </div>
                <div className="Tcc">
                    <input type="text" asp-for="@Model.nomeTCC" placeholder="meu TCC" id="tccCapa" onkeyup="updateTccField(this.id)" />
                </div>
                <br />
                <div className="volume">
                    <input type="text" asp-for="@Model.volume" placeholder="volume" id="volumeCapa" onkeyup="updateVolumeField(this.id)" />
                </div>
                <div className="cidade">
                    <input type="text" asp-for="@Model.cidade" placeholder="Cidade" value="Rio de Janeiro" />
                </div>
                <br />
                <div className="ano">
                    <input type="text" asp-for="@Model.ano" value="" placeholder="ano" />
                </div>
            </section>
            <br />
            <section className="pagina">
                {/* --Folha de rosto-- */}
                <div className="nome">
                    <input type="text" id="autorRosto" value="" placeholder="Autor" onkeyup="updateAutorField(this.id)" />
                    {/* <!--vai adicionar como copia--> */}
                </div>
                <div className="Tcc">
                    <input type="text" id="tccRosto" placeholder="Meu Tcc" onkeyup="updateTccField(this.id)" />
                    {/* <!--vai adicionar como copia--> */}
                </div>
                <br />
                <div className="volume">
                    <input type="text" placeholder="volume" id="volumeRosto" onkeyup="updateVolumeField(this.id)" />
                    {/* <!--vai adicionar como copia--> */}
                </div>
                <br />
                <div className="descricao">
                    <textarea className="texto" id="texto" asp-for="@Model.descCurso" placeholder="Texto completo" onchange="pegar()">Trabalho de Conclusão de Curso apresentado ao curso de Seu curso, área..., da Sua universidade, como requisito parcial para a Obtenção do grau de Bacharel em Seu curso.</textarea>
                </div>
                <br />
                <div className="orientador">
                    <input type="text" asp-for="@Model.orientador" value="" />
                    <input type="text" asp-for="@Model.orientadorTitulo" value="Orientador" />
                </div>
                <br />
                <div className="orientador">
                    <input type="text" asp-for="@Model.coorientador" value="" />
                    <input type="text" asp-for="@Model.coorientadorTitulo" value="Coorientador" />
                </div>
                <br /><br />
                <div className="cidade">
                    <input type="text" value="Rio de Janeiro" />
                </div>
                <br />
                <div className="ano">
                    <input type="text" value="2020" />
                </div>
            </section>
            <br />
            <section className="pagina">
                {/* <!--Folha de aprovação--> */}
                <div className="nome">
                    <input type="text" value="" placeholder="Autor" id="autorAprocacao" onkeyup="updateAutorField(this.id)" />
                </div>
                <br />
                <div className="Tcc">
                    <input type="text" id="tccAprovacao" placeholder="Meu Tcc" onkeyup="updateTccField(this.id)" />
                </div>
                <br />
                <div className="volume">
                    <input type="text" placeholder="volume" id="volumeAprovacao" onkeyup="updateVolumeField(this.id)" />
                </div>
                <br />
                <div className="descricao">
                    <textarea className="texto" id="texto-1" placeholder="Texto completo" onchange="pegar()">Trabalho de Conclusão de Curso apresentado ao curso de Seu curso, área..., da Sua universidade, como requisito parcial para a Obtenção do grau de Bacharel em Seu curso.
            </textarea>
                </div>
                <br />
                <div className="cidade2">
                    <input type="text" asp-for="@Model.CidadeData" value="Cidade,_____de_____________de___" />
                </div>
                <br />
                <div className="banca">
                    <input type="text" value="Banca" />
                </div>
                <br />
                <div className="assinatura">
                    ______________________________
        </div>
                <br />
                <div className="professor">
                    <input type="text" asp-for="@Model.drBancada" placeholder="Prof. Dr." />
                </div>
                <div className="universidade">
                    <input type="text" asp-for="@Model.drUniBancada" placeholder="Universidade" />
                </div>
            </section>
            <br />
            {/* <!--dedicatoria--> */}
            <section className="pagina textoRodape">
                <div className="dedicatoria">
                    <textarea asp-for="@Model.dedicatoria">Dedico esse trabalho a minha familia.</textarea>
                </div>
            </section>
            <br />
            {/* <!--agradecimento--> */}
            <section className="pagina">
                <div className="agradecimento">
                    <input type="text" asp-for="@Model.agradecimentoTitulo" placeholder="Agradecimento" value="Agradecimento" />
                </div>
                <br />
                <div className="agradecimento-texto">
                    <textarea asp-for="@Model.agradecimento">Agradeço ao professores.</textarea>
                </div>
            </section>
            <br />
            {/* <!--epigrafe--> */}
            <section className="pagina textoRodape">
                <div className="efigrafe">
                    <textarea asp-for="@Model.epigrafe">"só sei que nada sei"</textarea>
                </div>
            </section>
            <br />
            {/* <!--resumo--> */}
            <section className="pagina">
                <div className="resumo">
                    <input type="text" asp-for="@Model.resumoTitulo" value="Resumo" />
                </div>
                <br />
                <div className="resumo-texto">
                    <textarea asp-for="@Model.resumoTexto">Resumo de todo o trabalho</textarea>
                </div>
                <div className="palavrasChave">
                    <input type="text" asp-for="@Model.palavraChaveTitulo" value="Palavras chaves" />
                    <span>:</span>
                    <textarea asp-for="@Model.palavrasChave">TEST TEST</textarea>
                </div>
            </section>
            <br />
            {/* <!--abstract--> */}
            <section className="pagina">
                <div className="abstract">
                    <input type="text" asp-for="@Model.abstractTitulo" value="Abstract" />
                </div>
                <br />
                <div className="abstract-texto">
                    <textarea asp-for="@Model.abstract_">Resumo de todo o trabalho</textarea>
                </div>
                <div className="key">
                    <input type="text" asp-for="@Model.keywordsTitulo" value="key" />
                    <span>:</span>
                    <textarea asp-for="@Model.Keywords">TEST TEST</textarea>
                </div>
            </section>
            <br />
            {/* <!--ilustrações--> */}
            <section className="pagina">
                <div className="listaIlustracao">
                    <input type="text" asp-for="@Model.listaDeIlistracoesTitulo" value="Lista de ilustrações" />
                </div>
            </section>
            <br />
            {/* <!--sigla--> */}
            <section className="pagina">
                <div className="listaSiglas">
                    <input type="text" asp-for="@Model.listaDeAbreviaturasSiglasTitulo" value="Lista de Siglas" />
                </div>
                <br />
                <div className="siglas">
                    <input type="text" asp-for="@Model.sigla" value="TCC" />
                    <span>:</span>
                    <textarea asp-for="@Model.siglaSignificado">Trabalho de conclusão de curso</textarea>
                </div>
            </section>
            <br />
            {/* <!--simbolo--> */}
            <section className="pagina">
                <div className="listaSimbolo">
                    <input asp-for="@Model.listaDeSimbolosTitulo" type="text" value="Lista de Simbolos" />
                </div>
                <br />
                <div className="simbolo">
                    <input type="text" asp-for="@Model.simbolo" value="@@" />
                    <span>:</span>
                    <textarea asp-for="@Model.simboloSignificado">Arroba</textarea>
                </div>
            </section>
            {/* <!--introdução--> */}
            <br />
            <section className="pagina paginaAssist">
                <div className="introducao">
                    <input type="text" asp-for="@Model.tituloIntroducao" value="Introdução" />
                    <textarea asp-for="@Model.introducaoTexto">Texto de introdução</textarea>
                </div>
            </section>
            {/* <!--Sumario--> */}
            <section className="pagina">
                <div className="sumario">
                    <input type="text" value="Sumario" />
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
                    <input type="text" asp-for="@Model.tituloDesenvolvimento" value="Desenvolvimento" />
                </div>
                <br />
                <div className="desenvolvimento-texto">
                    <textarea asp-for="@Model.TextoDesenvolvimento"></textarea>
                    {
                        desen.paragrafos.map((paragrafo, index) => {
                            return (
                                <div key={index}>
                                    <div >
                                        <textarea onChange={e => updateParagrafo(e, index, e.target.value)}>{paragrafo}</textarea>
                                    </div>
                                    <button onclick={(e) => { e.preventDefault(); removeParagrafoDesen(e, index) }}  >- remover</button>
                                    <button onClick={(e) => { e.preventDefault(); console.log("item: ", index); removeParagrafoDesen(e, index) }}>Teste</button>
                                </div>
                            );
                        })
                    }
                    <button onClick={e => addParagrafoDesen(e)}>+ paragrafo</button>
                </div>
            </section>
            {/* <!--conclusao--> */}
            <br />
            <section className="pagina paginaAssist">
                <div className="conteudo conclusao">
                    <input type="text" asp-for="@Model.tituloConclusao" value="Conclusão" />
                    <textarea asp-for="@Model.conclusaoTexto">Insira sua conclusão aqui</textarea>
                </div>
            </section>
            {/* <!-- referencias--> */}
            <br />
            <section className="pagina">
                <div className="referencia">
                    <input type="text" asp-for="@Model.tituloReferencia" value="Referência" />
                </div>
                <table className="tabelaReferencia">
                    <tr>
                        <td>
                            <span>
                                Mettzer
                    </span>
                        </td>
                        <td>
                            <span>
                                http...
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
                                Mettzer
                    </span>
                        </td>
                        <td>
                            <span>
                                http
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
            {/* <!--glossario--> */}
            <br />
            <section className="pagina">
                <div className="glossario">
                    <input type="text" asp-for="@Model.tituloGlossario" value="Glossário" />
                </div>
                <br />
                <div className="glossario-texto">
                    <input type="text" asp-for="@Model.expressaoGlossario" value="Expressão" />
                    <span>:</span>
                    <textarea asp-for="@Model.descricaoGlossario"  ></textarea>
                </div>
            </section>
            {/* <!--apendice --> */}
            <br />
            <section className="pagina">
                <div className="apendice">
                    <input type="text" asp-for="@Model.tituloApendice" value="Apendice" />
                </div>
                <br />
                <div className="apendice-texto">
                    <textarea asp-for="@Model.textoApendice" ></textarea>
                </div>
            </section>
            {/* <!--anexo--> */}
            <br />
            <section className="pagina">
                <div className="anexo">
                    <input type="text" asp-for="@Model.tituloAnexoA" value="Anexo" />
                </div>
                <br />
                <div className="anexo-texto">
                    <textarea asp-for="@Model.anexoATexto"></textarea>
                </div>
            </section>
        </form >


    );


}