import * as React from 'react';
import {View, Text} from 'react-native';
import {FacebookLogin} from '../screens/FacebookLogin';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
const Drawer = createDrawerNavigator();

export function MainDrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="FacebookLogin">
        <Drawer.Screen name="FacebookLogin" component={FacebookLogin} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
