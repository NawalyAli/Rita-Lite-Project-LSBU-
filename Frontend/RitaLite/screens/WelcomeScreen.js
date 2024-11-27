// C:\Users\Nawal\OneDrive\Desktop\Rita-Lite-Project-LSBU-\Frontend\RitaLite\screens\WelcomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function WelcomeScreen({ navigation }) {
  return (
    <LinearGradient
      colors={['#9641FF', '#38B5FE' ]} // need to change this to Rita color
      style={styles.container}
    >
    <View style={styles.container}>
    <Image
        source={require('../assets/rita-logo(white).png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Your digital healthcare assistant</Text>
      <Text style={styles.subtitle}>Log medication, timing, doses, get 
notification, and track your medication
history</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('IntroScreen')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.link}
        onPress={() => navigation.navigate('LoginScreen')}
      >
      </TouchableOpacity>
    </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: 
  { flex: 1, justifyContent: 'center', alignItems: 'center'},
  
  logo: 
  {width: 214.56, height: 100, marginBottom: 40, marginTop: 80}, 
  
  title: 
  { fontSize: 48, color: 'white', marginBottom: 71, fontWeight: 'bold', marginTop: 20, textAlign: 'center'},

  subtitle: 
  { fontSize: 18, color: 'white', marginBottom: 47, fontWeight: 'bold', marginTop: 10, textAlign: 'center', lineHeight: 24},
  
  button: 
  { backgroundColor: '#0F4D80', padding: 10, borderRadius: 45, marginTop: 107, alignItems: 'center', width: 308, height: 55},
  
  buttonText: 
  { color: 'white', fontSize: 24, fontWeight: 'bold'},
  
  link: 
  { marginTop: 10 },
  
  linkText: 
  { color: 'white', fontSize: 20, textDecorationLine: 'underline' },

});

export default WelcomeScreen;
