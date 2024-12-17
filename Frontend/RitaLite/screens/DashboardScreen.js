// DashboardScreen.js
import React, { useEffect, useState } from 'react';
import { TouchableOpacity, ScrollView, TextInput, View, Text, StyleSheet } from 'react-native';
import Header from '../(tabs)/header';
import TabButtons from '../(tabs)/TabButtons';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Notifications from 'expo-notifications';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Alert } from 'react-native';

const DashboardScreen = ({ route, navigation }) => {
  const { firstName } = route.params || {};

  // Default medications
  const defaultDueTodayMeds = [
    { id: '1', name: 'Paracetamol BP 500mg', time: 'Today | 09:00-09:30 | 2024-11-21', checked: false },
    { id: '2', name: 'Lofexidine BP 60mg', time: 'Today | 08:00-08:30 | 2024-11-21', checked: false },
  ];

  const defaultUpcomingMeds = [
    { id: '3', name: 'Ibuprofen 200mg', time: 'Tomorrow | 10:00-10:30 | 2024-11-22', checked: false },
    { id: '4', name: 'Metformin 500mg', time: 'Friday | 14:00-14:30 | 2024-11-23', checked: false },
  ];

  const defaultMissedDoses = [
    { id: '1', name: 'Paracetamol BP 500mg', time: 'Thursday | 2024-11-15 | Morning' },
    { id: '2', name: 'Paracetamol BP 500mg', time: 'Monday | 2024-11-18 | Afternoon' },
    { id: '3', name: 'Paracetamol BP 500mg', time: 'Friday | 2024-11-19 | Night' },
  ];

  // State to track missed doses, due today medications, and upcoming medications
  const [dueTodayMeds, setDueTodayMeds] = useState(defaultDueTodayMeds);
  const [upcomingMeds, setUpcomingMeds] = useState(defaultUpcomingMeds);
  const [missedDoses, setMissedDoses] = useState(defaultMissedDoses);

  const toggleCheckDueToday = async (id) => {
    const medication = dueTodayMeds.find((med) => med.id === id);
  
    if (medication) {
      Alert.alert(
        "Confirm Medication as Taken",
        `Are you sure you want to mark "${medication.name}" as taken?`,
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "Confirm",
            onPress: async () => {
              const updatedMeds = dueTodayMeds.map((med) => {
                if (med.id === id) {
                  med.checked = true; // Mark as checked
                  if (med.notificationId) {
                    Notifications.cancelScheduledNotificationAsync(med.notificationId); // Cancel the scheduled notification
                  }
                }
                return med;
              }).filter((med) => !med.checked); // Remove checked medications from the list
  
              setDueTodayMeds(updatedMeds);
              await AsyncStorage.setItem('dueTodayMeds', JSON.stringify(updatedMeds)); // Save to AsyncStorage
            },
          },
        ]
      );
    }
  };

  const toggleCheckMissed = async (id) => {
    const updatedMissedDoses = missedDoses.filter((dose) => dose.id !== id);
    setMissedDoses(updatedMissedDoses);
    await AsyncStorage.setItem('missedDoses', JSON.stringify(updatedMissedDoses)); // Save to AsyncStorage
  };

  useEffect(() => {
    const requestPermissions = async () => {
      const { status } = await Notifications.getPermissionsAsync();
      if (status !== 'granted') {
        await Notifications.requestPermissionsAsync();
      }
    };

    const scheduleNotifications = () => {
      // Only schedule notifications if there are unchecked medications
      const uncheckedMeds = dueTodayMeds.filter((med) => !med.checked);
      if (uncheckedMeds.length > 0) {
        uncheckedMeds.forEach(async (med) => {
          if (!med.notificationId) {
            const notificationId = await Notifications.scheduleNotificationAsync({
              content: {
                title: 'Medication Reminder',
                body: `It's time to take your ${med.name}.`,
                sound: true,
                data: { id: med.id },
              },
              trigger: { seconds: 2000 },
            });

            // Save the notification ID for cancellation later
            med.notificationId = notificationId;
          }
        });
      } else {
        // Cancel all notifications if no unchecked medications are left
        dueTodayMeds.forEach(async (med) => {
          if (med.notificationId) {
            await Notifications.cancelScheduledNotificationAsync(med.notificationId);
            med.notificationId = null; // Reset the notification ID
          }
        });
      }
    };

    requestPermissions();
    scheduleNotifications();
  }, [dueTodayMeds]);

  useEffect(() => {
    const loadMedications = async () => {
      const storedDueTodayMeds = await AsyncStorage.getItem('dueTodayMeds');
      const storedUpcomingMeds = await AsyncStorage.getItem('upcomingMeds');
      const storedMissedDoses = await AsyncStorage.getItem('missedDoses');
      if (storedDueTodayMeds) {
        setDueTodayMeds(JSON.parse(storedDueTodayMeds));
      }
      if (storedUpcomingMeds) {
        setUpcomingMeds(JSON.parse(storedUpcomingMeds));
      }
      if (storedMissedDoses) {
        setMissedDoses(JSON.parse(storedMissedDoses));
      }
    };
    loadMedications();
  }, []);


 // AsyncStorage.clear();


  return (
    <View style={styles.container}>
      <Header navigation={navigation} title="Dashboard" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.welcomeText}>Welcome back, {firstName}</Text>
      <TextInput style={styles.searchBar} placeholder="Find your medication" />

      {/* Due Today Medications Section */}
      <View style={styles.section}>
          <View style={styles.sectionLeft}>
            <View style={styles.iconBackground}>
              <Ionicons name="medical" size={24} color="white" style={styles.icon} />
            </View>
            <Text style={styles.sectionTitle}>Due Today Medication</Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ReminderScreen', { dueTodayMeds, missedDoses })
            }
          >
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.Medssection}>
          {dueTodayMeds.length === 0 ? (
            <Text style={styles.noUpcomingText}>No Medications Due Today</Text>
          ) : (
            dueTodayMeds.map((item) => (
              <View key={item.id} style={styles.medicationItem}>
                <View style={styles.medicationRow}>
                  <Text style={styles.medicationName}>{item.name}</Text>
                  <TouchableOpacity onPress={() => toggleCheckDueToday(item.id)}>
                    <Ionicons
                      name={item.checked ? 'checkbox' : 'square-outline'}
                      size={24}
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
                <Text style={styles.medicationTime}>{item.time}</Text>
              </View>
            ))
          )}
        </ScrollView>

        {/* Upcoming Medications Section */}
        <View style={styles.section}>
          <View style={styles.sectionLeft}>
            <View style={styles.iconBackground}>
              <Ionicons name="calendar" size={24} color="white" style={styles.icon} />
            </View>
            <Text style={styles.sectionTitle}>Upcoming Medication</Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ReminderScreen', { dueTodayMeds, missedDoses })
            }
          >
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.Medssection}>
          {upcomingMeds.length === 0 ? (
            <Text style={styles.noUpcomingText}>No Upcoming Medications</Text>
          ) : (
            upcomingMeds.map((item) => (
              <View key={item.id} style={styles.medicationItem}>
                <View style={styles.medicationRow}>
                  <Text style={styles.medicationName}>{item.name}</Text>
                </View>
                <Text style={styles.medicationTime}>{item.time}</Text>
                
              </View>
            ))
          )}
        </ScrollView>

      {/* Missed Doses Section */}
      {missedDoses.length > 0 && (
        <View style={styles.alertSection}>
          <View style={styles.sectionAlertIcon}>
            <Ionicons name="alert-circle" size={24} color="#721c24" style={styles.alertIcon} />
            <Text style={styles.alertTitle}>Your recent missed doses</Text>
          </View>
          {missedDoses.map((dose) => (
            <View key={dose.id} style={styles.missedDoseItem}>
              <View style={styles.medicationRow}>
                <Text style={styles.missedDoseName}>{dose.name}</Text>
                <TouchableOpacity onPress={() => toggleCheckMissed(dose.id)}>
                  <Ionicons name="checkbox-outline" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <Text style={styles.missedDoseTime}>{dose.time}</Text>
            </View>
          ))}
        </View>
      )}

      <View style={styles.caregiverSection}>
        <View style={styles.caregiverHeader}>
          <Text style={styles.caregiverLabel}>Caregiver's email</Text>
          <TouchableOpacity onPress={() => navigation.navigate('AddCaregiverScreen')}>
            <Ionicons name="add-circle-outline" size={24} color="#007bff" />
          </TouchableOpacity>
        </View>
        <Text style={styles.caregiverEmail}>caregiversemail@gmail.com</Text>
      </View>

      </ScrollView>

      {/* Fixed Tab Buttons */}
      <View style={styles.footer}>
        <TabButtons />
      </View>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  medicationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    padding: 10,
  },
  searchBar: {
    backgroundColor: '#e6e6e6',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  seeAll: {
    color: '#007bff',
  },
  medicationItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  medicationName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  medicationTime: {
    fontSize: 14,
    color: '#666',
  },
  alertSection: {
    backgroundColor: '#f8d7da',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  alertTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#721c24',
    marginBottom: 10,
  },
  missedDoseItem: {
    marginBottom: 10,
  },
  missedDoseName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  missedDoseTime: {
    fontSize: 14,
    color: '#666',
  },
  caregiverSection: {
    marginTop: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  caregiverLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  caregiverEmail: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007bff',
    backgroundColor: '#BBBFBF',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  placeholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },
  sectionAlertIcon: {
    flexDirection: 'row',
    alignContent: 'center',
  },

  alertIcon: {
    borderRadius: 20,
  },
  
  Medssection: {
    backgroundColor: '#BBBFBF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    paddingBottom: 10,
  },
  iconBackground: {
    backgroundColor: '#0F4D80',
    padding: 5,
    borderRadius: 20,
  },
  caregiverHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 5,
  },
  streakContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  streakTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  noUpcomingText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#888',
    marginTop: 10,
    alignContent: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    backgroundColor: '#0F4D80',
  },
});
