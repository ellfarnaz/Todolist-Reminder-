import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions/taskActions";
import DateTimePicker from "./DateTimePicker";
import styles from "../styles/styles";
import useColorScheme from "../../hooks/useColorScheme";

const AddTask: React.FC = () => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState(new Date());
  const dispatch = useDispatch();
  const colorScheme = useColorScheme();

  const handleAddTask = () => {
    if (task.trim() !== "") {
      const now = new Date();
      now.setSeconds(0);
      now.setMilliseconds(0);
      if (
        date.getHours() === now.getHours() &&
        date.getMinutes() === now.getMinutes()
      ) {
        Alert.alert("Invalid Time", "Please select a future time.");
        return;
      }
      dispatch(addTask(task, date));
      setTask("");
      setDate(new Date());
    }
  };

  return (
    <View>
      <View
        style={[
          styles.inputContainer,
          colorScheme === "dark"
            ? styles.inputContainerDark
            : styles.inputContainerLight,
        ]}>
        <TextInput
          style={[
            styles.input,
            colorScheme === "dark" ? styles.inputDark : styles.inputLight,
          ]}
          placeholder="Enter task"
          value={task}
          onChangeText={setTask}
          placeholderTextColor={colorScheme === "dark" ? "#ccc" : "#666"}
        />
        <TouchableOpacity
          style={[
            styles.addButton,
            colorScheme === "dark"
              ? styles.addButtonDark
              : styles.addButtonLight,
          ]}
          onPress={handleAddTask}>
          <Text
            style={[
              styles.addButtonText,
              colorScheme === "dark"
                ? styles.addButtonTextDark
                : styles.addButtonTextLight,
            ]}>
            Add
          </Text>
        </TouchableOpacity>
      </View>
      <DateTimePicker
        date={date}
        onDateChange={setDate}
      />
    </View>
  );
};

export default AddTask;
