import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabNavigator} from './TabNavigator';
import Notification from '../pages/Notification';
import {COLORS} from '../common/Colors';
import {
  normalize,
  dim,
  AppBarHeight,
  StatusBarHeight,
} from '../common/Platform';
import Icons from '../common/Icons';
import linking from '../pages/linking';

const Drawer = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Drawer.Navigator
        initialRouteName="Home"
        openByDefault={false}
        //drawerContent={props => <CustomDrawerContent {...this.props} />}
        drawerStyle={{
          backgroundColor: 'lightgray',
          borderTopRightRadius: normalize(8),
          marginTop: AppBarHeight() - 20,
          marginBottom: normalize(24),
          borderBottomRightRadius: normalize(8),
          width: '75%',
        }}
        drawerType={'front'}
        drawerContentOptions={{
          itemStyle: {marginVertical: normalize(8)},
        }}>
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="Notification" component={Notification} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
