import { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Droppable } from "react-beautiful-dnd";
import { IColumns, ITasks } from "../../data";
import { Task } from "../task/task";

interface IProps {
  column: IColumns;
  tasks: ITasks[];
  isDropDisabled?: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  margin: 8px;
  border: 1px solid lightgray;
  border-radius: 4px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div<{ isDraggingOver: boolean }>`
  flex-grow: 1;
  min-height: 100px;
  padding: 8px;
  background-color: ${(props) =>
    props.isDraggingOver ? "rgba(145, 145, 145, 0.1)" : "transparent"};
`;
export const Column: FC<IProps> = ({ column, tasks, isDropDisabled }) => {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));
    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);
  if (!enabled) {
    return null;
  }

  return (
    <Container>
      <Title>{column.title}</Title>
      <Droppable
        droppableId={column.id}
        // you can't drop into drop areas with different types
        // type={column.id === "column-3" ? "done" : "active"}
        isDropDisabled={isDropDisabled}
      >
        {(provided, snapshot) => (
          <TaskList
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};
