import React, {useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {
  normalize,
  dim,
  AppBarHeight,
  StatusBarHeight,
} from '../common/Platform';
import {COLORS} from '../common/Colors';
import Icons from '../common/Icons';
import Header from '../common/Header';

export function Splashscreen() {
  useEffect(() => {
    // RNBootSplash.hide({fade: true});
    RNBootSplash.hide();
  }, []);

  return (
    <>
      <Header
        title={'Splashscreen Page Header'}
        MenuDrawerButton
        headerStyle={{backgroundColor: COLORS.WARNING, zIndex: 100}}
        titleStyle={{color: COLORS.WHITE}}
      />

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Splashscreen Screen</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
