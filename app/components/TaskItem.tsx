import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { deleteTask } from "../redux/actions/taskActions";
import { Task } from "../redux/types";
import EditTaskModal from "./EditTaskModal";
import styles from "../styles/styles";
import useColorScheme from "../../hooks/useColorScheme";

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const dispatch = useDispatch();
  const colorScheme = useColorScheme();

  const getDayName = (dayIndex: number): string => {
    const days = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
    ];
    return days[dayIndex];
  };

  const formatDate = (date: Date): string => {
    const d = new Date(date);
    const dayName = getDayName(d.getDay());
    const day = d.getDate().toString().padStart(2, "0");
    const month = (d.getMonth() + 1).toString().padStart(2, "0");
    const year = d.getFullYear();
    const hour = d.getHours().toString().padStart(2, "0");
    const minute = d.getMinutes().toString().padStart(2, "0");

    return `${dayName}, ${day}/${month}/${year}, ${hour}:${minute}`;
  };

  return (
    <View
      style={[
        styles.taskItem,
        colorScheme === "dark" ? styles.taskItemDark : styles.taskItemLight,
      ]}>
      <View style={styles.taskTextContainer}>
        <Text
          style={[
            styles.taskText,
            colorScheme === "dark" ? styles.taskTextDark : styles.taskTextLight,
          ]}>
          {task.text}
        </Text>
        <Text
          style={[
            styles.taskDate,
            colorScheme === "dark" ? styles.taskDateDark : styles.taskDateLight,
          ]}>
          {formatDate(new Date(task.date))}
        </Text>
      </View>
      <View style={styles.taskButtons}>
        <TouchableOpacity
          onPress={() => setIsEditModalVisible(true)}
          style={[
            styles.editButton,
            colorScheme === "dark"
              ? styles.editButtonDark
              : styles.editButtonLight,
          ]}>
          <AntDesign
            name="edit"
            size={24}
            color={colorScheme === "dark" ? "#007AFF" : "#007AFF"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => dispatch(deleteTask(task.id))}
          style={[
            styles.deleteButton,
            colorScheme === "dark"
              ? styles.deleteButtonDark
              : styles.deleteButtonLight,
          ]}>
          <AntDesign
            name="delete"
            size={24}
            color={colorScheme === "dark" ? "#FF0000" : "#FF0000"}
          />
        </TouchableOpacity>
      </View>
      <EditTaskModal
        task={task}
        isVisible={isEditModalVisible}
        onClose={() => setIsEditModalVisible(false)}
      />
    </View>
  );
};

export default TaskItem;
