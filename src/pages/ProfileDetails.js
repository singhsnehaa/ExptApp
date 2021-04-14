import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Header from '../common/Header';
import Icons from '../common/Icons';
import {COLORS} from '../common/Colors';

function ProfileDetails() {
  return (
    <>
      <Header
        title={'Profile Details'}
        backButton
        headerStyle={{backgroundColor: COLORS.SECONDARY, zIndex: 100}}
        titleStyle={{color: COLORS.WHITE}}
      />

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Profile Details</Text>
      </View>
    </>
  );
}

export default ProfileDetails;
