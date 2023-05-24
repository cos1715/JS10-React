import { FC, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Droppable } from "react-beautiful-dnd";
import { IColumns, ITasks } from "../../data";
import { Task } from "../task/task";

interface IProps {
  column: IColumns;
  tasks: ITasks[];
}

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgray;
  border-radius: 4px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
`;
export const Column: FC<IProps> = ({ column, tasks }) => {
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
      <Droppable droppableId={column.id}>
        {(provided) => (
          <TaskList ref={provided.innerRef} {...provided.droppableProps}>
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
