import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

import Header from '../common/Header';
import Icons from '../common/Icons';
import {COLORS} from '../common/Colors';

export class HomeDetails extends Component {
  componentDidMount = () => {
    console.log('Home Details Page');
  };

  render() {
    return (
      <>
        <Header
          title={'Home Details'}
          backButton
          headerStyle={{backgroundColor: COLORS.WARNING, zIndex: 100}}
          titleStyle={{color: COLORS.WHITE}}
        />

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 25, color: COLORS.WARNING}}>
            Home Details
          </Text>
        </View>
      </>
    );
  }
}

export default HomeDetails;
