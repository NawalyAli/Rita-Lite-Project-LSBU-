import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Header from '../(tabs)/header';
import TabButtons from '../(tabs)/TabButtons';

const ReminderScreen = ({ route }) => {
  const { upcomingMeds = [], missedDoses = [] } = route.params || {}; // Safely access route parameters

  const [selectedDate, setSelectedDate] = useState(null);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const groupMedsByDate = (medications) => {
    const grouped = {};
    medications.forEach((med) => {
      const date = med.time.split('|')[2].trim(); // Extract the date
      if (!grouped[date]) grouped[date] = [];
      grouped[date].push(med);
    });
    return grouped;
  };

  const medsByDate = groupMedsByDate([...upcomingMeds, ...missedDoses]);

  return (
    <View style={styles.container}>
    <Header title="Reminder" />
      <Text style={styles.title}>Reminder</Text>
      <View style={styles.content}>
      <Calendar
        markedDates={{
          ...Object.keys(medsByDate).reduce((acc, date) => {
            acc[date] = { marked: true, dotColor: 'blue' };
            return acc;
          }, {}),
          [selectedDate]: { selected: true, selectedColor: '#007bff' },
        }}
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
          setBottomSheetVisible(true);
        }}
        theme={{
          arrowColor: '#007bff',
          todayTextColor: '#007bff',
        }}
      />

      {bottomSheetVisible && selectedDate && (
        <View style={styles.bottomSheet}>
          <Text style={styles.sectionTitle}>
            Medications on {selectedDate}
          </Text>
          <FlatList
            data={medsByDate[selectedDate] || []}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.medicationItem}>
                <Text style={styles.medicationName}>{item.name}</Text>
                <Text style={styles.medicationTime}>{item.time}</Text>
              </View>
            )}
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setBottomSheetVisible(false)}
          >
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      )}
      </View>

      {/* Fixed Tab Buttons */}
      <View style={styles.footer}>
        <TabButtons />
      </View>
    </View>
  );
};

export default ReminderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: '50%',
    marginBottom: 50,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  medicationItem: {
    backgroundColor: '#e6e6e6',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  medicationName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  medicationTime: {
    fontSize: 14,
    color: '#666',
  },
  closeButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  content: {
    flex: 1, // Takes available space above the footer
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
