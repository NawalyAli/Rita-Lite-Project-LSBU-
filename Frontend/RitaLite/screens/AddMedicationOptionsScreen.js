import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../(tabs)/header';
import TabButtons from '../(tabs)/TabButtons';

const AddMedicationOptionsScreen = ({ navigation }) => {
  const [manualSetupSelected, setManualSetupSelected] = useState(false); // Track if Manual Set Up is selected

  return (
    <View style={styles.container}>
      <Header title="Add Medication" />
      <Text style={styles.title}>Add Medication</Text>
      <Text style={styles.subtitle}>
        You can either manually add medication or just scan the QR code based on your data.
      </Text>

      {/* Scan QR Code Button */}
      <TouchableOpacity style={styles.option} onPress={() => {}}>
        <Ionicons name="qr-code-outline" size={24} color="#000" />
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionTitle}>Scan QR Code</Text>
          <Text style={styles.optionSubtitle}>
            Set up medication/supplements based on QR code scan, intuitively.
          </Text>
        </View>
      </TouchableOpacity>

      {/* Manual Set Up Button */}
      <TouchableOpacity
        style={[
          styles.option,
          manualSetupSelected ? styles.selectedOption : null, // Highlight if selected
        ]}
        onPress={() => setManualSetupSelected(true)} // Mark Manual Set Up as selected
      >
        <Ionicons name="settings-outline" size={24} color="#000" />
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionTitle}>Manual Set Up</Text>
          <Text style={styles.optionSubtitle}>
            Input your medication manually into our database, and we’ll handle the rest.
          </Text>
        </View>
      </TouchableOpacity>

      {/* Continue Button */}
      <TouchableOpacity
        style={[
          styles.continueButton,
          { backgroundColor: manualSetupSelected ? '#0F4D80' : '#ccc' }, // Disable if Manual Set Up is not selected
        ]}
        onPress={() => {
          if (manualSetupSelected) {
            navigation.navigate('NewMedicationScreen'); // Navigate only if Manual Set Up is selected
          }
        }}
        disabled={!manualSetupSelected} // Disable if Manual Set Up is not selected
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footer}>
        <TabButtons />
      </View>
    </View>
  );
};

export default AddMedicationOptionsScreen;

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
    marginTop: 10,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  selectedOption: {
    borderColor: '#0F4D80',
    borderWidth: 2,
  },
  optionTextContainer: {
    marginLeft: 10,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  optionSubtitle: {
    fontSize: 14,
    color: '#555',
  },
  continueButton: {
    color: '#0F4D80',
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 300,
  },
  continueButtonText: {
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
