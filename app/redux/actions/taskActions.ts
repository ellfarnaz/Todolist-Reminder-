import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dispatch } from "redux";
import { ADD_TASK, DELETE_TASK, UPDATE_TASK, Task, TaskAction } from "../types";
import {
  scheduleNotification,
  cancelNotification,
} from "../../utils/notifications";

export const addTask = (text: string, date: Date) => {
  const id = Date.now().toString();
  scheduleNotification(id, text, date);
  return {
    type: ADD_TASK,
    payload: { id, text, date },
  };
};

export const deleteTask = (id: string) => {
  cancelNotification(id);
  return {
    type: DELETE_TASK,
    payload: id,
  };
};

export const updateTask = (id: string, text: string, date: Date) => {
  cancelNotification(id);
  scheduleNotification(id, text, date);
  return {
    type: UPDATE_TASK,
    payload: { id, text, date },
  };
};

export const loadTasks = () => async (dispatch: Dispatch<TaskAction>) => {
  try {
    const storedTasks = await AsyncStorage.getItem("tasks");
    if (storedTasks !== null) {
      dispatch({
        type: "LOAD_TASKS",
        payload: JSON.parse(storedTasks).map((task: Task) => ({
          ...task,
          date: new Date(task.date),
        })),
      });
    }
  } catch (error) {
    console.error("Error loading tasks:", error);
  }
};

export const saveTasks =
  () => (dispatch: Dispatch<any>, getState: () => { tasks: Task[] }) => {
    const { tasks } = getState();
    AsyncStorage.setItem("tasks", JSON.stringify(tasks));
  };
