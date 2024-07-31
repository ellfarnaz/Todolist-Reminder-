import { ADD_TASK, DELETE_TASK, UPDATE_TASK, Task, TaskAction } from "../types";

const initialState: Task[] = [];

const taskReducer = (state = initialState, action: TaskAction): Task[] => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case DELETE_TASK:
      return state.filter((task) => task.id !== action.payload);
    case UPDATE_TASK:
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, ...action.payload } : task
      );
    case "LOAD_TASKS":
      return action.payload;
    default:
      return state;
  }
};

export default taskReducer;
