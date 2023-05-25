export type TTaskId = "task-1" | "task-2" | "task-3" | "task-4";
export type TColumnId = "column-1" | "column-2" | "column-3";

export interface ITasks {
  id: TTaskId;
  content: string;
}

export interface IColumns {
  id: TColumnId;
  title: string;
  taskIds: TTaskId[];
}

export interface IData {
  tasks: Record<TTaskId, ITasks>;
  columns: Record<string, IColumns>;
  columnOrder: TColumnId[];
}

export const initialData: IData = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage" },
    "task-2": { id: "task-2", content: "Youtube break" },
    "task-3": { id: "task-3", content: "Take courses" },
    "task-4": { id: "task-4", content: "Cook dinner" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"],
    },
    "column-2": {
      id: "column-2",
      title: "In Progress",
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      taskIds: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};
