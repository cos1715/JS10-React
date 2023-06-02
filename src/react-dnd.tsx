import React, { useState } from "react";
import { DndProvider, useDrag, useDrop, DragSourceMonitor } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { motion } from "framer-motion";

import "./App.css";

interface Task {
  id: string;
  title: string;
}

interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

interface TaskDragObject {
  type: "TASK";
  id: string;
}

interface ColumnProps {
  title: string;
  tasks: Task[];
  onTaskMove: (taskId: string, targetColumn: Column) => void;
}

interface TaskProps {
  id: string;
  title: string;
  onTaskMove: (taskId: string, targetColumn: Column) => void;
}

const generateTasks = (count: number) => {
  const tasks: Task[] = [];

  for (let i = 1; i <= count; i++) {
    tasks.push({ id: `task${i}`, title: `Task ${i}` });
  }

  return tasks;
};

const Column: React.FC<ColumnProps> = ({ title, tasks, onTaskMove }) => {
  const handleTaskMove = (taskId: string, targetColumn: Column) => {
    onTaskMove(taskId, targetColumn);
  };

  return (
    <div className="column">
      <h2>{title}</h2>
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          title={task.title}
          onTaskMove={handleTaskMove}
        />
      ))}
    </div>
  );
};

const Task: React.FC<TaskProps> = ({ id, title, onTaskMove }) => {
  const [{ isDragging }, dragRef] = useDrag<
    TaskDragObject,
    any,
    { isDragging: boolean }
  >({
    type: "TASK",
    item: { id } as any,
    collect: (monitor: DragSourceMonitor<TaskDragObject, any>) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop<TaskDragObject, any, any>({
    accept: "TASK",
    drop: (item) => {
      onTaskMove(item.id, { id, title, tasks: [] });
    },
  });

  const opacity = isDragging ? 0.5 : 1;

  return (
    <motion.div
      ref={(node) => dragRef(dropRef(node))}
      className="task"
      style={{ opacity }}
      whileHover={{ scale: 1.05 }}
    >
      {title}
    </motion.div>
  );
};

const App: React.FC = () => {
  const [columns, setColumns] = useState<Column[]>([
    { id: "column1", title: "Column 1", tasks: generateTasks(3) },
    { id: "column2", title: "Column 2", tasks: generateTasks(5) },
  ]);

  const handleTaskMove = (taskId: string, targetColumn: Column) => {
    setColumns((prevColumns) => {
      const updatedColumns = [...prevColumns];

      const sourceColumn = updatedColumns.find((column) =>
        column.tasks.find((task) => task.id === taskId)
      );

      if (sourceColumn) {
        const taskIndex = sourceColumn.tasks.findIndex(
          (task) => task.id === taskId
        );
        const task = sourceColumn.tasks[taskIndex];

        sourceColumn.tasks.splice(taskIndex, 1);
        targetColumn.tasks.push(task);
      }

      return updatedColumns;
    });
  };

  return (
    <div className="app">
      <DndProvider backend={HTML5Backend}>
        <div className="columns">
          {columns.map((column) => (
            <Column
              key={column.id}
              title={column.title}
              tasks={column.tasks}
              onTaskMove={handleTaskMove}
            />
          ))}
        </div>
      </DndProvider>
    </div>
  );
};

export default App;
