import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Switch} from 'react-native';
import Header from '../(tabs)/header';

export default function TermsScreen({ navigation }) {
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const handleContinue = () => {
    if (isTermsAccepted) {
      navigation.replace('LoginScreen');
    } else {
      alert("Please accept the terms to continue.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title="Terms and Conditions" />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.progressContainer}>
          <View style={styles.progressBar} />
          <Text style={styles.progressText}>100% complete</Text>
        </View>

        <Text style={styles.title}>Terms and Conditions</Text>
        <Text style={styles.description}>
          To create your account, you must agree to the following:
        </Text>

        <Text style={styles.description}>
          We will tell the NHS that loverita.co.uk is your nominated medication tracking platform. This just means that your GP will know to send your prescriptions to us.
        </Text>

        <Text style={styles.description}>
          We may occasionally need to contact your GP regarding your prescription.
        </Text>

        <View style={styles.termsBox}>
        <View style={styles.termsContainer}>
        <Text style={styles.termsLabel}>
        I am happy for my GP to send my prescriptions to loverita.co.uk
        </Text>
        <Switch
        value={isTermsAccepted}
        onValueChange={setIsTermsAccepted}

        />

        </View>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Finish</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F2F2F2',
    },
    contentContainer: {
      paddingHorizontal: 20,
      paddingTop: 20,
    },
    progressContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20,
    },
    progressBar: {
      height: 6,
      width: '75%',
      backgroundColor: '#0F4D80',
      borderRadius: 3,
    },
    progressText: {
      marginLeft: 10,
      color: '#4F5D75',
      fontSize: 14,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      textAlign: 'center',
      marginBottom: 10,
    },
    description: {
      fontSize: 16,
      color: '#666',
      textAlign: 'center',
      marginBottom: 15,
    },
    termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    },
    termsLabel: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    marginRight: 10,
    },
    button: {
      backgroundColor: '#0F4D80',
      paddingVertical: 15,
      borderRadius: 8,
      alignItems: 'center',
      marginBottom: 30,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    termsBox: {
        borderWidth: 1,
        borderColor: '#0F4D80',
        borderRadius: 5,
        padding: 20,
        marginBottom: 80,
        marginTop: 30,
    },
  });
