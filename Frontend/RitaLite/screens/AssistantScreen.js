import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../(tabs)/header';
import TabButtons from '../(tabs)/TabButtons';

const AssistantScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="Assistant" />
      <View style={styles.content}>
        <Text style={styles.greetingText}>
          Hello, I am your virtual medication assistant. Select your question below.
        </Text>
        
        {/* Card for About Reminder */}
        <TouchableOpacity style={styles.card}>
          <Ionicons name="calendar-outline" size={24} color="#0F4D80" />
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>About Reminder</Text>
            <Text style={styles.cardSubText}>Learn how to set or manage your medication reminders.</Text>
          </View>
        </TouchableOpacity>
        
        {/* Card for Get Advice */}
        <TouchableOpacity style={styles.card}>
          <Ionicons name="chatbubble-ellipses-outline" size={24} color="#0F4D80" />
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>Get Advice</Text>
            <Text style={styles.cardSubText}>Ask for help or advice on managing your medications.</Text>
          </View>
        </TouchableOpacity>
        
        {/* Card for Browse Document */}
        <TouchableOpacity style={styles.card}>
          <Ionicons name="document-outline" size={24} color="#0F4D80" />
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>Browse Document</Text>
            <Text style={styles.cardSubText}>Access user manuals and helpful guides.</Text>
          </View>
        </TouchableOpacity>
        
        {/* Card for Review the App */}
        <TouchableOpacity style={styles.card}>
          <Ionicons name="star-outline" size={24} color="#0F4D80" />
          <View style={styles.cardTextContainer}>
            <Text style={styles.cardText}>Review the App</Text>
            <Text style={styles.cardSubText}>Provide your feedback to help us improve.</Text>
          </View>
        </TouchableOpacity>
      </View>
      
      <View style={styles.footer}>
        <TabButtons />
      </View>
    </View>
  );
};

export default AssistantScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  content: {
    marginTop: 10,
    padding: 10,
  },
  greetingText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    marginBottom: 20,
    marginTop: 20,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 20,
  },
  cardTextContainer: {
    marginLeft: 10,
    flex: 1,
  },
  cardText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0F4D80',
  },
  cardSubText: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 15,
    backgroundColor: '#0F4D80',
  },
});
