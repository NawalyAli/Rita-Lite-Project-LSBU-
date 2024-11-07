import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const ProfileScreen = () => {
  const [name, setName] = useState('');

  return (
    <LinearGradient
      colors={['#6AC3FF', '#9457EB']}
      style={styles.container}
    >
      {/* Profile Icon */}
      <FontAwesome name="user-circle" size={100} color="#fff" style={styles.icon} />

      {/* Name Input Box */}
      <Text style={styles.label}>Enter your name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        placeholderTextColor="#ccc"
        value={name}
        onChangeText={setName}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 8,
    fontSize: 16,
    textAlign: 'center',
    color: '#fff', // Text color
  },
});

export default ProfileScreen;

