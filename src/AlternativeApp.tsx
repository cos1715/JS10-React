import React, { useState, useEffect } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
  DragStart,
} from "react-beautiful-dnd";

interface Task {
  id: string;
  content: string;
}

interface Column {
  id: string;
  taskIds: string[];
}

interface InitialData {
  columns: Record<string, Column>;
  tasks: Record<string, Task>;
}

let taskCounter = 5;
const initialData: InitialData = {
  columns: {
    column1: {
      id: "column1",
      taskIds: ["task1", "task2"],
    },
    column2: {
      id: "column2",
      taskIds: ["task3", "task4"],
    },
  },
  tasks: {
    task1: { id: "task1", content: "Task 1" },
    task2: { id: "task2", content: "Task 2" },
    task3: { id: "task3", content: "Task 3" },
    task4: { id: "task4", content: "Task 4" },
  },
};

const App = () => {
  const [data, setData] = useState<InitialData>(initialData);
  const [isCtrlPressed, setIsCtrlPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Control") {
        setIsCtrlPressed(true);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === "Control") {
        setIsCtrlPressed(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  const handleDragStart = (start: DragStart) => {
    if (isCtrlPressed) {
      const startColumn = data.columns[start.source.droppableId];
      const newTaskIds = Array.from(startColumn.taskIds);
      newTaskIds.splice(start.source.index, 0, "placeholder");
      const newStartColumn = {
        ...startColumn,
        taskIds: newTaskIds,
      };

      const newData = {
        ...data,
        columns: {
          ...data.columns,
          [newStartColumn.id]: newStartColumn,
        },
      };

      setData(newData);
    }
  };

  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      if (!isCtrlPressed) {
        newTaskIds.splice(source.index, 1);
      }
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newData = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      };

      setData(newData);
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    if (!isCtrlPressed) {
      startTaskIds.splice(source.index, 1);
    }
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    if (isCtrlPressed) {
      const newTaskId = `task${taskCounter++}`;
      const newTask = {
        id: newTaskId,
        content: `${data.tasks[draggableId].content} (copy)`,
      };

      finishTaskIds.splice(destination.index, 0, newTaskId);
      data.tasks[newTaskId] = newTask;
    } else {
      finishTaskIds.splice(destination.index, 0, draggableId);
    }

    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newData = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    setData(newData);
  };

  return (
    <DragDropContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      {Object.values(data.columns).map((column) => (
        <Droppable droppableId={column.id} key={column.id}>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {column.taskIds.map((taskId, index) => {
                const task = data.tasks[taskId];
                return (
                  <Draggable draggableId={taskId} index={index} key={taskId}>
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {task ? task.content : "Placeholder"}
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      ))}
    </DragDropContext>
  );
};

export default App;
