import { FC } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "@emotion/styled";
import { ITasks } from "../../data";

interface IProps {
  task: ITasks;
  index: number;
}

const Container = styled.div<{ isDragging: boolean; isDragDisabled: boolean }>`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  padding: 8px;
  border: 1px solid lightgray;
  border-radius: 4px;
  background-color: ${({ isDragging, isDragDisabled }) =>
    isDragDisabled ? "gray" : isDragging ? "turquoise" : "transparent"};
`;

const Handle = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  border-radius: 4px;
  background-color: white;
`;

export const Task: FC<IProps> = ({ task, index }) => {
  return (
    <Draggable
      draggableId={task.id}
      index={index}
      isDragDisabled={task.id === "task-2"}
    >
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
          isDragDisabled={task.id === "task-2"}
        >
          {/* You can assign this props to drag entire element by handle */}
          {/* <Handle {...provided.dragHandleProps} /> */}
          {task.content}
        </Container>
      )}
    </Draggable>
  );
};
