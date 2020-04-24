import { AsyncStorage } from "react-native";
import { Notifications, Permissions } from "expo";

const NOTIFICATION_KEY = "FlashCards:notifications";

export const generateGuidId = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const createNotification = () => ({
  title: "Don't forget to practice",
  body: "Your flash cards want to see you today.",
  ios: {
    sound: false
  },
  android: {
    sound: false,
    vibrate: false,
    priority: "high",
    sticky: false
  }
});

export const setLocalNotification = () => {
  AsyncStorage.getItem(NOTIFICATION_KEY)
    .then(JSON.parse)
    .then(data => {
      if (data === null) {
        askForPermissions();
      }
    });
};

export const clearLocalNotification = () => {
  AsyncStorage.removeItem(NOTIFICATION_KEY).then(
    Notifications.cancelAllScheduledNotificationsAsync()
  );
};

const askForPermissions = () => {
  Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
    if (status === "granted") {
      Notifications.cancelAllScheduledNotificationsAsync();
      let tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      tomorrow.setHours(12);
      tomorrow.setMinutes(30);

      Notifications.scheduleLocalNotificationAsync(createNotification(), {
        time: tomorrow,
        repeat: "day"
      });

      AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
    }
  });
};
