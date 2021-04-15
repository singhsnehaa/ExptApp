import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../pages/Home';
import HomeDetails from '../pages/HomeDetails';
import Profile from '../pages/Profile';
import ProfileDetails from '../pages/ProfileDetails';
import Setting from '../pages/Setting';
import SettingDeatils from '../pages/SettingDeatils';
import InnerDetailsSetting from '../pages/InnerDetailsSetting';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SettingStack = createStackNavigator();

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

export function SettingStackContainer() {
  return (
    <SettingStack.Navigator screenOptions={{headerShown: false}}>
      <SettingStack.Screen name="Setting" component={Setting} />
      <SettingStack.Screen name="SettingDeatils" component={SettingDeatils} />
      <SettingStack.Screen
        name="InnerDetailsSetting"
        component={InnerDetailsSetting}
      />
    </SettingStack.Navigator>
  );
}
