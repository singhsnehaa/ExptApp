import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

import Header from '../common/Header';
import Icons from '../common/Icons';
import {COLORS} from '../common/Colors';

function HomeDetails() {
  return (
    <>
      <Header
        title={'Home Details'}
        backButton
        headerStyle={{backgroundColor: COLORS.WARNING, zIndex: 100}}
        titleStyle={{color: COLORS.WHITE}}
      />

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home Details</Text>
      </View>
    </>
  );
}

export default HomeDetails;
