import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../(tabs)/header';
import TabButtons from '../(tabs)/TabButtons';

const AssistantScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Assistant" />
      <View style={styles.content}>
        <Text style={styles.greetingText}>
          Hello, I am your virtual medication assistant. Select your question below.
        </Text>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="calendar-outline" size={24} color="#0F4D80" />
          <Text style={styles.cardText}>About Reminder</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="chatbubble-ellipses-outline" size={24} color="#0F4D80" />
          <Text style={styles.cardText}>Get Advice</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="document-outline" size={24} color="#0F4D80" />
          <Text style={styles.cardText}>Browse Document</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Ionicons name="star-outline" size={24} color="#0F4D80" />
          <Text style={styles.cardText}>Review the App</Text>
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
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  cardText: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 10,
    color: '#0F4D80',
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
