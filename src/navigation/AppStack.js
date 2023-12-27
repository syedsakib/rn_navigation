import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ProfileScreen from '../screen/ProfileScreen';
import MessagesScreen from '../screen/MessagesScreen';
import MomentsScreen from '../screen/MomentsScreen';
import SettingsScreen from '../screen/SettingsScreen';

import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
const Drawer = createDrawerNavigator();
import TabNavigator from './TabNavigator';

// AppStack combining DrawerNavigator and TabNavigator
const AppStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />} // Custom drawer content
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}>
      {/* Home Screen - TabNavigator */}
      <Drawer.Screen
        name="Home"
        component={TabNavigator}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      {/* Profile Screen */}
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      {/* Messages Screen */}
      <Drawer.Screen
        name="Messages"
        component={MessagesScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons
              name="chatbox-ellipses-outline"
              size={22}
              color={color}
            />
          ),
        }}
      />
      {/* Moments Screen */}
      <Drawer.Screen
        name="Moments"
        component={MomentsScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="time-outline" size={22} color={color} />
          ),
        }}
      />
      {/* Settings Screen */}
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AppStack;
