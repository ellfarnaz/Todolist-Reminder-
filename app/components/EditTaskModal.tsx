import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Modal,
  Alert,
} from "react-native";
import { useDispatch } from "react-redux";
import { updateTask } from "../redux/actions/taskActions";
import DateTimePicker from "./DateTimePicker";
import { Task } from "../redux/types";
import styles from "../styles/styles";
import useColorScheme from "../../hooks/useColorScheme";

interface EditTaskModalProps {
  task: Task;
  isVisible: boolean;
  onClose: () => void;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({
  task,
  isVisible,
  onClose,
}) => {
  const [editedTask, setEditedTask] = useState(task.text);
  const [editedDate, setEditedDate] = useState(new Date(task.date));
  const dispatch = useDispatch();
  const colorScheme = useColorScheme();

  const handleUpdate = () => {
    if (editedTask.trim() !== "") {
      const now = new Date();
      now.setSeconds(0);
      now.setMilliseconds(0);
      if (editedDate.getTime() === now.getTime()) {
        Alert.alert("Invalid Date", "Please select a future date and time.");
        return;
      }
      if (editedDate <= now) {
        Alert.alert("Invalid Date", "Please select a future date and time.");
        return;
      }
      dispatch(updateTask(task.id, editedTask, editedDate));
      onClose();
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}>
      <View
        style={[
          styles.centeredView,
          colorScheme === "dark"
            ? styles.centeredViewDark
            : styles.centeredViewLight,
        ]}>
        <View
          style={[
            styles.modalView,
            colorScheme === "dark"
              ? styles.modalViewDark
              : styles.modalViewLight,
          ]}>
          <TextInput
            style={[
              styles.modalInput,
              colorScheme === "dark"
                ? styles.modalInputDark
                : styles.modalInputLight,
            ]}
            value={editedTask}
            onChangeText={setEditedTask}
            placeholder="Edit task"
            placeholderTextColor={colorScheme === "dark" ? "#ccc" : "#666"}
          />
          <DateTimePicker
            date={editedDate}
            onDateChange={setEditedDate}
          />
          <TouchableOpacity
            style={[
              styles.updateButton,
              styles.modalButton,
              colorScheme === "dark"
                ? styles.updateButtonDark
                : styles.updateButtonLight,
            ]}
            onPress={handleUpdate}>
            <Text
              style={[
                styles.textStyle,
                colorScheme === "dark"
                  ? styles.textStyleDark
                  : styles.textStyleLight,
              ]}>
              Update Task
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.cancelButton,
              styles.modalButton,
              colorScheme === "dark"
                ? styles.cancelButtonDark
                : styles.cancelButtonLight,
            ]}
            onPress={onClose}>
            <Text
              style={[
                styles.textStyle,
                colorScheme === "dark"
                  ? styles.textStyleDark
                  : styles.textStyleLight,
              ]}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default EditTaskModal;
