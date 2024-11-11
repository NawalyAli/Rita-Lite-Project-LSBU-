// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    // Navigate to WelcomeScreen after a delay (e.g., 3 seconds)
    const timer = setTimeout(() => {
      navigation.replace('WelcomeScreen');
    }, 3000); // Adjust the time as needed

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/rita-logo.png')} // Replace with your logo path
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Optional: Set background color
  },
  logo: {
    width: 200, // Adjust width as needed
    height: 200, // Adjust height as needed
  },
});

