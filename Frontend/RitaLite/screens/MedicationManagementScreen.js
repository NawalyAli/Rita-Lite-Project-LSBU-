// MedicationManagementScreen.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, } from 'react-native';
import Header from '../(tabs)/header';
import TabButtons from '../(tabs)/TabButtons';

const MedicationManagementScreen = ({ navigation }) => {
  const medications = [
    { id: '1', name: 'Paracetamol BP 500mg', dose: '1 tablet', time: '08:00 AM' },
    { id: '2', name: 'Ibuprofen 200mg', dose: '1 tablet', time: '12:00 PM' },
    { id: '3', name: 'Insulin 200mg', dose: '1 tablet', time: '14:00 PM' },
    { id: '4', name: 'Aspirin 500mg', dose: '1 tablet', time: '08:00 AM' },
    { id: '5', name: 'Metformin 1000mg', dose: '1 tablet', time: '12:00 PM' },
  ];

  return (
    <View style={styles.container}>
    <Header title="Medication Management" />
      <Text style={styles.title}>Medication Management</Text>
      <Text style={styles.subtitle}> Your Most Repeated Medications </Text>

      {/* List of Medications */}
      <FlatList
        data={medications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.medicationItem}>
            <Text style={styles.medicationName}>{item.name}</Text>
            <Text style={styles.medicationDetails}>
              {item.dose} | {item.time}
            </Text>
          </View>
        )}
      />

      {/* Add New Medication Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddMedicationOptionsScreen')}
      >
        <Text style={styles.addButtonText}>Add New Medication</Text>
      </TouchableOpacity>
      
      {/* Footer with TabButtons */}
      <View style={styles.footer}>
        <TabButtons />
        </View> 
    </View>
  );
};

export default MedicationManagementScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 30,
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
  medicationDetails: {
    fontSize: 14,
    color: '#666',
  },
  addButton: {
    marginTop: 20,
    backgroundColor: '#0F4D80',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 100,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
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
