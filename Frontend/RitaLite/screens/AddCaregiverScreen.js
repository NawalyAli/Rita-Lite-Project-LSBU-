import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AddCaregiverScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleSave = () => {
    // Save the caregiver email logic (e.g., save to backend or state)
    console.log('Caregiver Email:', email);
    navigation.goBack(); // Navigate back to the DashboardScreen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Caregiver's Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Caregiver's email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddCaregiverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    backgroundColor: '#e6e6e6',
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#0F4D80',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
