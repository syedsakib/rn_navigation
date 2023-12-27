import React, {useContext} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {AuthContext} from '../context/AuthContext';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginSVG from '../assets/images/misc/login.svg';
import GoogleSVG from '../assets/images/misc/google.svg';
import FacebookSVG from '../assets/images/misc/facebook.svg';
import TwitterSVG from '../assets/images/misc/twitter.svg';

const LoginScreen = ({navigation}) => {
  const {login} = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.logoContainer}>
          <LoginSVG height={300} width={300} style={styles.rotatedLogo} />
        </View>
        <Text style={styles.title}>Login</Text>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <MaterialIcons
            name="alternate-email"
            size={20}
            color="#666"
            style={styles.icon}
          />
          <TextInput
            placeholder="Email ID"
            keyboardType="email-address"
            style={styles.input}
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Ionicons
            name="lock-closed-outline"
            size={20}
            color="#666"
            style={styles.icon}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={[styles.input, {flex: 1}]}
          />
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.forgetPassword}>Forget?</Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity onPress={() => login()} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Or, login with ... */}
        <Text style={styles.orText}>Or, login with ...</Text>

        {/* Social Media Icons */}
        <View style={styles.socialMediaIconsContainer}>
          <TouchableOpacity style={styles.socialMediaIcon}>
            <GoogleSVG height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialMediaIcon}>
            <FacebookSVG height={24} width={24} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialMediaIcon}>
            <TwitterSVG height={24} width={24} />
          </TouchableOpacity>
        </View>

        {/* New to the app? */}
        <View style={styles.newToAppContainer}>
          <Text style={styles.newToAppText}>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerLink}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  contentContainer: {
    paddingHorizontal: 30,
  },
  logoContainer: {
    alignItems: 'center',
  },
  rotatedLogo: {
    transform: [{rotate: '-5deg'}],
  },
  title: {
    fontFamily: 'Roboto-Medium',
    fontSize: 28,
    fontWeight: '500',
    marginBottom: 30,
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 25,
  },
  icon: {
    paddingTop: 4,
    marginRight: 5,
  },
  input: {
    paddingVertical: 0,
  },
  forgetPassword: {
    color: '#AD40AF',
    fontWeight: '700',
  },
  loginButton: {
    backgroundColor: '#AD40AF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  loginButtonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700',
    fontSize: 16,
  },
  orText: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
    fontSize: 14,
  },
  socialMediaIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  socialMediaIcon: {
    borderColor: '#DDD',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  newToAppContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  newToAppText: {
    fontSize: 14,
    marginRight: 5,
  },
  registerLink: {
    color: '#AD40AF',
    fontWeight: '700',
    fontSize: 14,
  },
});

export default LoginScreen;
