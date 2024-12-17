// NewMedicationScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../(tabs)/header';
import TabButtons from '../(tabs)/TabButtons';

const NewMedicationScreen = ({ navigation }) => {
  const [medicationName, setMedicationName] = useState('');
  const [dose, setDose] = useState('');
  const [time, setTime] = useState('');
  const [messageVisible, setMessageVisible] = useState(false); // Message state

  const handleDone = () => {
    if (medicationName && dose && time) {
      setMessageVisible(true); // Show the message
      setTimeout(() => setMessageVisible(false), 3000); // Hide after 3 seconds

      // Optionally clear the inputs
      setMedicationName('');
      setDose('');
      setTime('');
    }
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} title="New Medication" />
      <Text style={styles.title}>New Medication</Text>
      <Text style={styles.subtitle}>Set up your new medicine now!</Text>

      {/* Medication Name Input */}
      <View style={styles.inputContainer}>
        <View style={styles.row}>
          <Ionicons name="medkit-outline" size={24} color="#0F4D80" />
          <Text style={styles.inputTitle}>Medication Name</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter the medication name"
          value={medicationName}
          onChangeText={setMedicationName}
        />
      </View>

      {/* Dose Input */}
      <View style={styles.inputContainer}>
        <View style={styles.row}>
          <Ionicons name="flask-outline" size={24} color="#0F4D80" />
          <Text style={styles.inputTitle}>Dose Quantity</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter the dose quantity"
          value={dose}
          onChangeText={setDose}
        />
      </View>

      {/* Time Input */}
      <View style={styles.inputContainer}>
        <View style={styles.row}>
          <Ionicons name="time-outline" size={24} color="#0F4D80" />
          <Text style={styles.inputTitle}>Time of Medication</Text>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Enter the time of medication"
          value={time}
          onChangeText={setTime}
        />
      </View>

      {/* Done Button */}
      <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>

      {/* Success Message */}
      {messageVisible && (
        <View style={styles.successMessage}>
          <Text style={styles.successText}>New Medication added!</Text>
        </View>
      )}

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
  inputContainer: {
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  inputTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0F4D80',
    marginLeft: 8,
  },
  input: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 10,
  },
  doneButton: {
    backgroundColor: '#0F4D80',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 50,
  },
  doneButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  successMessage: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#d4edda',
    borderRadius: 10,
    alignItems: 'center',
  },
  successText: {
    color: '#155724',
    fontSize: 16,
    fontWeight: '600',
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
