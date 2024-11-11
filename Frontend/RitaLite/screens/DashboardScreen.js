// DashboardScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const scheduledMedications = [
  {
    id: '1',
    name: 'Blood Pressure Medication',
    time: '8:00 AM',
    date: 'Sunday, 12 June',
    doctor: 'Dr. Smith',
  },
  {
    id: '2',
    name: 'Diabetes Medication',
    time: '12:00 PM',
    date: 'Sunday, 12 June',
    doctor: 'Dr. Bessie Coleman',
  },
  {
    id: '3',
    name: 'Pain Reliever',
    time: '5:00 PM',
    date: 'Sunday, 12 June',
    doctor: 'Dr. Baba Didrikson',
  },
];

export default function DashboardScreen({ navigation }) {
  const renderMedicationItem = ({ item }) => (
    <TouchableOpacity style={styles.medicationItem} onPress={() => navigation.navigate('MedicationDetails', { medicationId: item.id })}>
      <Text style={styles.medicationName}>{item.name}</Text>
      <Text style={styles.medicationTime}>{item.time}</Text>
      <Text style={styles.medicationDate}>{item.date}</Text>
      <Text style={styles.doctorName}>{item.doctor}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello, James</Text>
      <Text style={styles.header}>Upcoming Medications</Text>

      <FlatList
        data={scheduledMedications}
        renderItem={renderMedicationItem}
        keyExtractor={(item) => item.id}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddMedication')}
      >
        <Ionicons name="add-circle" size={70} color="#4CAF50" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  medicationItem: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#E0F7FA',
    marginBottom: 10,
  },
  medicationName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  medicationTime: {
    fontSize: 16,
    color: '#333',
  },
  medicationDate: {
    fontSize: 14,
    color: '#888',
  },
  doctorName: {
    fontSize: 14,
    color: '#555',
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
  },
});
