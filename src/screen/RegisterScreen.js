import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import DatePicker from 'react-native-date-picker';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import RegistrationSVG from '../assets/images/misc/registration.svg';
import GoogleSVG from '../assets/images/misc/google.svg';
import FacebookSVG from '../assets/images/misc/facebook.svg';
import TwitterSVG from '../assets/images/misc/twitter.svg';

const RegisterScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dobLabel, setDobLabel] = useState('Date of Birth');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}>
        <View style={styles.centered}>
          <RegistrationSVG
            height={300}
            width={300}
            style={styles.rotatedLogo}
          />
        </View>
        <Text style={styles.title}>Register</Text>

        {/* Full Name Input */}
        <View style={styles.inputContainer}>
          <MaterialIcons
            name="person-outline"
            size={20}
            color="#666"
            style={styles.icon}
          />
          <TextInput placeholder="Full Name" style={styles.input} />
        </View>

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
        </View>

        {/* Confirm Password Input */}
        <View style={styles.inputContainer}>
          <Ionicons
            name="lock-closed-outline"
            size={20}
            color="#666"
            style={styles.icon}
          />
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry={true}
            style={[styles.input, {flex: 1}]}
          />
        </View>

        {/* Date of Birth Input */}
        <View style={styles.inputContainer}>
          <Ionicons
            name="calendar-outline"
            size={20}
            color="#666"
            style={styles.icon}
          />
          <TouchableOpacity onPress={() => setOpen(true)}>
            <Text style={styles.dobText}>{dobLabel}</Text>
          </TouchableOpacity>
        </View>

        {/* Register Button */}
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>

        {/* Or, register with ... */}
        <Text style={styles.orText}>Or, register with ...</Text>

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

        {/* Already Registered */}
        <View style={styles.alreadyRegisteredContainer}>
          <Text style={styles.alreadyRegisteredText}>Already Registered?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>

        <DatePicker
          modal
          open={open}
          date={date}
          mode={'date'}
          maximumDate={new Date()}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
            setDobLabel(date.toDateString());
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  scrollView: {
    paddingHorizontal: 30,
  },
  centered: {
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
  dobText: {
    color: '#666',
  },
  registerButton: {
    backgroundColor: '#AD40AF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  registerButtonText: {
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
  alreadyRegisteredContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  alreadyRegisteredText: {
    fontSize: 14,
    marginRight: 5,
  },
  loginLink: {
    color: '#AD40AF',
    fontWeight: '700',
    fontSize: 14,
  },
});

export default RegisterScreen;
