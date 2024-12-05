import * as Notifications from 'expo-notifications';

const scheduleMedicationReminder = (medicationName, time) => {
  Notifications.scheduleNotificationAsync({
    content: {
      title: 'Medication Reminder',
      body: `It's time to take your ${medicationName}.`,
      sound: true,
    },
    trigger: {
      seconds: time, // Set delay in seconds
    },
  });
};
