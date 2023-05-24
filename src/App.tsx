import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { Column } from "./components/column/column";
import { initialData } from "./data";

import "./App.css";

function App() {
  const [state, setState] = useState(initialData);
  const onDragEnd = (...rest: unknown[]) => {
    console.log("onDragEnd", rest);
  };

  return (
    <div className="App">
      <DragDropContext onDragEnd={onDragEnd}>
        {state.columnOrder.map((columnId) => {
          const column = state.columns[columnId];
          const tasks = column.taskIds.map((taskId) => state.tasks[taskId]);
          return <Column key={column.id} column={column} tasks={tasks} />;
        })}
      </DragDropContext>
    </div>
  );
}

export default App;
