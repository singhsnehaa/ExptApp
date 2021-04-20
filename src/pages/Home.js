import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Header from '../common/Header';
import Icons from '../common/Icons';
import {COLORS} from '../common/Colors';

export class Home extends Component {
  state = {};

  componentDidMount() {
    this.unsubscribe = this.props.navigation.addListener('focus', () => {
      // do something
      console.log('Home Page');
    });
  }

  // componentWillUnmount() {
  //   this.unsubscribe();
  //   console.log('componentWillUnmount Home Page');
  // }

  render() {
    return (
      <>
        <Header
          title={'Home'}
          MenuDrawerButton
          headerStyle={{backgroundColor: COLORS.WARNING, zIndex: 100}}
          titleStyle={{color: COLORS.WHITE}}
        />
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 25, color: COLORS.WARNING}}>Home Page</Text>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: COLORS.GREY,
              margin: 10,
            }}
            onPress={() => this.props.navigation.navigate('HomeDetails')}>
            <Text style={{color: COLORS.WHITE}}>Go to Home Details --></Text>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default Home;
