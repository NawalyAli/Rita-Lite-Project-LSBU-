// Header.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header({ navigation, title }) {
  const handleGoBack = () => {
    if (navigation && navigation.goBack) {
      navigation.goBack();
    } else {
      console.warn('No navigation prop provided to Header component.');
    }
  };
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={handleGoBack}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>
      
      {/* Rita Logo */}
      <Image
        source={require('../assets/rita-logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Empty space to balance the layout */}
      <View style={{ width: 24 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
    paddingHorizontal: 20,
    backgroundColor: '#f7f7f7',
  },
  logo: {
    width: 100,
    height: 100,
  },
});
