import React, {useContext} from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';

// Stacks
import AuthStack from './AuthStack';
import AppStack from './AppStack';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from '../context/AuthContext';

const AppNav = () => {
  // Accessing userToken and isLoading from AuthContext
  const {userToken, isLoading} = useContext(AuthContext);

  // If still loading, display a loading animation
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <LottieView
          style={{width: 250, height: 250}}
          source={require('../assets/images/LoadingAnimation.json')}
          autoPlay
          loop
        />
      </View>
    );
  }

  // If userToken exists, navigate to AppStack; otherwise, navigate to AuthStack
  return (
    <NavigationContainer>
      {userToken !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default AppNav;
