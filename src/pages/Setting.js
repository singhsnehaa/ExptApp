import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Header from '../common/Header';
import Icons from '../common/Icons';
import {COLORS} from '../common/Colors';

function Setting() {
  return (
    <>
      <Header
        title={'Settings'}
        MenuDrawerButton
        headerStyle={{backgroundColor: COLORS.PRIMARY, zIndex: 100}}
        titleStyle={{color: COLORS.WHITE}}
      />

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Setting</Text>
      </View>
    </>
  );
}

export default Setting;
