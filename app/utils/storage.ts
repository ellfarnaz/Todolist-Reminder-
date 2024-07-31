import AsyncStorage from "@react-native-async-storage/async-storage";

interface Task {
  id: string;
  text: string;
  date: Date;
}

export const saveTasks = async (tasks: Task[]) => {
  try {
    const jsonValue = JSON.stringify(tasks);
    await AsyncStorage.setItem("tasks", jsonValue);
  } catch (e) {
    console.error("Error saving tasks", e);
  }
};

export const loadTasks = async (): Promise<Task[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem("tasks");
    return jsonValue != null
      ? JSON.parse(jsonValue).map((task: Task) => ({
          ...task,
          date: new Date(task.date),
        }))
      : [];
  } catch (e) {
    console.error("Error loading tasks", e);
    return [];
  }
};
