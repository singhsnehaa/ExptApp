import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NavigationContainer} from '@react-navigation/native';
import {HomeStackContainer, ProfileStackContainer} from './StackNavigator';
import Setting from '../pages/Setting';
import {COLORS} from '../common/Colors';
import {
  normalize,
  dim,
  AppBarHeight,
  StatusBarHeight,
} from '../common/Platform';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: COLORS.WARNING,
        activeBackgroundColor: 'yellow',
        //height: 60,
      }}
      tabStyle={{
        backgroundColor: 'green',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackContainer}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Ionicons
              size={size}
              name={focused ? 'home' : 'home'}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Pofile"
        component={ProfileStackContainer}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <AntDesign
              size={size}
              name={focused ? 'user' : 'user'}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <Ionicons
              size={size}
              name={focused ? 'settings' : 'settings'}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
