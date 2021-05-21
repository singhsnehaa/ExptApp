import * as React from 'react';
import {View, Text} from 'react-native';
import {SwipeList} from '../screens/SwipeList';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
const Drawer = createDrawerNavigator();

export function MainDrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="SwipeList">
        <Drawer.Screen name="SwipeList" component={SwipeList} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
