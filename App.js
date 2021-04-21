import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Root} from 'native-base';
import AppRouter from './src/navigation/Routes';
import {MainDrawerNavigation} from './src/navigation/MainDrawerNavigation';
import {CombinedNavigation} from './src/navigation/CombinedNavigation';
import {DrawerNavigator} from './src/navigation/DrawerNavigator';

const App = () => {
  return (
    <Root>
      {/* <AppRouter /> */}
      {/* <MainDrawerNavigation /> */}
      {/* <CombinedNavigation /> */}
      <DrawerNavigator />
    </Root>
  );
};

export default App;
