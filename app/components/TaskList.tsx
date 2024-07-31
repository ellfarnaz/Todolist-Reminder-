import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import { RootState } from "../redux/reducers/rootReducer";

const TaskList: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.tasks);

  return (
    <FlatList
      data={tasks}
      renderItem={({ item }) => <TaskItem task={item} />}
      keyExtractor={(item) => item.id}
    />
  );
};

export default TaskList;
