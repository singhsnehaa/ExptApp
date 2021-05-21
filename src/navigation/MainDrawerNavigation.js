import * as React from 'react';
import {View, Text} from 'react-native';
import {IntroSlider} from '../screens/IntroSlider';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
const Drawer = createDrawerNavigator();

export function MainDrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="IntroSlider">
        <Drawer.Screen name="IntroSlider" component={IntroSlider} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
