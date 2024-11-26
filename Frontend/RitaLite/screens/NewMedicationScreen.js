import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Header from '../(tabs)/header';
import TabButtons from '../(tabs)/TabButtons';

const NewMedicationScreen = () => {
  const [medicationName, setMedicationName] = useState('');
  const [dose, setDose] = useState('');
  const [time, setTime] = useState('');

  return (
    <View style={styles.container}>
     <Header title="New Medication" />
      <Text style={styles.title}>New Medication</Text>
      <Text style={styles.subtitle}>Set up your new medicine now!</Text>
      <TextInput
        style={styles.input}
        placeholder="Medication Name"
        value={medicationName}
        onChangeText={setMedicationName}
      />
      <TextInput
        style={styles.input}
        placeholder="Dose Quantity"
        value={dose}
        onChangeText={setDose}
      />
      <TextInput
        style={styles.input}
        placeholder="Time of Medication"
        value={time}
        onChangeText={setTime}
      />
      <TouchableOpacity style={styles.doneButton}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <TabButtons />
        </View> 
    </View>
  );
};

export default NewMedicationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    marginTop: 15,
  },
  doneButton: {
    backgroundColor: '#0F4D80',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 300,
  },
  doneButtonText: {
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
