import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cog } from '@fortawesome/free-solid-svg-icons';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
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
    Icone
} from './Elements'
import { TiThMenuOutline } from "react-icons/ti";

//const element = <FontAwesomeIcon icon={cog} />

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


    
    /*
    function handleOnDragEnd(result) {
        const items = Array.from(card);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updateCard(items);  
        
    }

    const [card, updateCard] = useState();
    */






   const onDragEnd = (result, scope, setScope) => {
    if (!result.destination) return;
    const { source, destination } = result;
  
    if (source.droppableId !== destination.droppableId) {
      const sourceScope = scope[source.droppableId];
      const destScope = scope[destination.droppableId];
      const sourceItems = [...sourceScope.items];
      const destItems = [...destScope.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setScope({
        ...scope,
        [source.droppableId]: {
          ...sourceScope,
          items: sourceItems
        },
        [destination.droppableId]: {
          ...destScope,
          items: destItems
        }
      });
    } else {
      const scope = scope[source.droppableId];
      const copiedItems = [...scope.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setScope({
        ...scope,
        [source.droppableId]: {
          ...scope,
          items: copiedItems
        }
      });
    }
  };
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
                                <Configure>
                                    <Icone>
                                    </Icone>
                                </Configure> 
                            </Item>))}
                    </MenuItem>
                </Menu>
            </Section>
            <TaskMenu>
                {
                    <DragDropContext onDragEnd={result => onDragEnd(result, Scope, SetScope)}>
                        {Scope.map((scope, index) => (
                            <ScopeList key={scope.id}>
                                <Droppable droppableId={scope.id} key={scope.id}>
                                    {(provided) => (
                                        <div className="ScopeList"
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}>
                                            <h3>{scope.titulo}</h3>
                                            {scope.cards.map((card, subIndex) => {
                                                return (
                                                    <Draggable draggableId={card.id} key={card.id} index={index}>
                                                        {(provided) => (
                                                            <Card key={card.id}
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}>{card.titulo}</Card>
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