import { FC } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "@emotion/styled";
import { ITasks } from "../../data";

interface IProps {
  task: ITasks;
  index: number;
}

const Container = styled.div`
  margin-bottom: 8px;
  padding: 8px;
  border: 1px solid lightgray;
  border-radius: 4px;
  background-color: "#fff";
`;

export const Task: FC<IProps> = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {task.content}
        </Container>
      )}
    </Draggable>
  );
};
