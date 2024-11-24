// C:\Users\Nawal\OneDrive\Desktop\Rita-Lite-Project-LSBU-\Frontend\RitaLite\screens\WelcomeScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function WelcomeScreen({ navigation }) {
  return (
    <LinearGradient
      colors={['#38B5FE', '#9641FF']} // need to change this to Rita color
      style={styles.container}
    >
    <View style={styles.container}>
    <Image
        source={require('../assets/rita-logo(white).png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Your digital healthcare assistant</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('IntroScreen')}
      >
        <Text style={styles.buttonText}>Let’s get started</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.link}
        onPress={() => navigation.navigate('LoginScreen')}
      >
        <Text style={styles.linkText}>I already have an account</Text>
      </TouchableOpacity>
    </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center'},
  logo: {width: 250, height: 250, marginBottom: 10}, 
  title: { fontSize: 34, color: 'white', marginBottom: 20, fontWeight: 'bold', marginTop: 20, textAlign: 'center'},
  button: { backgroundColor: '#0F4D80', padding: 20, borderRadius: 40, marginTop: 50, alignItems: 'center', width: 350},
  buttonText: { color: 'white', fontSize: 24, fontWeight: 'bold'},
  link: { marginTop: 10 },
  linkText: { color: 'white', fontSize: 20, textDecorationLine: 'underline' },
});

export default WelcomeScreen;
