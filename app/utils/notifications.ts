import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export const scheduleNotification = async (
  id: string,
  text: string,
  date: Date
) => {
  const trigger = new Date(date);
  trigger.setSeconds(0);
  trigger.setMilliseconds(0);

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Task Reminder",
      body: text,
      sound: "default",
    },
    trigger,
    identifier: id,
  });
};

export const cancelNotification = async (id: string) => {
  await Notifications.cancelScheduledNotificationAsync(id);
};

export const registerForPushNotificationsAsync = async () => {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  if (finalStatus !== "granted") {
    alert("Failed to get push token for push notification!");
    return;
  }
};
