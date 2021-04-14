import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../pages/Home';
import HomeDetails from '../pages/HomeDetails';
import Profile from '../pages/Profile';
import ProfileDetails from '../pages/ProfileDetails';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

export function HomeStackContainer() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="HomeDetails" component={HomeDetails} />
    </HomeStack.Navigator>
  );
}

export function ProfileStackContainer() {
  return (
    <ProfileStack.Navigator screenOptions={{headerShown: false}}>
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="ProfileDetails" component={ProfileDetails} />
    </ProfileStack.Navigator>
  );
}
