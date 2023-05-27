import { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  OnDragEndResponder,
  OnDragStartResponder,
  OnDragUpdateResponder,
  DropResult,
} from "react-beautiful-dnd";
import styled from "@emotion/styled";
import { Column } from "./components/column/column";
import { TTaskId, IColumns, IData, initialData, TColumnId } from "./data";

import "./App.css";

const Container = styled.div`
  display: flex;
`;

const handleTaskDragEnd = (result: DropResult, state: IData): IData => {
  const { destination, source, draggableId, type } = result;
  const start = state.columns[source.droppableId];
  const finish = state.columns[destination?.droppableId || 0];
  if (start === finish) {
    const newTaskIds = Array.from(start.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination?.index || 0, 0, draggableId as TTaskId);

    const newColumn: IColumns = {
      ...start,
      taskIds: newTaskIds,
    };
    const newState: IData = {
      ...state,
      columns: {
        ...state.columns,
        [newColumn.id]: newColumn,
      },
    };

    document.body.style.color = "inherit";
    document.body.style.backgroundColor = "inherit";
    return newState;
  } else {
    const startTaskIds = Array.from(start.taskIds);
    const finishTaskIds = Array.from(finish.taskIds);
    startTaskIds.splice(source.index, 1);
    finishTaskIds.splice(destination?.index || 0, 0, draggableId as any);
    const newStart: IColumns = {
      ...start,
      taskIds: startTaskIds,
    };
    const newFinish: IColumns = {
      ...finish,
      taskIds: finishTaskIds,
    };
    const newState: IData = {
      ...state,
      columns: {
        ...state.columns,
        [newStart.id]: newStart,
        [finish.id]: newFinish,
      },
    };
    return newState;
  }
};

function App() {
  const [state, setState] = useState(initialData);
  const [homeIndex, setHomeIndex] = useState<number | null>();
  const onDragEnd: OnDragEndResponder = (result) => {
    const { destination, source, draggableId, type } = result;
    setHomeIndex(null);
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === "task") {
      const newState = handleTaskDragEnd(result, state);
      setState(newState);
    }
    if (type === "column") {
      const newColumnOrder = Array.from(state.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId as TColumnId);
      const newState: IData = {
        ...state,
        columnOrder: newColumnOrder,
      };
      setState(newState);
    }
  };

  const onDragUpdate: OnDragUpdateResponder = (update) => {
    const opacity = update.destination
      ? update.destination.index / Object.keys(state.tasks).length
      : 0;

    document.body.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
  };

  const onDragStart: OnDragStartResponder = (start) => {
    if (start.source.droppableId === "column-1") {
      document.body.style.color = "red";
    }
    document.body.style.transition = "all 0.2s";
    const homeIndex = state.columnOrder.indexOf(
      start.source.droppableId as TColumnId
    );
    setHomeIndex(homeIndex);
  };

  return (
    <div className="App">
      <DragDropContext
        onDragStart={onDragStart}
        onDragUpdate={onDragUpdate}
        onDragEnd={onDragEnd}
      >
        <Droppable
          droppableId="column-drop-area"
          direction="horizontal"
          type="column"
        >
          {(provided) => (
            <Container ref={provided.innerRef} {...provided.droppableProps}>
              {state.columnOrder.map((columnId, index) => {
                const column = state.columns[columnId];
                const tasks = column.taskIds.map(
                  (taskId) => state.tasks[taskId]
                );
                return (
                  <Column
                    key={column.id}
                    column={column}
                    tasks={tasks}
                    index={index}
                    // isDropDisabled={index < (homeIndex || 0)}
                  />
                );
              })}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
