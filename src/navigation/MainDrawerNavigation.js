import * as React from 'react';
import {View, Text} from 'react-native';
import {Splashscreen} from '../screens/Splashscreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
const Drawer = createDrawerNavigator();

export function MainDrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Splashscreen">
        <Drawer.Screen name="Splashscreen" component={Splashscreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
