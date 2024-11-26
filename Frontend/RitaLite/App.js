// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './screens/SplashScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import IntroScreen from './screens/IntroScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileCreationScreen from './screens/ProfileCreationScreen';
import AboutYouScreen from './screens/AboutYouScreen';
import AddressScreen from './screens/AddressScreen';
import TermsScreen from './screens/TermsScreen';
import DashboardScreen from './screens/DashboardScreen';
import ReminderScreen from './screens/ReminderScreen';
import MedicationManagementScreen from './screens/MedicationManagementScreen';
import AddMedicationOptionsScreen from './screens/AddMedicationOptionsScreen';
import NewMedicationScreen from './screens/NewMedicationScreen';
import AssistantScreen from './screens/AssistantScreen';
import ProfileSettingsScreen from './screens/ProfileSettingsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [userCredentials, setUserCredentials] = useState(null);

  // Define a wrapper component for ProfileCreationScreen
  const ProfileCreationScreenWrapper = (props) => (
    <ProfileCreationScreen {...props} setUserCredentials={setUserCredentials} />
  );

  // Define a wrapper component for LoginScreen
  const LoginScreenWrapper = (props) => (
    <LoginScreen {...props} userCredentials={userCredentials} />
  );

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="IntroScreen" component={IntroScreen} />
        <Stack.Screen name="ProfileCreationScreen" component={ProfileCreationScreenWrapper} />
        <Stack.Screen name="AboutYouScreen" component={AboutYouScreen} />
        <Stack.Screen name="AddressScreen" component={AddressScreen} />
        <Stack.Screen name="TermsScreen" component={TermsScreen} />
        <Stack.Screen name="DashboardScreen" component={DashboardScreen} />
        <Stack.Screen name="ReminderScreen" component={ReminderScreen} />
        <Stack.Screen name="MedicationManagementScreen" component={MedicationManagementScreen} />
        <Stack.Screen name="AddMedicationOptionsScreen" component={AddMedicationOptionsScreen} />
        <Stack.Screen name="NewMedicationScreen" component={NewMedicationScreen} />
        <Stack.Screen name="AssistantScreen" component={AssistantScreen} />
        <Stack.Screen name="ProfileSettingsScreen" component={ProfileSettingsScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreenWrapper} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
