import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import HomeScreen from '../screen/HomeScreen';
import CartScreen from '../screen/CartScreen';
import FavouriteScreen from '../screen/FavouriteScreen';
import GameDetailsScreen from '../screen/GameDetailsScreen';

import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

// Stack Navigator for Home Screen and Game Details Screen
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GameDetails"
        component={GameDetailsScreen}
        options={({ route }) => ({
          title: route?.params?.title,
        })}
      />
    </Stack.Navigator>
  );
};

// Tab Navigator containing Home, Cart, and Favourite Screens
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { backgroundColor: '#AD40AF' },
        tabBarInactiveTintColor: '#FFF',
        tabBarActiveTintColor: '#FFFF00',
      }}>
      {/* Home Screen */}
      <Tab.Screen
        name="Home2"
        component={HomeStack}
        options={({ route }) => ({
          tabBarStyle: {
            display: getTabBarVisibility(route), // Function to determine tabBar visibility
            backgroundColor: '#AD40AF',
          },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        })}
      />
      {/* Cart Screen */}
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-bag" color={color} size={size} />
          ),
          tabBarBadge: 3,
          tabBarBadgeStyle: { backgroundColor: '#FFFF00' },
        }}
      />
      {/* Favourite Screen */}
      <Tab.Screen
        name="Favourite"
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Function to determine tabBar visibility based on the route name
const getTabBarVisibility = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  return routeName === 'GameDetails' ? 'none' : 'flex';
};

export default TabNavigator;
