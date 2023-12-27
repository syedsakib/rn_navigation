import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GamingImg from '../assets/images/misc/gaming.svg';

const OnboardingScreen = ({navigation}) => {
  // Function to navigate to the Login screen
  const navigateToHome = () => {
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.appTitle}>GAMEON</Text>
      </View>

      {/* Gaming Image Section */}
      <View style={styles.gamingContainer}>
        <GamingImg width={300} height={300} style={styles.gamingImage} />
      </View>

      {/* Begin Button Section */}
      <TouchableOpacity onPress={navigateToHome} style={styles.beginButton}>
        <Text style={styles.beginButtonText}>Let's Begin</Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#FFF" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  header: {
    marginTop: 30,
  },
  appTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#20315F',
    fontFamily: 'Inter-Bold',
  },
  gamingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gamingImage: {
    transform: [{rotate: '-15deg'}],
  },
  beginButton: {
    backgroundColor: '#AD40AF',
    width: '90%',
    padding: 20,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  beginButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'Roboto-MediumItalic',
  },
});

export default OnboardingScreen;
