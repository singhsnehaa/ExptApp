import * as React from 'react';
import {View, Text} from 'react-native';
import {HomeScreen} from '../screens/HomeScreen';
import {ContactList} from '../screens/ContactList';
import {UploadResume} from '../screens/UploadResume';
import {VideoList} from '../screens/VideoList';
import {AppleSignIn} from '../screens/AppleSignIn';
import {TooltipExmpl} from '../screens/TooltipExmpl';
import {SigninGoogle} from '../screens/SigninGoogle';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
const Drawer = createDrawerNavigator();

export function MainDrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="TooltipExmpl">
        <Drawer.Screen name="SigninGoogle" component={SigninGoogle} />
        <Drawer.Screen name="AppleSignIn" component={AppleSignIn} />
        <Drawer.Screen name="TooltipExmpl" component={TooltipExmpl} />
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="VideoList" component={VideoList} />
        <Drawer.Screen name="ContactList" component={ContactList} />
        <Drawer.Screen name="UploadResume" component={UploadResume} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
