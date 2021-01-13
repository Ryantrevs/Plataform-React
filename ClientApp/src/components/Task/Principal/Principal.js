import React, { useState, useEffect } from 'react';
import {
    PrincipalSection,
    Section,
    Menu,
    NavMenu,
    MenuItem,
    Item,
    Configure,
    ButtonTools,
    TaskMenu,
    ScopeList,
    Card,
    Icone,
    CardTitle,
    TaskList,
    ButtonConfigure,
    SetActiveList,

} from './Elements'
import { TiThMenuOutline } from "react-icons/ti";
import { useTask } from '../../../context/TaskContext'

export function Principal() {

    const context = useTask();
    if (context.ActiveList == "") {
        return (
            <PrincipalSection>
                <Section>
                    <Menu>
                        <TiThMenuOutline size={28} color="#fff" /><br />
                        <ButtonTools onClick={(event) => {
                            event.preventDefault();
                            console.log("Adicionar Lista");
                            context.newList();
                            //NewTaskList();
                        }}>+Lista</ButtonTools>
                        <NavMenu>

                        </NavMenu>
                        <MenuItem>
                            {context.TaskList.map(teste => (
                                <Item key={teste.id}
                                    id={teste.id}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        context.changeActiveList(event.target.id);
                                        //SetActiveList(event.target.id)
                                    }}>
                                    {teste.titulo}
                                </Item>))
                            }
                            <Configure>
                                <ButtonConfigure>

                                </ButtonConfigure>
                            </Configure>
                        </MenuItem>
                    </Menu>
                </Section>
                <TaskMenu>
                    {
                        context.Scope.map((scope, index) => (
                            <ScopeList key={index}>
                                <h3>{scope.titulo}</h3>
                                {scope.cards.map((card, subIndex) => (
                                    <Card
                                        onClick={(event) => {
                                            event.preventDefault();
                                            context.TakeCard(event.target.id);
                                            //;
                                            //GetCard(event.target.id);
                                        }
                                        }
                                        id={card.id}
                                        key={subIndex}><CardTitle>{card.titulo}</CardTitle>
                                    </Card>
                                ))}

                            </ScopeList>
                        ))
                    }
                </TaskMenu>

            </PrincipalSection>
        )
    } else {
        if (context.Scope.length == 0) {
            return (
                <PrincipalSection>
                    <Section>
                        <Menu>
                            <TiThMenuOutline size={28} color="#fff" /><br />
                            <ButtonTools onClick={(event) => {
                                event.preventDefault();
                                console.log("Adicionar Lista");
                                context.newList();
                                //NewTaskList();
                            }}>+Lista</ButtonTools>
                            <ButtonTools
                                onClick={(event) => {
                                    console.log("Adicionar Escopo");
                                    context.newScope();
                                    //newScope();
                                }}>+Escopo</ButtonTools>
                            
                            <NavMenu>

                            </NavMenu>
                            <MenuItem>
                                {context.TaskList.map(teste => (
                                    <Item key={teste.id}
                                        id={teste.id}
                                        onClick={(event) => {
                                            event.preventDefault();
                                            context.changeActiveList(event.target.id);
                                            //SetActiveList(event.target.id)
                                        }}>
                                        {teste.titulo}
                                    </Item>))
                                }
                                <Configure>
                                    <ButtonConfigure>

                                    </ButtonConfigure>
                                </Configure>
                            </MenuItem>
                        </Menu>
                    </Section>
                    <TaskMenu>
                        {
                            context.Scope.map((scope, index) => (
                                <ScopeList key={index}>
                                    <h3>{scope.titulo}</h3>
                                    {scope.cards.map((card, subIndex) => (
                                        <Card
                                            onClick={(event) => {
                                                event.preventDefault();
                                                context.TakeCard(event.target.id);
                                                //;
                                                //GetCard(event.target.id);
                                            }
                                            }
                                            id={card.id}
                                            key={subIndex}><CardTitle>{card.titulo}</CardTitle>
                                        </Card>
                                    ))}

                                </ScopeList>
                            ))
                        }
                    </TaskMenu>

                </PrincipalSection>
            )
        } else {
            return (
                <PrincipalSection>
                    <Section>
                        <Menu>
                            <TiThMenuOutline size={28} color="#fff" /><br />
                            <ButtonTools onClick={(event) => {
                                event.preventDefault();
                                console.log("Adicionar Lista");
                                context.newList();
                                //NewTaskList();
                            }}>+Lista</ButtonTools>
                            <ButtonTools
                                onClick={(event) => {
                                    console.log("Adicionar Escopo");
                                    context.newScope();
                                    //newScope();
                                }}>+Escopo</ButtonTools>
                            <ButtonTools onClick={(event) => {
                                console.log("Adicionar Tarefa");
                                context.newTask();
                                //newCard();
                            }}>+Tarefa</ButtonTools>
                            <NavMenu>

                            </NavMenu>
                            <MenuItem>
                                {context.TaskList.map(teste => (
                                    <Item key={teste.id}
                                        id={teste.id}
                                        onClick={(event) => {
                                            event.preventDefault();
                                            context.changeActiveList(event.target.id);
                                            //SetActiveList(event.target.id)
                                        }}>
                                        {teste.titulo}
                                    </Item>))
                                }
                                <Configure>
                                    <ButtonConfigure>

                                    </ButtonConfigure>
                                </Configure>
                            </MenuItem>
                        </Menu>
                    </Section>
                    <TaskMenu>
                        {
                            context.Scope.map((scope, index) => (
                                <ScopeList key={index}>
                                    <h3>{scope.titulo}</h3>
                                    {scope.cards.map((card, subIndex) => (
                                        <Card
                                            onClick={(event) => {
                                                event.preventDefault();
                                                context.TakeCard(event.target.id);
                                                //;
                                                //GetCard(event.target.id);
                                            }
                                            }
                                            id={card.id}
                                            key={subIndex}><CardTitle>{card.titulo}</CardTitle>
                                        </Card>
                                    ))}

                                </ScopeList>
                            ))
                        }
                    </TaskMenu>

                </PrincipalSection>
            )
        }
    }
}
