import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Header from '../common/Header';
import Icons from '../common/Icons';
import {COLORS} from '../common/Colors';

function Setting(props) {
  return (
    <>
      <Header
        title={'Settings'}
        MenuDrawerButton
        headerStyle={{backgroundColor: COLORS.PRIMARY, zIndex: 100}}
        titleStyle={{color: COLORS.WHITE}}
      />

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 25, color: COLORS.WARNING}}>Setting</Text>
        <TouchableOpacity
          style={{
            padding: 10,
            backgroundColor: COLORS.GREY,
            margin: 10,
          }}
          onPress={() => props.navigation.navigate('SettingDeatils')}>
          <Text style={{color: COLORS.WHITE}}>Go to Setting Details --></Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});

export default Setting;
