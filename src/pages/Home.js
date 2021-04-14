import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Header from '../common/Header';
import Icons from '../common/Icons';
import {COLORS} from '../common/Colors';

function Home(props) {
  return (
    <>
      <Header
        title={'Home'}
        MenuDrawerButton
        headerStyle={{backgroundColor: COLORS.WARNING, zIndex: 100}}
        titleStyle={{color: COLORS.WHITE}}
      />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: COLORS.SUCCESS}}>
          Home Page11
        </Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('HomeDetails')}>
          <Text>Go to Home Details</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Home;
