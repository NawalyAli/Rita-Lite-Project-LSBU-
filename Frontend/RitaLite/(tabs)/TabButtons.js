import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, useNavigationState } from '@react-navigation/native';

const TabButtons = () => {
  const navigation = useNavigation();

  // Get the current route name
  const activeRoute = useNavigationState((state) => state.routes[state.index].name);

  const tabs = [
    { name: 'ReminderScreen', icon: 'calendar' },
    { name: 'AssistantScreen', icon: 'chatbubbles' },
    { name: 'DashboardScreen', icon: 'home' },
    { name: 'MedicationManagementScreen', icon: 'medkit' },
    { name: 'ProfileSettingsScreen', icon: 'person' },
  ];

  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.button,
            activeRoute === tab.name && styles.activeButton, // Add glowing effect for active tab
          ]}
          onPress={() => navigation.replace(tab.name)} // Navigate to the corresponding screen
        >
          <Ionicons
            name={tab.icon}
            size={28}
            color={activeRoute === tab.name ? '#FFD700' : '#fff'} // Highlight icon color for active tab
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
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
  activeButton: {
    // backgroundColor: 'rgba(183, 0, 255, 0.3)', // Glowing background effect
    borderRadius: 20,
    padding: 5,
    shadowColor: '#FFD700', // Glowing shadow effect
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
});

export default TabButtons;
