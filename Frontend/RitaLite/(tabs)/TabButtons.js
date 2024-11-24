import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const TabButtons = () => {
  const navigation = useNavigation();

  const tabs = [
    { name: 'DashboardScreen', icon: 'home', },
    { name: 'ReminderScreen', icon: 'calendar' },
    { name: '', icon: 'chatbubbles' },
    { name: '', icon: 'medkit' },
    { name: '', icon: 'person' },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => navigation.replace(tab.name)} // Navigate to the corresponding screen
        >
          <Ionicons name={tab.icon} size={24} color="#fff" />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 1,
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#0F4D80',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 5,
  },
  button: {
    alignItems: 'center',
  },
});

export default TabButtons;
