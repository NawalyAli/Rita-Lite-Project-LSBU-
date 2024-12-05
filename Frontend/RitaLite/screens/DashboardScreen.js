// DashboardScreen.js
import React, { useEffect } from 'react';
import { TouchableOpacity, FlatList, TextInput, View, Text, StyleSheet } from 'react-native';
import Header from '../(tabs)/header';
import TabButtons from '../(tabs)/TabButtons';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Notifications from 'expo-notifications';

const DashboardScreen = ({ route, navigation }) => {
  const { firstName } = route.params || {}; // Get the first name from AboutYouScreen.js

  // Dummy data for upcoming medications
  const upcomingMeds = [
    { id: '1', name: 'Paracetamol BP 500mg', time: 'Today | 09:00-09:30 | 2024-11-21', seconds: 20 },
    { id: '2', name: 'Lofexidine BP 60mg', time: 'Today | 08:00-08:30 | 2024-11-21', seconds: 30 },
    { id: '3', name: 'Lofexidine BP 60mg', time: 'Today | 10:00-10:30 | 2024-11-21', seconds: 40 },
  ];

  useEffect(() => {
    const requestPermissions = async () => {
      const { status } = await Notifications.getPermissionsAsync();
      if (status !== 'granted') {
        await Notifications.requestPermissionsAsync();
      }
    };

    const scheduleNotifications = () => {
      upcomingMeds.forEach(async (med) => {
        await Notifications.scheduleNotificationAsync({
          content: {
            title: 'Medication Reminder',
            body: `It's time to take your ${med.name}.`,
            sound: true,
          },
          trigger: { seconds: med.seconds }, // Trigger the notification
        });
      });
    };

    requestPermissions();
    scheduleNotifications();
  }, [upcomingMeds]);

  const missedDoses = [
    { id: '1', name: 'Paracetamol BP 500mg', time: 'Thursday | 2024-11-15 | Morning' },
    { id: '2', name: 'Paracetamol BP 500mg', time: 'Monday | 2024-11-18 | Afternoon' },
    { id: '3', name: 'Paracetamol BP 500mg', time: 'Friday | 2024-11-19 | Night' },
  ];

  return (
    <View style={styles.container}>
      <Header title="Dashboard" />
      <Text style={styles.welcomeText}>Welcome back, {firstName}</Text>
      <TextInput style={styles.searchBar} placeholder="Find your medication" />
      
      <View style={styles.section}>
        <View style={styles.sectionLeft}>
          <View style={styles.iconBackground}>
            <Ionicons name="medical" size={24} color="white" style={styles.icon} />
          </View>
          <Text style={styles.sectionTitle}>Upcoming medication</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ReminderScreen', { upcomingMeds, missedDoses })
          }
        >
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.Medssection}>
        <FlatList
          data={upcomingMeds}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.medicationItem}>
              <Text style={styles.medicationName}>{item.name}</Text>
              <Text style={styles.medicationTime}>{item.time}</Text>
            </View>
          )}
        />
      </View>

      <View style={styles.alertSection}>
        <View style={styles.sectionAlertIcon}>
          <Ionicons name="alert-circle" size={24} color="#721c24" style={styles.alertIcon} />
          <Text style={styles.alertTitle}>Your recent missed doses</Text>
        </View>
        {missedDoses.map((dose) => (
          <View key={dose.id} style={styles.missedDoseItem}>
            <Text style={styles.missedDoseName}>{dose.name}</Text>
            <Text style={styles.missedDoseTime}>{dose.time}</Text>
          </View>
        ))}
      </View>

      <View style={styles.caregiverSection}>
        <Text style={styles.caregiverLabel}>Caregiver's email</Text>
        <Text style={styles.caregiverEmail}>caregiversemail@gmail.com</Text>
      </View>
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
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
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
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    backgroundColor: '#0F4D80',
  },
});
