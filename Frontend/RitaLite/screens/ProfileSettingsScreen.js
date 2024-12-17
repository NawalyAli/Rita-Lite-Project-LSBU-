// ProfileSettingsScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Circle, Text as SvgText } from 'react-native-svg';
import { Ionicons } from '@expo/vector-icons';
import Header from '../(tabs)/header';
import TabButtons from '../(tabs)/TabButtons';

const ProfileSettingsScreen = ({ navigation }) => {
  // Example data for streak system: missed days in red
  const streakDays = Array.from({ length: 30 }, (_, i) => i + 1); // Days 1-30
  const missedDays = [5, 8, 20]; // Example missed days

  return (
    <View style={styles.container}>
      <Header title="Profile Settings" />

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Text style={styles.profileName}>Tester</Text>
        <Text style={styles.profileDetails}>64 years old | Male | Diabetes | Nut allergy</Text>
        <View style={styles.contactDetails}>
          <Text style={styles.contactText}>youremail@gmail.com</Text>
          <Text style={styles.contactText}>+447632475143</Text>
          <Text style={styles.contactText}>103 Borough Rd, London SE1 0AA</Text>
        </View>
      </View>

      {/* Circular Streak System */}
      <View style={styles.streakContainer}>
        <Text style={styles.sectionTitle}>Medication Streak</Text>
        <Svg height="200" width="200" viewBox="0 0 200 200">
          {streakDays.map((day, index) => {
            const angle = (index / streakDays.length) * 360;
            const radius = 80;
            const x = 100 + radius * Math.sin((angle * Math.PI) / 180);
            const y = 100 - radius * Math.cos((angle * Math.PI) / 180);
            return (
              <React.Fragment key={day}>
                <Circle
                  cx={x}
                  cy={y}
                  r={10}
                  fill={missedDays.includes(day) ? 'red' : '#0F4D80'}
                />
                <SvgText
                  x={x}
                  y={y + 4}
                  fontSize="8"
                  fill="white"
                  textAnchor="middle"
                >
                  {day}
                </SvgText>
              </React.Fragment>
            );
          })}
        </Svg>
      </View>

      {/* Medication History */}
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

      {/* Action Buttons */}
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

      {/* Footer */}
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
  streakContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0F4D80',
    marginBottom: 10,
  },
  historySection: {
    padding: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    marginBottom: 20,
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

