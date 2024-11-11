import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../(tabs)/header';

export default function AddressScreen({ navigation }) {
  const [postcode, setPostcode] = useState('');

  const handleContinue = () => {
    // Navigate to the next screen or perform validation
    // Replace 'NextScreen' with the actual screen name you want to navigate to
    navigation.navigate('LoginScreen');
  };

  const handleEnterAddressManually = () => {
    // Navigate to the manual address entry screen or prompt
    navigation.navigate('ManualAddressScreen'); // Replace with actual screen if different
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title="Your address details" />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        
        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBar} />
          <Text style={styles.progressText}>60% complete</Text>
        </View>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Your address details</Text>
          <Text style={styles.subtitle}>
            Your address should be the one registered with your GP. This may not be the address you currently live at.
          </Text>
        </View>

        {/* Postcode Input */}
        <View style={styles.inputContainer}>
          <Ionicons name="home-outline" size={20} color="#333" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Type your postcode"
            value={postcode}
            onChangeText={setPostcode}
          />
        </View>

        {/* Continue Button */}
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

        {/* Enter Address Manually Button */}
        <TouchableOpacity style={styles.manualButton} onPress={handleEnterAddressManually}>
          <Text style={styles.manualButtonText}>Enter address manually</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  progressContainer: {
    marginVertical: 10,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  progressBar: {
    height: 6,
    width: '60%',
    backgroundColor: '#4F5D75',
    borderRadius: 3,
  },
  progressText: {
    marginLeft: 10,
    color: '#4F5D75',
    fontSize: 14,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: '#1E3A8A',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  manualButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    borderColor: '#1E3A8A',
    borderWidth: 1,
  },
  manualButtonText: {
    color: '#1E3A8A',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
