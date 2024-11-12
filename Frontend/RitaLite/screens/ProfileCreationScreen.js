// ProfileCreationScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Switch } from 'react-native';
import Header from '../(tabs)/header';

export default function ProfileCreationScreen({ navigation, setUserCredentials }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isNewsletterSubscribed, setIsNewsletterSubscribed] = useState(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  const handleProfileCreation = () => {
    if (email && password && password === confirmPassword && isTermsAccepted) {
      setUserCredentials({ email, password });
      navigation.replace('AboutYouScreen');
    } else {
      alert("Please fill all fields correctly and accept the terms.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} title="Create an Account" />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.progressContainer}>
          <View style={styles.progressBar} />
          <Text style={styles.progressText}>20% complete</Text>
        </View>
        
        <Text style={styles.title}>Create an Account</Text>
        <Text style={styles.subtitle}>To get started, enter your email address and choose a password.</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Email address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <View style={styles.passwordContainer}>
          <Text style={styles.passwordLabel}>Choose a password</Text>
          <Text style={styles.passwordHelpText}>
            Your password must be at least 8 characters long and contain upper and lowercase letters, at least 1 number and 1 symbol.
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
        </View>

        <View style={styles.newsletterContainer}>
          <Text style={styles.newsletterLabel}>
            Optional: I would like to receive more feature and health advice and offers from Rita by email.
          </Text>
          <Switch
            value={isNewsletterSubscribed}
            onValueChange={setIsNewsletterSubscribed}
          />
        </View>

        <View style={styles.termsContainer}>
          <TouchableOpacity onPress={() => setIsTermsAccepted(!isTermsAccepted)} style={styles.checkboxContainer}>
            <View style={[styles.checkbox, isTermsAccepted && styles.checkboxChecked]} />
            <Text style={styles.termsText}>
              I have read and I agree to the Well <Text style={styles.linkText}>Terms & Conditions</Text> and <Text style={styles.linkText}>Privacy Policy</Text>.
            </Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.button} onPress={handleProfileCreation}>
          <Text style={styles.buttonText}>Continue</Text>
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
    width: '20%',
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
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  passwordContainer: {
    marginBottom: 20,
  },
  passwordLabel: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  passwordHelpText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  newsletterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  newsletterLabel: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    marginRight: 10,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
  },
  checkboxChecked: {
    backgroundColor: 'green',
  },
  termsText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  linkText: {
    color: '#4F5D75',
    textDecorationLine: 'underline',
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
});
