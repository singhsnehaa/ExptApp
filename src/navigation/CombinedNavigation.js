import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Home(props) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Page</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('HomeDetails')}>
        <Text>Go to Home Details</Text>
      </TouchableOpacity>
    </View>
  );
}

function HomeDetails() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Details</Text>
    </View>
  );
}

function Profile(props) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile Page</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('ProfileDetails')}>
        <Text>Go to Profile Details</Text>
      </TouchableOpacity>
    </View>
  );
}

function ProfileDetails() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile Details</Text>
    </View>
  );
}

function Notification() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notification</Text>
    </View>
  );
}

function Setting() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Setting</Text>
    </View>
  );
}

function HomeStackContainer() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="HomeDetails" component={HomeDetails} />
    </HomeStack.Navigator>
  );
}

function ProfileStackContainer() {
  return (
    <ProfileStack.Navigator screenOptions={{headerShown: false}}>
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen name="ProfileDetails" component={ProfileDetails} />
    </ProfileStack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackContainer} />
      <Tab.Screen name="Pofile" component={ProfileStackContainer} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
}

export function RootNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="Notification" component={Notification} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
