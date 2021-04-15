import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Header from '../common/Header';
import Icons from '../common/Icons';
import {COLORS} from '../common/Colors';

function Profile(props) {
  return (
    <>
      <Header
        title={'Profile'}
        MenuDrawerButton
        headerStyle={{backgroundColor: COLORS.WARNING, zIndex: 100}}
        titleStyle={{color: COLORS.WHITE}}
      />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 25, color: COLORS.WARNING}}>Profile Page</Text>
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: COLORS.GREY,
            margin: 10,
          }}
          onPress={() => props.navigation.navigate('ProfileDetails')}>
          <Text>Go to Profile Details --></Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Profile;
