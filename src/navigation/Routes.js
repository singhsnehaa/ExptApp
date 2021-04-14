import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {UploadResume} from '../screens/UploadResume';
import {ContactList} from '../screens/ContactList';
import {HomeScreen} from '../screens/HomeScreen';

const Stack = createStackNavigator();

function AppRouter() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="UploadResume" component={UploadResume} />
        <Stack.Screen name="ContactList" component={ContactList} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRouter;
