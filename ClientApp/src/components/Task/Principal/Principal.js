import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import {
    PrincipalSection,
    Section,
    Menu,
    NavMenu,
    MenuItem,
    Item,
    Configure,
    ButtonConfigure,
    ButtonTools,
    TaskMenu,
    ScopeList,
    Card
} from './Elements'
import { TiThMenuOutline } from "react-icons/ti";


export function Principal({ Request }) {

    const [TaskList, SetTaskList] = useState([]);
    const [ActiveList, SetActiveList] = useState();
    const [Scope, SetScope] = useState([]);


    useEffect(() => {
        Request("get", {}, "/Task/Organization", function (data) {
            SetTaskList(data);
            SetActiveList(data[0].id.toString())
            console.log(data)
        });

    }, []);

    useEffect(() => {
        if (ActiveList) {
            console.log(ActiveList)
            GetTask(ActiveList)

        }
    }, [ActiveList])

    useEffect(() => {
        if (Scope) {
            console.log(Scope)
            for (var item in Scope) {
                console.log(item)
            }
        }
    }, [Scope])



    async function GetTask(ActiveList) {
        Request("post", { Id: ActiveList }, "/Task/GetTasks", function (data) {
            try {
                SetScope(data)
            }
            catch (error) {
                console.log(error)
            }
        });
    }

    async function teste() {
        if (Scope) {
            console.log("hgasusahasuah");
        }
    }


    const [card, updateCard] = useState();
        function handleOnDragEnd(result) {
        const items = Array.from(card);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updateCard(items);  
    }


    return (
        <PrincipalSection>
            <Section>
                <Menu>
                    <TiThMenuOutline size={28} color="#fff" /><br />
                    <ButtonTools>+Lista</ButtonTools>
                    <ButtonTools>+Escopo</ButtonTools>
                    <ButtonTools>+Tarefa</ButtonTools>
                    <NavMenu>

                    </NavMenu>
                    <MenuItem>
                        {TaskList.map(teste => (
                            <Item key={teste.id}
                                id={teste.id}
                                onClick={(event) => {
                                    event.preventDefault();
                                    SetActiveList(event.target.id)
                                }}>
                                {teste.titulo}
                            </Item>))}
                        <Configure>
                            <ButtonConfigure>

                            </ButtonConfigure>
                        </Configure>
                    </MenuItem>
                </Menu>
            </Section>
            <TaskMenu>
                {
                    <DragDropContext onDragEnd={handleOnDragEnd}>
                        {Scope.map((scope, index) => (
                            <ScopeList key={index}>
                                <Droppable droppableId={scope.id}>
                                    {(provided) => (
                                        <div className="ScopeList"
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}>
                                            <h3>{scope.titulo}</h3>
                                            {scope.cards.map((card, subIndex) => {
                                                return (
                                                    <Draggable draggableId={card.id} key={subIndex} index={index}>
                                                        {(provided) => (
                                                            <Card key={card.id}
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}>{card.Titulo}</Card>
                                                        )}
                                                    </Draggable>
                                                )
                                            })}
                                        </div>
                                    )}
                                </Droppable>
                            </ScopeList>
                        ))}
                    </DragDropContext>
                }
            </TaskMenu>
        </PrincipalSection>
    )
}

/*{ScopeList.map(scope=>(
    <ScopeList key={scope.Id}>
        {scope.cards.map(card=>(
            <Card key={card.Id}>{card.Titulo}</Card>
        ))}
    </ScopeList>
))}*/