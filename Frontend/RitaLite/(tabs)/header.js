// Header.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Header({ navigation, title }) {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
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
    paddingVertical: 1,
    paddingHorizontal: 20,
    backgroundColor: '#F2F2F2',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  logo: {
    width: 100,
    height: 100,
  },
});
