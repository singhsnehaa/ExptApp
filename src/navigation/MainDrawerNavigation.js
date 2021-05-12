import * as React from 'react';
import {View, Text} from 'react-native';
import {Demo} from '../screens/Demo';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
const Drawer = createDrawerNavigator();

export function MainDrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Demo">
        <Drawer.Screen name="Demo" component={Demo} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
