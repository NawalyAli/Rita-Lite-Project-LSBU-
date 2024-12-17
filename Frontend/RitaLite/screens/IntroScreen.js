// IntroScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function IntroScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/rita-icon(white).png')} style={styles.logo} />
      <Text style={styles.title}>Quick and simple way log your medication</Text>
      <Text style={styles.description}>Search and select your medication and set up reminders to get notification prevent misses any dose.</Text>

      <View style={styles.paginationContainer}>
        <View style={styles.paginationDot} />
        <View style={styles.paginationDot} />
        <View style={[styles.paginationDot, styles.activePaginationDot]} />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileCreationScreen')}>
          <LinearGradient
            colors={['#38B5FE', '#9641FF']}
            style={styles.createAccountButton}
          >
            <Text style={styles.buttonText}>Create Account</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.signInButtonText}>Sign in</Text>
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
    paddingHorizontal: 20,
  },
  logo: {
    width: 45,
    height: 41.86,
    marginBottom: 30,
    marginRight: 250,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    marginBottom: 30,
  },
  description: {
    fontSize: 14,
    color: 'white',
    textAlign: 'left',
    marginBottom: 30,
    lineHeight: 20,
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  activePaginationDot: {
    backgroundColor: '#FFFFFF',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 100,
    paddingVertical: 40,
    justifyContent:'center',
    
  },
  createAccountButton: {
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 8,
    alignItems: 'center',

  },
  signInButton: {
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: '#1E1E1E',
    marginLeft: 60,
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signInButtonText: {
    color: '#0F4D80',
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 30,
  },
});

export default IntroScreen;
