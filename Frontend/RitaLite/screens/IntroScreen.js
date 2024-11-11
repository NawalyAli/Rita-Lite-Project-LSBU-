// IntroScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function IntroScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/rita-icon(white).png')} style={styles.logo} />
      <Text style={styles.title}>Quick and simple way to log your medication</Text>
      <Text style={styles.description}>Search and select your medication and set up reminders to get notifications to prevent missing any dose.</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('ProfileCreationScreen')}>
          <LinearGradient
            colors={['#38B5FE', '#9641FF']}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Create Account</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.SignInbuttonText}>Sign in</Text>

        </TouchableOpacity>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F4D80',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 20,
    right: 150,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginBottom: 30,
  },
  createAccountButton: {
    backgroundColor: '#5A81F7',
    padding: 15,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 10,
  },
  buttonContainer: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    borderRadius: 10,
    padding: 15,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInButton: {
    borderRadius: 10,
    padding: 15,
    width: '80%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    bordercolor: 'white',
  },
  SignInbuttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default IntroScreen;
