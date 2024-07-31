export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const UPDATE_TASK = "UPDATE_TASK";

export interface Task {
  id: string;
  text: string;
  date: Date;
}

interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: Task;
}

interface DeleteTaskAction {
  type: typeof DELETE_TASK;
  payload: string;
}

interface UpdateTaskAction {
  type: typeof UPDATE_TASK;
  payload: Task;
}

interface LoadTasksAction {
  type: "LOAD_TASKS";
  payload: Task[];
}

export type TaskAction =
  | AddTaskAction
  | DeleteTaskAction
  | UpdateTaskAction
  | LoadTasksAction;
