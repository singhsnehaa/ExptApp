import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {COLORS} from '../common/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function Home(props) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home Page </Text>
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
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: COLORS.WARNING,
        inactiveTintColor: 'gray',
        showLabel: false,

        // activeTabStyle: {
        //   fontWeight: 'bold',
        //   backgroundColor: 'red',
        // },
        //activeBackgroundColor: 'yellow',
        style: {
          height: 64,
          marginBottom: 10,
          borderRadius: 50,
          marginLeft: 40,
          marginRight: 40,
          backgroundColor: '#33cc33',
        },
        tabStyle: {
          borderLeftWidth: 1,
          borderLeftColor: '#fff',

          //paddingTop: 10,
          //borderTopColor: '#3A3AB5',
          //borderTopWidth: 1,
          //height: 64,
          //borderTopWidth: 0,
          // backgroundColor: 'transparent',
          //elevation: 30,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackContainer}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <FontAwesome
              size={30}
              name={focused ? 'home' : 'comment-o'}
              color={COLORS.WHITE}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Pofile"
        component={ProfileStackContainer}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <MaterialCommunityIcons
              size={30}
              name="face-profile"
              color={COLORS.WHITE}
            />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({color, size, focused}) => (
            <MaterialIcons size={30} name="settings" color={COLORS.WHITE} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export function CombinedNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="Notification" component={Notification} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bottomBarStyle: {
    paddingTop: 10,
    borderTopColor: '#3A3AB5',
    borderTopWidth: 100,
  },
});
