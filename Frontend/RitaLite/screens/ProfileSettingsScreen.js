import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../(tabs)/header';
import TabButtons from '../(tabs)/TabButtons';

const ProfileSettingsScreen = () => {

  return (
    <View style={styles.container}>
      <Header title="Profile Settings" />
      <View style={styles.profileSection}>
        <Text style={styles.profileName}>User</Text>
        <Text style={styles.profileDetails}>64 years old | Male | Diabetes | Nut allergy</Text>
        <View style={styles.contactDetails}>
          <Text style={styles.contactText}>youremail@gmail.com</Text>
          <Text style={styles.contactText}>+447632475143</Text>
          <Text style={styles.contactText}>103 Borough Rd, London SE1 0AA</Text>
        </View>
      </View>
      <View style={styles.historySection}>
        <Text style={styles.historyTitle}>Medication History</Text>
        <Text style={styles.historyDetails}>
          Your recent medication adherence shows that doses were missed on days 5, 8, and 20. 
          Maintaining a consistent schedule is vital for effective treatment.
        </Text>
        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadButtonText}>Download your file here</Text>
          <Ionicons name="download-outline" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.actionSection}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="settings-outline" size={20} color="#000" />
          <Text style={styles.actionButtonText}>Setting</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="log-out-outline" size={20} color="#000" />
          <Text style={styles.actionButtonText}>Sign out</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TabButtons />
      </View>
    </View>
  );
};

export default ProfileSettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    padding: 20,
  },
  profileSection: {
    padding: 20,
    alignItems: 'center',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0F4D80',
    marginBottom: 5,
  },
  profileDetails: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  contactDetails: {
    alignItems: 'center',
  },
  contactText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  historySection: {
    padding: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    margin: 20,
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historyDetails: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#0F4D80',
    padding: 15,
    borderRadius: 10,
  },
  downloadButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  actionSection: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 10,
    width: '45%',
    justifyContent: 'center',
  },
  actionButtonText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#000',
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
