import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HomeScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={['#38B5FE', '#9641FF']} // need to change this to Rita color
      style={styles.container}
    >
      <Text style={styles.text}>Welcome to Rita!</Text>
      <Button 
        title="Create a Profile Here!" 
        onPress={() => navigation.navigate('Profile')} 
        color="#fff"
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
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default HomeScreen;
