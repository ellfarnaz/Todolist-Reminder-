import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { store } from "@/app/redux/store";
import AddTask from "@/app/components/AddTask";
import TaskList from "@/app/components/TaskList";
import styles from "@/app/styles/styles";
import useColorScheme from "@/hooks/useColorScheme";
import { registerForPushNotificationsAsync } from "@/app/utils/notifications";
import { loadTasks, saveTasks } from "@/app/redux/actions/taskActions";
import { SafeAreaView } from "react-native-safe-area-context";

const App: React.FC = () => {
  const colorScheme = useColorScheme();

  useEffect(() => {
    registerForPushNotificationsAsync();
    loadTasks()(store.dispatch);
  }, []);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      saveTasks()(store.dispatch, store.getState);
    });
    return unsubscribe;
  }, []);

  return (
    <SafeAreaView
      style={[
        styles.container,
        colorScheme === "dark" ? styles.containerDark : styles.containerLight,
      ]}>
      <Text
        style={[
          styles.title,
          colorScheme === "dark" ? styles.titleDark : styles.titleLight,
        ]}>
        Todo List Reminder
      </Text>
      <AddTask />
      <TaskList />
    </SafeAreaView>
  );
};

export default App;
