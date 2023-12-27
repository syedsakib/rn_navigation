import React from 'react';

// Screens
import OnboardingScreen from '../screen/OnboardingScreen';
import LoginScreen from '../screen/LoginScreen';
import RegisterScreen from '../screen/RegisterScreen';

// Navigation
import {createStackNavigator} from '@react-navigation/stack';

// Create a stack navigator
const Stack = createStackNavigator();

// AuthStack component for authentication-related screens
const AuthStack = () => {
  return (
    // Stack.Navigator to define the navigation stack
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* Screen for onboarding */}
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />

      {/* Screen for login */}
      <Stack.Screen name="Login" component={LoginScreen} />

      {/* Screen for registration */}
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
